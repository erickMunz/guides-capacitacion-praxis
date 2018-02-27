---
title: 2- Instalación Apache NiFi (Docker)
---
## Instalación Apache NiFi (Docker)

Para continuar con la instalación de Apache NiFi es necesario contar con Docker instaldo sobre nouestro sistema operativo Linux.

**Pasos para habilitar la imagen de Docker NiFi**

1. Ingresar a una terminal de comandos y validar que se tenga instaldo Docker con el siguiente comando

```
 docker --version

```

2. El siguiente comando nos permitira descargar la imagen de *Apache Nifi*

```
docker pull apache/nifi:latest

```

3. Iniciar la imagen descargada mediante la ejecuación del comando a continuación.

```
docker run --name nifi \
  -p 8787:8787 \
  -d \
  -e NIFI_WEB_HTTP_HOST='172.17.0.2' \
  -e NIFI_WEB_HTTP_PORT='9090' \
  apache/nifi:latest

```
Donde -e: es la propiedad indica el valor que se le asignara 

4. 