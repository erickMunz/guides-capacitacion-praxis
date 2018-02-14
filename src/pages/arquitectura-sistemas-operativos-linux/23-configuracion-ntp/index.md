---
title: 23-Configuración NTP
---
## Configuración NTP

El protocolo NTP (Network Time Protocol), permite sincronizar los relojes de las computadoras con servidores de tiempo.

Para activar este protocolo es necesario seguir los siguientes pasos en una terminal como usuario root.
verificar la hora del servidor: 
```
#date
``` 

Seleccionar la zona horaria: 
```
#tzselect
```

Instalar el protocolo NTP: 
```
yum install ntp
```
Iniciar el servicio de NTP:
``` 
service ntpd start
```

Para que se inicie cuando se reinicie el equipo:
```
chkconfig ntpd on
```

Verificamos si el servidor esta funcionando. (Tomar en cuenta que se debe tener salida a Internet en el puerto UDP 123). 
```
ntpq -p 
```

Sincronizamos nuestro reloj con otro servidor de tiempo.
Nota: time.apple.com es solo para fines demostrativos, puedes elegir entre otros servidores.
```
ntpdate -u  time.apple.com 
```

Sincronizamos el reloj con la zona horaria
Crear un enlace del archivo de la zona horaria al archivo de tiempo de nuestro equipo. (localtime).
```
ln -sf /usr/share/zoneinfo/America/Mexico_City /etc/localtime
```