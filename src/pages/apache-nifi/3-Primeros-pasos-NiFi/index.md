---
title: 3- Primeros Pasos NiFi
---
## Primeros Pasos NiFi

Este apartado muestra un flujo simple en *Apache NiFi*.

---

**Agregando y configurando procesadores**

---

Antes de iniciar es necesario levantar el servicio de NiFi y posteriormente ingresar a la url donde se desplega la aplicación.

Interfaz web de NiFi

![ NiFi Web Interface](https://2xbbhjxc6wk3v21p62t8n4d4-wpengine.netdna-ssl.com/wp-content/uploads/2018/02/nifi_dataflow_html_interface.png)

*Procedimiento*


1. Diriguirse al menú de componentes de NiFi (parte superior), seleccionar el icono de "Processor" y arrastrar hasta el área de tarea. Este abrira la ventana del procesador done se podrá seleccionar la configuración deseada.
    - Agregar dos procesadores uno de tipo "GenerateFlowFile" y el segundo "LogAtribute"


2. El siguiente paso es configurar los procesadores agregados, para esto dar clic derecho sobre el procesador. Dentro del menu de configuración se encontrarn 4 apartados (Configuración general, tiempos en la ejecución, propiedades y comentarios):
    - Configuración general (setting):
    - Tiempos en ejecución (scheduling): Este apartado indica al procesador cuando se va a ejecutar, con que frecuencia, el tiempo entre cada intervalo para su ejecución.
    - Porpiedades (properties): En esta apartado se configura datos especificos que necesita el procesador que utilizara en tipo de ejecución.
    - Comentarios (comments): Configuración opcional.


3. 