# README - Aplicación Primer Parcial

Este README cuenta con las siguientes secciones:

1. [Cómo correr la aplicación](#cómo-correr-la-aplicación)
2. [Reporte de decisiones](#reporte-de-decisiones)
   - [Login](#login)
   - [Home](#home)
   - [Mock](#mock)
   - [Detalle del ejercicio](#ver-detalle-ejercicio)
   - [i18n](#i18n)

## 1. Cómo correr la aplicación

Para correr la aplicación, sitúese dentro de la carpeta `primerparcial`. Una vez allí, ejecute el siguiente comando:

```bash
npm install
```
Cuando acceda a la aplicación, se encontrará en la pantalla de inicio de sesión (Log in). Ingrese un correo con un formato válido y una contraseña de al menos 8 caracteres, luego presione el botón Log in. Esto lo llevará a la pantalla principal (Home). Opcionalmente, puede acceder directamente a la pantalla de inicio a través de la ruta localhost:[puerto]/home.

## 2. Reporte de decisiones

Para esta aplicación se optó por conservar los componentes de `Index` y `App` predeterminados de React. Así pues, en el archivo `index.js` se realizan todas las configuraciones de localización (ver sección de i18n), y se llama al componente `App`.

En el componente `App` se configuran las diferentes rutas del aplicativo con la ayuda de `react-router-dom`.

> **Nota:** No se incluyó el componente del detalle del deporte ya que es un modal que se accede a través de la pantalla de inicio (Home).

### a. Login

El componente de Login retorna un `<div>` que contiene la imagen de fondo y un contenedor con un formulario. Este formulario tiene principalmente dos inputs, uno para el correo y otro para la contraseña, y un botón de enviar. (Se muestra la página localizada en inglés).

Para el manejo correcto del email y la contraseña, se hizo uso del hook de estado para guardar el valor de las variables. Además, se utilizó este hook para verificar si las variables cumplen con las validaciones requeridas.

Así pues, a los inputs de email y contraseña se les asignaron los métodos `handleEmailChange` y `handlePasswordChange`, respectivamente.

Estos métodos actualizan el valor de la variable de estado `formValues`.

Asimismo, para manejar la validación de las variables, se utilizó el hook `useEffect`. Cuando haya una modificación en `formValues`, se hacen las validaciones, y si son exitosas, cambian el valor de `passwordState` o `emailState` a `true`.

Cuando se da clic en el botón de **Log in**, se redirecciona a la página de inicio (`/home`), siempre que las validaciones sean exitosas. De lo contrario, se lanzará una alerta. Este redireccionamiento se logró utilizando el hook de estado de navegación.

### b. Home

Para cada uno de los datos de usuario, se creó una variable de estado.

Una vez se carga la página, se realiza un llamado a la API mock del backend para obtener los valores de estos datos.

Posteriormente, se retorna, grosso modo, un contenedor con tres columnas, cada una con los datos de un deporte. A su vez, cada columna tiene filas con dos imágenes. Finalmente, se incluye un footer con la información del usuario.

Para mostrar las diez imágenes por cada deporte, se creó un arreglo con 10 elementos. Cada uno de estos elementos fue mapeado a un componente de Bootstrap de tipo `Card.ImgOverlay`.

Para los íconos del footer, se utilizó la librería `react-icons/fa`.

### c. Mock

Para el mock del backend, se utilizó Mockaroo, y se creó una API que retorna un JSON con los datos de un usuario. Para la imagen de perfil, se pasó un link predeterminado que contiene el ícono de una persona.

### d. Ver Detalle del Ejercicio

Para esta parte, se creó un componente llamado `CardModal`, que retorna un modal de Bootstrap con un botón de cerrar.

Se hizo uso de `props` que se pasan como parámetros desde el componente Home, y se utilizó un operador lógico "AND". Si existe el valor de `selectedCard`, entonces se llama al método `renderCard`. Este método retorna un `card`, pero de mayor tamaño que los mostrados en el Home.

Asimismo, desde el componente Home se utilizan variables de estado para manejar la visualización del modal.

Cuando se hace clic en alguna imagen, se invoca el componente `CardModal`.

### e. i18n

La configuración de la localización se realiza en el archivo `index.js`. Para lograrlo, se utilizó la librería `react-intl`. En primer lugar, se define el inglés como idioma predeterminado para mostrar la página, a menos que el navegador esté configurado para español. El lenguaje del navegador se obtiene y se configura el `locale` y los mensajes (`message`) que se pasan como parámetros al componente `IntlProvider`.

Se pasa por parámetro el `localeLanguage` (`es` o `en`) y el `message` (el JSON con las traducciones, ya sea en español o en inglés).

El siguiente es el JSON de las traducciones para español:

Para efectuar las traducciones en los diferentes componentes, se hizo uso del componente `FormattedMessage` de `react-intl`.

> **Nota:** También se pasa la ciudad como parámetro en `values`, ya que el nombre de la ciudad se ubica en posiciones distintas en la oración, dependiendo del idioma.

---

Cualquier duda, no dude en contactarme a través del correo o.urregov@uniandes.edu.co.
