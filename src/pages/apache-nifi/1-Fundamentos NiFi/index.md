---
title: 1-Fundamentos de NiFi
---
## Fundamentos de NiFi

NiFi es un software desarrollado por Apache Software Foundation, es una herramienta para la automatización de flujo de datos, permitiendo a los usuarios enviar, recibir, manipular, transformar y ordenar información.

Características 

1. Compatibilidad con diferentes herramientas para la distribución de datos.
2. Facil de usar, debido a su interfaz grafica de solo arrestrar y colocar.
3. Facil portabilidad, permite ejecutarse en una computadora portatil o en servidores agrupados.
4. Nifi permite ingerir diferentes tipos de datos, mediante el uso de protocolos de transferencia (FTP, SFTP, HTTP, JMS, UDP, etc.).

---
Arquitectura NiFi
---

![Apache NiFi Architecture](https://nifi.apache.org/docs/nifi-docs/html/images/zero-master-node.png)

NiFi se ejecuta sobre la JVM dentro de un sistema operativo, los elementos principales utlizados por NiFi en la JVM son los siguientes:

- **Web Server**

El propósito del *Web Server* es alojar la API de control y comando basada en HTTP de NiFi.

- **Flow Controller**

EL *flow controller* es el cerebro de la operación. Este funciona como un orquestador que provee de subprocesos para las extenciones, coordina cuando las extenciones reciben recursos para ejectuar.

- **Extensions**

Existen diferentes tipos de NiFi *Extensions*, su objetivo es pérar y executar procesos dentro de la JVM.

- **FlowFile Repository**

El *FlowFile Repository * es donde Nifi almacena el estado que se conoce del archivo de flujo que se encuentra activo en el paso de un sistema a otro.


- **Content Repository**

El *Content Repository* es donde se resguardan los bytes del archivo de flujo (FlowFile). 

- **Provenance Repository**

El *Provenance Repository* es donde se almacenan todos los datos de eventos de procedencia. Dentro de cada ubicación, los datos de los eventos se indexan y se pueden buscar.