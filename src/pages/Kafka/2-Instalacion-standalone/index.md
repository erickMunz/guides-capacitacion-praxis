---
title: 2- Instalación de Kafka standalone
---
## Instalación de Kafka standalone


La instalación que se realiza es através de un contenedor de Docker.
Al tener docker instalado, procedemos a iniciar el servicio: 
```
$ sudo service docker start
```

Descargar la imagen de Zookeeper Apache: 
```
$ sudo docker pull dockerkafka/zookeeper
```

Descargar la imagen de Kafka Apache:
```
$ docker pull dockerkafka/kafka
```
Es necesario iniciar el contenedor de Kafka Apache y Zookeeper Apache, dónde el puerto que se utiliza para Zookeeper es el 2181:
```
$ sudo docker run -d --name zookeeper -p 2181:2181 dockerkafka/zookeeper
```

Iniciamos el contenedor de Kafka, dónde el puerto que se utiliza para Kafka es el 9092
```
$ 	sudo docker run --name kafka -p 9092:9092 --link zookeeper:zookeeper dockerkafka/kafka
```

Verificamos que los contenedores se hayan ejecutado: 
```
$ sudo docker ps
```

Para realizar una prueba entre Productores y consumidores necesitamos encontrar las IP del contenedor de Zookeeper y la de Kafka. Por lo que se utilizan los siguientes comandos: 

export ZK_IP=$(sudo docker inspect --format '{{ .NetworkSettings.IPAddress }}' zookeeper)

export KAFKA_IP=$(sudo docker inspect --format '{{ .NetworkSettings.IPAddress }}' kafka)