---
title: 2-Fundamentos
---

# Fundamentos

Como se mencionó anteriormente elasticsearch es un almacen de documentos distribuidos pero **¿Que clase de documentos guarda?** 
la respuesta es **JSON**

##JSON
**Javascript Object Notation** o bien JSON es un tipo de archivo que se caracteriza por su delimitación por etiquetas, este documento esta hecho para poder ser leido con facilidad y entendido por los programas.

JSON es un formato de texto que es completamente independiente del lenguaje pero utiliza convenciones que son ampliamente conocidos por los programadores de la familia de lenguajes C, incluyendo C, C++, C#, Java, JavaScript, Perl, Python, y muchos otros. Estas propiedades hacen que JSON sea un lenguaje ideal para el intercambio de datos.

Un objeto es un conjunto desordenado de pares nombre/valor. Un objeto comienza con { (llave de apertura) y termine con } (llave de cierre). Cada nombre es seguido por : (dos puntos) y los pares nombre/valor están separados por , (coma

##RESTful API

Esta API será de suma importancia para poder almacenar y obtener información de elasticsearch, dentro de esta API se hacen unos de metodos **HTTP**. Esto puede hacerse de diferentes maneras:
- Curl
Curl es un programa y una librería que permiten operaciones con un URL con comandos dentro de el **Terminal**.
Por ejemplo: 

    curl -X **VERBO** '**PROTOCOLO**://**HOST**/**PATH**?**QUERY_STRING**' -d '**CUERPO**'

- **METODO**: EL metodo apropiado para el protocolo utilizado, en nuestro caso **HTTP** como: **GET**,**POST**,**PUT**,**HEAD**, **DELETE**.
- **PROTOCOLO**: http o https si se tiene habilitado un proxy sobre elasticsearch
- **HOST**: la **dirección IP**a la maquina anfitrión de elastisearch, **localhost** para instalaciónes locales de elasticsearch
- **PUERTO**: **9200** para elasticsearch
- **PATH** : dentro de elasticsearch se manejan **Paths** para definir indices u operaciónes de elasticsearch
- **CUERPO**: El cuerpo es la especificación de la peticion mostrada, en formato **JSON** para su manejo en elasticsearch


