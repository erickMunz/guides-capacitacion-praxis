
---
title: 1-Instalación
---
## ¿Instalación?

La instalación de elasticsearch es relativamente sencilla, existen varias opciones:

- Zip
- Servicio
- Docker

## Zip

Dentro de la página oficial de elasticsearch en la pestaña de downloads podemos encontrar a [elasticsearch](https://www.elastic.co/downloads/elasticsearch)
dentro de las opciones de encontrara **ZIP**

Para su instalación :
 - **Descagar** y **descomprimir** la carpeta
 - entrar al folden **bin**
 - Ejecutar el archivo **elasticsearch** ( en ubuntu ./**elasticsearch**)
 - Probar en el navegador con **localhost:9200**
 - Visualizar un json con la leyenda "***You know, for search***

## Servicio

Dentro de la página oficial de elasticsearch en la pestaña de downloads podemos encontrar a [elasticsearch](https://www.elastic.co/downloads/elasticsearch)
dentro de las opciones de encontrara **DEB**
Siendo un archivo **.deb** su instalación es diferente:

 - Para instalar el archivo se hace uso del comando **dpgk -i** ***archivo.deb*** en donde **archivo.deb** es el archivo descargado
 - Al ejecutar ese comando ya debería de haber instalado elasticsearch pero se debe de  invocar
 - Para invocar elasticsearch se hace uso del comando **sudo service elasticsearch start**
 - probar en el navegador con **localhost:9200**
 - Visualizar un json con la leyenda "***You know, for search***

## Docker
