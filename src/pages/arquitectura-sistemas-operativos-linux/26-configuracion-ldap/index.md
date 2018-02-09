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

#### Configurar la contraseña de root de LDAP :
Para configurar la contraseña de root, se ejecuta el siguiente comando :
```
# slappasswd
```

Y tiene que mostrar algo parecido a esto :

```
[root @ server ~] # slappasswd
Nueva contraseña: 
Re-ingrese nueva contraseña: 
{SSHA} d / thexcQUuSfe3rx3gRaEhHpNJ52N8D3
[root @ server ~] #

```

#### Configurar el servidor OpenLDAP:

Los archivos de configuración de los servidores OpenLDAP se encuentran en /etc/openldap/slapd.d/

Se deben de modificar las variables:

* olcSuffix - Sufijo de base de datos, es el nombre de dominio para el cual el servidor LDAP proporciona la información.

* olcRootDN : entrada del nombre distinguido de raíz (DN) para el usuario que tiene acceso sin restricciones para realizar todas las actividades de administración en LDAP, como un usuario raíz.

* olcRootPW - Contraseña para el RootDN anterior.

