---
title: 6-Hands-on 
---
#Tutorial para el uso de elasticsearch

En este pequeño tutorial veremos :
- 1.Creacion de un indice

- 2.Guardar información en el indice

- 3.Buscar esta información 

##Creación de el indice

Como se mencionó anteriormente, elasticsearch cuenta con una REST API, que sirve para definirle los tipos de operaciónes que haremos, estas estarán definidas con metodos HTTTP, como lo son: 
- GET, POST, PUT, DELETE.

La forma mas fácil de crear un indice es por medio de **Kibana** aunque existen diferentes herramientas para crearlo.

Una vez dentro de kibana nos posicionaremos sobre la etiqueta **Dev tools**.

Dentro de Dev tools encontramos una pequeña consola bajo la etiqueta **Console**

y debería de encontrarse la siguiente operación:

```json
GET _search
{
  "query": {
    "match_all": {}
  }
}

```
Esta es una operación típica de kibana a elasticsearch se puede ver de la siguiente forma:

``` json
METODO OPERACIONES
{
    "argumento"
}
```
Entonces para la creación de in indice se hace por medio del metodo PUT seguido por el nombre de el indice, de la siguiente forma:
```
PUT tienda
```
Con esta instrucción basta para crear el indice, pero de esta forma y tambien el indice estara en modo **dynamico** que nos permitira guardar información en el indice sin definirle un esquema.
si queremos definir un esquema este debe de estar en el cuerpo de la petición.
Supongamos que queremos definir un indice para las ventas de una tienda, la operacion seria algo asi:
```json
PUT tienda
{
  "mappings": {
    "ventas":{
      "dynamic":"strict",
      "properties": {
        "id_venta":{"type": "integer"},
        "nombre":{"type": "text"},
        "fecha":{"type": "date"},
        "articulo":{"type": "text"},
        "cantidad":{"type": "integer"}
      }
    }
  }
}
```
En donde "mappings" es la definición del esquema, "ventas" es el **type**.
El **type** es la abtracción de un topico para un indice, algo parecido como una tabla en visto de forma relacional.

La operación **"dynamic":"strict"** hace que el indice no admita información diferente a la definida en el esquema.
Dentro de **"properties":**, se deberán definir los campos y tipos de dato para este indice.

Si todo salio bien tendremos una respuesta como esta.
```json
{
  "acknowledged": true,
  "shards_acknowledged": true,
  "index": "tienda"
}
```
Adicionalmente podemos definirle diferentes operaciones, como:

```json
PUT tienda
{
    "settings" : {
        "index" : {
            "number_of_shards" : 3,
            "number_of_replicas" : 2
        }
    }
}
```
Asi le definimos a elasticsearch el numero de fragmentos y replicas que queremos para el indice.

Si todo salio bien en la parte derecha deberiamos ver la siguiente salida:
```json
{
  "acknowledged": true
}
```
Esto significa que elasticsearch ha creado el indice y esta listo para utilizarlo.

## 2.Guardar información en el indice