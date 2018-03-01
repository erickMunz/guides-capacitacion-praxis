---
title: 3-Documento
---

#Que le pasa a un Documento dentro de elasticsearch
 - ¿Por que es casi "tiempo-real"
 - ¿Por que las operaciónes CRUD (create-read-update-delete) son en tiempo-real?
 - ¿Como Elasticsearch garantiza que si existe un problema de energia los cambios hechos sean durables?

###Busqueda de texto
El primer reto es hacer busquedas de texto, anteriormente en las bases de datos almacenan un valor por campo, pero para la búsqueda de texto esto no es suficiente, dado que cada palabra de un texto debe de poder buscarse, y dentro de una base deberia de indexar cada palabra con un valor. 

La estructura que mas se adecua para la busqueda de texto es el **indice invertido**.

### Indice invertido

El indice invertido se compone por una lista de todas las palabras únicas que aparecen dentro de un documento.

Por ejemplo las siguientes oraciones:
* *El rápido zorro marrón saltó sobre el perro perezoso*
* *Rápidos zorros marrones brincan sobre perros perezosos en verano*

Lo primero que se hace es dividir las oraciónes en palabras que tambien se conocen como **term** o **tokens**, de estos se crea la lista con tokens unicos, de la siguiente forma:
``` tsv
Término Doc_1 Doc_2
-------------------------
Rápido | | X
El | X |
marrón | X | X
perro | X |
perros | | X
zorro | X |
zorros | | X
en | | X
saltó | X |
perezoso | X | X
saltar | | X
más | X | X
rápido | X |
verano | | X
el | X |
------------------------
```

De forma que al buscar marrón rápido, solo necesitamos los documentos en donde aparece cada termino:

```
Término Doc_1 Doc_2
-------------------------
marrón | X | X
rápido | X |
------------------------
Total | 2 | 1
```
Como podemos ver ambos documentos coinciden con la búsqueda, pero elasticsearch aplica un *algoritmo de similitud* que cuenta el numero mayor de coincidencias y determina que documento es mas relevante.

El índice invertido puede contener mucha más información que la lista de documentos que contienen un término particular. Puede almacenar un recuento de la cantidad de documentos que contienen cada término, la cantidad de veces que aparece un término en un documento en particular, el orden de los términos en cada documento, la longitud de cada documento, la longitud promedio de todos los documentos y más . Estas estadísticas permiten a Elasticsearch determinar qué términos son más importantes que otros y qué documentos son más importantes que otros

## Inmutabilidad
El índice invertido que se escribe en el disco es inmutable : no cambia. Nunca. Esta inmutabilidad tiene beneficios importantes:
1. No hay necesidad de bloqueo. Si nunca tiene que actualizar el índice, nunca tendrá que preocuparse por múltiples procesos que intenten realizar cambios al mismo tiempo.
2. Una vez que el índice ha sido leído en el caché del sistema de archivos del kernel, permanece allí, porque nunca cambia. Siempre que haya suficiente espacio en la caché del sistema de archivos, la mayoría de las lecturas vendrán de la memoria en lugar de tener que pulsar el disco. Esto proporciona un gran aumento de rendimiento.
3. Cualquier otro caché (como el caché del filtro) sigue siendo válido durante la vigencia del índice. No necesitan ser reconstruidos cada vez que los datos cambian, porque los datos no cambian.
4. Escribir un solo gran índice invertido permite que los datos se compriman, reduciendo la costosa E / S de disco y la cantidad de RAM necesaria para almacenar en caché el índice.
es: **use más de un índice.**

En lugar de reescribir todo el índice invertido, agregue nuevos índices suplementarios para reflejar los cambios más recientes. Cada índice invertido se puede consultar a su vez, empezando por el más antiguo, y los resultados combinados.

Lucene (La biblioteca que usa Elasticsearch), introdujo el concepto de búsqueda por segmento . Un segmento es un índice invertido en sí mismo, per


## Indices dinamicamente actualizados

Como se mencionó anteriormente el problema con los indices invertidos es el hecho de que no se pueden cambiar pero  ¿Cómo resolver un índice invertido sin perder los beneficios de la inmutabilidad? la respuesta o ahora el índice de palabras en Lucene llegó a significar una colección de segmentos más un punto de confirmación: un archivo.que enumera todos los segmentos conocidos, como se muestra en la imagen, "Un índice de Lucene con un punto de confirmación y tres segmentos".
![Confirmación por tres segmentos](https://www.elastic.co/guide/en/elasticsearch/guide/current/images/elas_1101.png)
> No confundir indice de **lucene** que tambien es llamado segmento con el indice de elasticsearch que es una colección de documentos.

##Busqueda por segmento
Una búsqueda por segmento funciona de la siguiente manera:

Los documentos nuevos se recopilan en un búfer de indexación en memoria. 
De vez en cuando, el buffer está comprometido :

1. Un nuevo segmento, un índice invertido suplementario, se escribe en el disco.
2. Se escribe un nuevo punto de confirmación en el disco, que incluye el nombre del nuevo segmento.
3. El disco está fsync'ed -todas las escrituras que esperan en el caché del sistema de archivos se enjuagan en el disco, para garantizar que se hayan escrito físicamente.
4. El nuevo segmento se abre, lo que hace que los documentos que contiene sean visibles para buscar.
5. El búfer en memoria se borra y está listo para aceptar nuevos documentos.7

Imagen "Un índice Lucene con nuevos documentos en el búfer en memoria, listo para confirmar".
![Indice lucene](https://www.elastic.co/guide/en/elasticsearch/guide/current/images/elas_1102.png)

Despues de ejecutar la confirmación, se deberá de limpiar el búfer de memoria com se muestra en la imagen 
![Bufer lucene](https://www.elastic.co/guide/en/elasticsearch/guide/current/images/elas_1103.png)
Cuando se emite una consulta, todos los segmentos conocidos son consultados sucesivamente. Las estadísticas de términos se agregan en todos los segmentos para garantizar que la relevancia de cada término y cada documento se calcule con precisión. De esta forma, se pueden agregar nuevos documentos al índice de forma relativamente económica.

##Elimina y Actualiza editar
Los segmentos son inmutables, por lo que los documentos no pueden eliminarse de los segmentos más antiguos, ni los segmentos más antiguos pueden actualizarse para reflejar una versión más reciente de un documento. En cambio, cada punto de confirmación incluye un .fromfile que enumera los documentos en los que se han eliminado los segmentos.

Cuando se "borra" un documento, en realidad solo se marca como eliminado en el .fromdile. Un documento que se ha marcado como eliminado aún puede coincidir con una consulta, pero se elimina de la lista de resultados antes de que se devuelvan los resultados finales de la consulta.

Las actualizaciones de documentos funcionan de manera similar: cuando se actualiza un documento, la versión anterior del documento se marca como eliminada y la nueva versión del documento se indexa en un nuevo segmento. Quizás ambas versiones del documento coincidan con una consulta, pero la versión eliminada anterior se elimina antes de que se devuelvan los resultados de la consulta.

https://www.elastic.co/guide/en/elasticsearch/guide/current/dynamic-indices.html#img-post-commit