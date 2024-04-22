# RIMAC CHALLENGE

## Demo

```https://rimac-challenge-hkgg.vercel.app``` [Ir a la demo](https://rimac-challenge-hkgg.vercel.app/)

## Tecnologías
- Node 18.17.1
- React 18
- Typescript
- Sass

### Pasos para instalar el proyecto:

- git clone https://github.com/iSkyNavy/rimac-challenge.git

## Pasos para correr la aplicación en modo DEV:
- npm install ***(para instalar dependencias)***
- npm run env ***(para crear el .env desde un .env.local.example)***
- npm run dev ***(para iniciar el servidor)***

## Pasos para desplegar la aplicación a PROD:
`Los mismos pasos para DEV y ...`
- npm run build ***(para generar un desplegable)***

## Variables de Entorno

| key          | Description                             |
| ------------ | --------------------------------------- |
| VITE_URL_API | url de la API que consume la aplicación |

## Mejoras

- Unit tests

# Nota

__Recuerda crear tus variables de entorno para poder consumir la API, puede realizar un copy paste del ejemplo con el comando npm run env o revisar directamente el ejemplo en el archivo .env.local.example__