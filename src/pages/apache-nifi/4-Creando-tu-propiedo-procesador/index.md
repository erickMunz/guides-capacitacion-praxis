---
title: 4- Creando tu propio procesador
---
## Creando tu propio procesador

Este apartado muestra la forma de crear *Custom processors* que podrán ser utilizados en Apache NiFi. Antes de comenzar con el desarrollo del procesador, es necesario tener los siguientes componentes instalados:

Requisitos:

1. Java (jdk 7 o superior).
2. Maven.
3. Eclipse.

---

Procedimiento

---

1. Crear directorio donde se resguardara el código del procesador.

2. Una vez creado el directorio, ingresar miendiante el uso de la terminal e ingresar el siguiente comando:

```
mvn archetype:generate

```

3. Al ejecutar el comando en la terminar solicitará los datos del groupId y artifactId, el cual puede ser filtrado, ingresar la palabra NiFi.

4. Una vez indicado NiFi seleccionar la opción para generar el procesador *org.apache.nifi:nifi-processor-bundle-archetype*.

5. A continuación mostrarán diferentes versión de la libreria seleccionada, seleccionar la versión 0.2.1 o superior.

6. En los siguientes pasos se definirira el groupId y el artifactId (para mas información sobre groupId y artifectId [click](https://maven.apache.org/guides/mini/guide-naming-conventions.html)).

7. Se solicitara la versión inicial y el artifactBaseName, este ultimo indicara la descripción del paquete proyecto.

8. Una vez que maven termine de crear todos los componentes asociados al archetype, validaremos su construcción al ingresar al directorio donde se creo este. Se debe compilar para comprobar que el directorio fue creado de manera correcta, a continuación se muestran los pasos para realizar la compilación:
	 * Ingresar a la carpeta principal del proyecto del procesador que se desea crear.
	 * Abrir el archivo pom.xml y eliminar la palabra -SNAPSHOT de la etiqueta versión
	 ```
	 < parent >
        < groupId >org.apache.nifi< / groupId >
        < artifactId >nifi-nar-bundles< / artifactId >
        < version >0.1.0-incubating-SNAPSHOT< /version >
     < /parent >
	 ```
     * Ingresar mediante una terminar a la ruta del directorio donde se encuentra el proyecto del procesador creado.
     * Ejecutar el siguiente comando para compilar el proyecto.
     ```
     mvn install
     ```    

     * Validar que se haya compilado de manera correcta al visualizar en pantalla la palabra *BUILD SUCCESS* y localizar dentro del directorio "*nombreProyecto-nar*" en la carpeta target el archivo "*nombrePryecto-1.0.nar*".