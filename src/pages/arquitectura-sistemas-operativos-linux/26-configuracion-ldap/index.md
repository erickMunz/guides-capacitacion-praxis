---
title: 26. Configuración Ldap :
---
## 26. Configuración Ldap :

### LDAP :

El Lightweight Directory Access Protocol o LDAP, es un protocolo que usa TCP / IP para hacer consultas y modificaciones a servicio de directorio distribuidos.

### OpenLDAP :
OpenLDAP es una herramienta de código abierto para crear directorio distribuido de direcciones para autentificar  usuarios tantos equipos. 

#### Instalación de OpenLDAP :
```
Ubuntu, Debian :
# sudo apt-get install slapd ldap-utils

Centos, Fedora, Red Hat, Oracle Linux :

#yum -y install openldap compat-openldap openldap-clients openldap-servers openldap-servers-sql openldap-devel

```

Una vez que se se  ejecuta el comando de instalación aparece la siguiente ventana, nos pide que asignemos
una contraseña de administrador :



![Configuración LDAP ](https://image.ibb.co/b4exbS/sp1.png)



Luego nos muestra otra ventana que nos pide de nuevo la contraseña :

![Configuración LDAP ](https://image.ibb.co/fndZO7/sp2.png)


Una vez ingresado la contraseña, continua la instalación :


![Configuración LDAP  ](https://image.ibb.co/kp7iGS/sp3.png)




### Cómo funciona LDAP :

El  servicio  de  directorio LDAP  se  basa  en  un modelo  cliente-servidor. 
Uno  o más  servidores LDAP contienen los datos que conforman el árbol del directorio LDAP o base de datos troncal. el cliente LDAP se conecta con el servidor LDAP y le hace una consulta. El servidor contesta con la respuesta correspondiente, o bien con una indicación de donde puede el cliente hallar más información.



### Arbol de directorio LDAP :

Un árbol de directorio no es nada más que una manera organizada de proveer contenedores para almacenar diferentes tipos de información.


### Configuración básica de OpenLDAP :

Dentro del archivo, añadimos una nueva línea que relacione la dirección IP estática del servid

```
Abrimos el archivo :

root@javier-orta:/etc# nano /etc/hosts

```

Dentro del archivo, añadimos una nueva línea que relacione la dirección IP estática del servidor :

```
  GNU nano 2.5.3                                       Archivo: /etc/hosts                                                                            Modificado  

127.0.0.1       localhost
127.0.1.1       javier-orta

ip_static       hostname

```






De forma predeterminada, slapd se configura con las mínimas opciones necesarias para que el demonio funcione de forma correcta.

Para una Configuración más específica se utiliza otras herramientas y otros comandos.


#### Para más información:
<!-- Please add any articles you think might be helpful to read before writing the article -->
- Instalar y configurar OpenLDAP en el servidor Ubuntu :   <a href='http://somebooks.es/12-7-instalar-y-configurar-openldap-en-el-servidor-ubuntu/' target='_blank' rel='nofollow'>http://somebooks.es/12-7-instalar-y-configurar-openldap-en-el-servidor-ubuntu/</a>

- Configuración del protocolo TCP/IP :
<a href='http://web.mit.edu/rhel-doc/4/RH-DOCS/rhel-rg-es-4/s1-ldap-quickstart.html' target='_blank' rel='nofollow'>http://web.mit.edu/rhel-doc/4/RH-DOCS/rhel-rg-es-4/s1-ldap-quickstart.html</a> 

- Cómo configurar LDAP en Ubuntu Server o Debian :
<a href='https://www.dragonjar.org/como-configurar-ldap-en-ubuntu-server-o-debian.xhtml' target='_blank' rel='nofollow'>https://www.dragonjar.org/como-configurar-ldap-en-ubuntu-server-o-debian.xhtml</a> 





