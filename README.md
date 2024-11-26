### Meta Suit Hub ###

Este es un microservicio hibrido que se encargara de la comunicacion con lo referente de mensajeria. recibira mensajes de whatsapp y notificaciones de instagrams se encargara de filtrar mensajes y delegar a otros microservicios como el de persistencia de datos o el storage y tambien tenia pensado enviar el mensaje a un asistente personal con IA para contestar siertas cosas triviales para no tener que pasar directamente a un agente. 

### instalacion y dependencias ###

Necesitaremos nats ya que es por deficicion nuestro Message Broker 
https://nats.io/download/ descargalo si solo quieres usar este microservicio,  ya que yo lo podre en el archivo docker-compose.yml
y este descaragara la imagen en todo el ecosistema que usaremos para integrar toda la aplicacion

### pasos para utilizar este servicio solo ###

0. descargar nest si aun no lo tienes instalado
      npm install -g @nestjs/cli

1. en tu terminal usar el comando 
      git clone https://github.com/metasuitia/metasuithub.git

2. despues el comando 
      cd metasuithub

3. despues el comando
      npm install o el manejador de paquetes que prefieras 
   en este proyecto yo use pnpm 
   si deseas usarlo usa el comando 
      npm install -g pnpm 
   esto lo instalara globalmente 

4. copia las variables de el archivo .env.template y crea un     nuevo archivo .env y coloca las variables del sistema. 
si no las tienes en el mismo template escribo donde conseguirlas

5.  despues de tener todas las variables usa el comando npm run start:dev o si usaste pnpm es: pnpm run start:dev 