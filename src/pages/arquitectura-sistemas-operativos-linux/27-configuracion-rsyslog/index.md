---
title: 27- Configuración de Rsyslog
---
## Configuración de Rsyslog 


Syslog es un estándar 	el cual permite 	la captura, procesamiento, transporte, y funcionalidades para realizar el envío de los registros del sistema a traves de redes IP con el fin de centralizar los registros. 
Provee funcionalidades de login a aplicaciones y dispositivos. 
Provee a los administradores control sobre los logs a partir de las etiquetas asociadas a un subsistema de aplicaciones(facility): 
```
auth y authpriv: para autenticación
cron: proviene servicios de programación de tareas, cron y atd
daemon: afecta un demonio sin clasificación especial 
ftp: el servidor FTP
kern: mensaje que proviene del kernel
lpr: proviene del subsistema de impresión
mail: proviene del subsistema de correo electrónico
news: mensaje del subsistema Usenet (especialmente de un servidor NNTP)
syslog: mensajes del servidor syslogd en sí
user: mensajes de usuario (genéricos)
uucp: mensajes del servidor UUCP
local0 a local7: reservados para uso local
```

Cada mensaje tiene asociado también un nivel de prioridad: 
```
emerg: «¡Ayuda!» Hay una emergencia y el sistema probablemente está inutilizado.
alerta: apúrese, cualquier demora puede ser peligrosa, debe reaccionar inmediatamente;
crit: las condiciones son críticas;
err: error;
warn: advertencia (error potencial);
notice: las condiciones son normales pero el mensaje es importante;
info: mensaje informativo;
debug: mensaje de depuración. 
```

Rsyslog es un eficiente y rápido sistema de procesamiento de registros de sistema.


Para mayor información: <a href='https://proyectosbeta.net/2012/07/configurar-rsyslog-en-debian-squeeze/' target='_blank' rel='nofollow'>https://proyectosbeta.net/2012/07/configurar-rsyslog-en-debian-squeeze/</a>

