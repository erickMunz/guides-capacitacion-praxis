---
title: 1-Instalación
---
## ¿Que es elasticsearch?

Como lo dice su nombre es un gestor de **búsqueda** que tambien permite la **analitica**.

ElasticSearch es usado para hacer busquedas de texto, estructuradas y analiticos, todo en una solución

## Características:

1.-Usado por **Wikipedia** con búsquedas de texto.
2.-**Github** lo usa para poder hacer **búsquedas** sobre 130  billones de  lineas de codigo
3.-StackOverflow lo usa para encontrar preguntas y respuestas "***mas-como-esto***" de forma que el usuario encuentre mas rápido lo que quiera.

## ¿Por que elasticsearch?
Elasticsearch cuenta con herramientas como: 

## RESTful API
 - Estas API nos permiten tener acceso a los datos de elasticsearch por medio de metodos HTTP como lo son: POST, GET, DELETE.  Elasticsearch tiene esta API integrada.

## Lucene

 - elasticsearch esta basado en leucene2 como SOLR, o mas gestores de búsquedas de texto, lo que nos dara una mayor velocidad en la busqueda de texto.

 
## Kibana
 - Al tener muchos datos dentro de elasticsearch tal vez nos gustaría tener una grafica con ellos, pues Kibana lo permite.

## Logstash

 - Si quisieramos tener un sistema que se encargue de subir información de logs dentro del servidor a elasticsearch, logstash es una herramienta para hacer esto.

## Beats
Adicionalmente elasticsearch cuenta con Beats, que son agentes  para subir información especifica a elasticsearch, tales como archivos, tramas. etc. para mas información:
https://www.elastic.co/products/beats
