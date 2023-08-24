<div id="header" align="center">
<img
       width="300" alt="APP Logo" src="https://github.com/MariaHerrera03/ImageBank/blob/main/Otros/Hotels.png?raw=true" />
       <hr/>
</div>

**Hotels** es una aplicación sencilla que funciona como un práctico directorio de hoteles, diseñada para satisfacer los requisitos de una prueba técnica. Está compuesta por un *FrontEnd* responsive que presenta detalles básicos en su interfaz, y se integra con una API desarrollada en el *BackEnd*.

## BackEnd 📲

El **BackEnd** consiste en una **API REST** desarrollada en *Node.js (express)* y *MongoDB (mongoose)*. Su funcionalidad principal es realizar operaciones CRUD, aunque en la interfaz FrontEnd creada solo se implementa la funcionalidad de listado y filtrado.
Para verificar el correcto desarrollo de las demás funciones, se llevó a cabo un proceso de prueba utilizando un archivo llamado *"test.http"*. Esto se realizó mediante una extensión de *Visual Studio Code* conocida como *REST Client*. No obstante, se espera que funcione sin problemas en otras herramientas también.

###
**Pasos para la ejecución del BackEnd:**

Después de clonar el repositorio, dirígete a la carpeta *"BackEnd"* y ejecuta los siguientes comandos:

1. Ejecuta *"npm i"* para instalar las dependencias.
2. Ejecuta "npm run dev" para iniciar el servidor.
####

Si todo funciona correctamente, verás los siguientes mensajes en la consola:

*🚀 Servidor escuchando en el puerto 9000 | Conexión con Atlas OK*

## FrontEnd 📱

El **FrontEnd** consiste en una interfaz gráfica responsive con sutiles mejoras en la experiencia del usuario. Se desarrolló completamente utilizando *React Native* y *Expo*. El enfoque del desarrollo fue por componentes, y se utilizaron hooks personalizados para facilitar su escalabilidad.

La aplicación permite visualizar los diferentes hoteles en forma de tarjetas (cards), obtenidos a través de la API. Además, se implementó la capacidad de *filtrar los hoteles por su "nombre"*. Adicionalmente, mediante una funcionalidad táctil (touchable), se puede acceder a los sitios web de los distintos hoteles.

###
**Pasos para la ejecución del FrontEnd:**

Después de clonar el repositorio, dirígete a la carpeta *"BackEnd"* y ejecuta los siguientes comandos:

1. Ejecuta *"npm i"* para instalar las dependencias.
2. Ejecuta "npx expo start" para iniciar la aplicación.
####

En la terminal, recibirás un mensaje de *Expo* que te proporcionará diferentes opciones para visualizar la aplicación.

**Se recomienda usar el lector de códigos QR desde la aplicación móvil de Expo para una experiencia óptima.
## Vista previa 🖼️
A continuación, podrás darle un vistazo a aplicación:

####
<div style="display: flex; justify-content: space-between;">
  <div style="flex: 1; padding-right: 10px;">
    <img width="300" alt="App Screenshot" src="https://github.com/MariaHerrera03/ImageBank/blob/main/Otros/Hotels(Responsive).png?raw=true">
  </div>
  <div style="flex: 1; padding-left: 10px;">
       [![](https://markdown-videos.deta.dev/youtube/NarBox1LkYc)](https://youtu.be/NarBox1LkYc)
  </div>
</div>
[![](https://markdown-videos.deta.dev/youtube/NarBox1LkYc)](https://youtu.be/NarBox1LkYc)
[Hotels.webm](https://github.com/MariaHerrera03/PruebaHoteles/assets/109182712/da2484ac-6aeb-47f1-a15e-81635ca84c16)


## Desarrollado por 👩‍💻

- [@MariaHerrera03](https://github.com/MariaHerrera03)

