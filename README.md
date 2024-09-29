# README - Aplicación Primer Parcial

Este README cuenta con las siguientes secciones:

1. [Cómo correr la aplicación](#1-cómo-correr-la-aplicación)
2. [Reporte de decisiones](#2-reporte-de-decisiones)
   - [Login](#a-login)
   - [Home](#b-home)
   - [Mock](#c-mock)
   - [Detalle del ejercicio](#d-ver-detalle-del-ejercicio)
   - [i18n](#e-i18n)

## 1. Cómo correr la aplicación

Para correr la aplicación, sitúese dentro de la carpeta `primerparcial`. Una vez allí, ejecute el siguiente comando:

```bash
npm install
```

Después de correr el anterior comando corra (dentro de la carpeta `primerparcial`):

```bash
npm start
```

Cuando acceda a la aplicación, se encontrará en la pantalla de inicio de sesión (Log in). Ingrese un correo con un formato válido y una contraseña de al menos 8 caracteres, luego presione el botón Log in. Esto lo llevará a la pantalla principal (Home). Opcionalmente, puede acceder directamente a la pantalla de inicio a través de la ruta localhost:[puerto]/home.

## 2. Reporte de decisiones

Para esta aplicación se optó por conservar los componentes de `Index` y `App` predeterminados de React. Así pues, en el archivo `index.js` se realizan todas las configuraciones de localización (ver sección de [i18n](#e-i18n)), y se llama al componente `App`:

![image](https://github.com/user-attachments/assets/377e06c1-e0e6-4847-b609-7cbe98e1d844)


En el componente `App` se configuran las diferentes rutas del aplicativo con la ayuda de `react-router-dom`:

![image](https://github.com/user-attachments/assets/dad0ad6c-f173-4c1c-afb3-abaf7c801be5)


> **Nota:** No se incluyó una ruta para el componente del detalle del deporte ya que es un modal que se accede a través de la pantalla de inicio (Home).

### a. Login

El componente de Login retorna un `<div>` que contiene la imagen de fondo y un contenedor con un formulario. Este formulario tiene principalmente dos inputs, uno para el correo y otro para la contraseña, y un botón de enviar. (Se muestra la página localizada en inglés).

![image](https://github.com/user-attachments/assets/90b47e88-0eb4-4b38-a3f8-8ef23636ae5c)


Para el manejo correcto del email y la contraseña, se hizo uso del hook de estado para guardar el valor de las variables. Además, se utilizó este hook para verificar si las variables cumplen con las validaciones requeridas.

![image](https://github.com/user-attachments/assets/fd102d21-a0c0-4fd4-ba45-9fd27b701324)


Así pues, a los inputs de email y contraseña se les asignaron los métodos `handleEmailChange` y `handlePasswordChange`, respectivamente.
![image](https://github.com/user-attachments/assets/41bb2c7d-412f-4447-adaa-056f0ebe69a7)
![image](https://github.com/user-attachments/assets/de2c5f2d-7b15-4752-adda-24b1953c4dec)


Estos métodos actualizan el valor de la variable de estado `formValues`.

![image](https://github.com/user-attachments/assets/f50ec779-584a-40e0-a41c-87aff1949c05)


Asimismo, para manejar la validación de las variables, se utilizó el hook `useEffect`. Cuando haya una modificación en `formValues`, se hacen las validaciones, y si son exitosas, cambian el valor de `passwordState` o `emailState` a `true`.

![image](https://github.com/user-attachments/assets/97a5e61e-5be6-46cd-97cc-56e6c8b79639)


Cuando se da clic en el botón de **Log in**, se redirecciona a la página de inicio (`/home`), siempre que las validaciones sean exitosas. De lo contrario, se lanzará una alerta. Este redireccionamiento se logró utilizando el hook de estado de navegación.

![image](https://github.com/user-attachments/assets/428b7473-d894-4fc1-b505-03d0d7e3dbd4)
![image](https://github.com/user-attachments/assets/ac9e75b6-871c-4a83-94bc-99f66d577848)



### b. Home

Para cada uno de los datos de usuario, se creó una variable de estado.

![image](https://github.com/user-attachments/assets/a03733a8-4a6e-441d-90b9-4284e098489f)


Una vez se carga la página, se realiza un llamado a la API mock del backend para obtener los valores de estos datos.

![image](https://github.com/user-attachments/assets/a1f719ca-2afb-44a1-86e5-44c773a5014c)


Posteriormente, se retorna, grosso modo, un contenedor con tres columnas, cada una con los datos de un deporte. A su vez, cada columna tiene filas con dos imágenes. Finalmente, se incluye un footer con la información del usuario.

Para mostrar las diez imágenes por cada deporte, se creó un arreglo con 10 elementos. Cada uno de estos elementos fue mapeado a un componente de Bootstrap de tipo `Card.ImgOverlay`.

![image](https://github.com/user-attachments/assets/60e8b151-f3e1-4fbe-8641-a9b005588f6b)


Para los íconos del footer, se utilizó la librería `react-icons/fa`.

![image](https://github.com/user-attachments/assets/c3e60fdf-21cd-4724-b073-fd86792148e0)


### c. Mock

Para el mock del backend, se utilizó Mockaroo, y se creó una API que retorna un JSON con los datos de un usuario. Para la imagen de perfil, se pasó un link predeterminado que contiene el ícono de una persona.

![image](https://github.com/user-attachments/assets/de886512-ab6b-4285-9251-a22ca0a12f76)


### d. Ver Detalle del Ejercicio

Para esta parte, se creó un componente llamado `CardModal`, que retorna un modal de Bootstrap con un botón de cerrar.

![image](https://github.com/user-attachments/assets/94c5bad9-4b26-41dc-bf6b-301569433069)


Se hizo uso de `props` que se pasan como parámetros desde el componente Home, y se utilizó un operador lógico "AND". Si existe el valor de `selectedCard`, entonces se llama al método `renderCard`. Este método retorna un `card`, pero de mayor tamaño que los mostrados en el Home.

![image](https://github.com/user-attachments/assets/376a98ce-8ab3-4033-9ce5-c42ae8d20728)


Asimismo, desde el componente Home se utilizan variables de estado para manejar la visualización del modal.

![image](https://github.com/user-attachments/assets/34292f87-1934-4898-8d10-999f0c32e47e)

Cuando se hace clic en alguna imagen, se invoca el componente `CardModal`.
![image](https://github.com/user-attachments/assets/7b14ed7f-fbd8-4b51-a27a-336b0ab8ddfe)

### e. i18n

La configuración de la localización se realiza en el archivo `index.js`. Para lograrlo, se utilizó la librería `react-intl`. En primer lugar, se define el inglés como idioma predeterminado para mostrar la página, a menos que el navegador esté configurado para español. El lenguaje del navegador se obtiene y se configura el `locale` y los mensajes (`message`) que se pasan como parámetros al componente `IntlProvider`.

> **Nota:** Para cambiar la configuración de idioma del navegador visite este [link](https://www.androidpolice.com/how-to-change-google-chrome-language/).

![image](https://github.com/user-attachments/assets/d2322c88-f31e-4079-b1f5-bfe44403674f)

Se pasa por parámetro el `localeLanguage` (`es` o `en`) y el `message` (el JSON con las traducciones, ya sea en español o en inglés).

![image](https://github.com/user-attachments/assets/aa3c5dad-5c05-43d4-897e-b32d1d77e071)

El siguiente es el JSON de las traducciones para español:

![image](https://github.com/user-attachments/assets/7b4daba1-060c-4602-b56f-86ceb578e42d)


Para efectuar las traducciones en los diferentes componentes, se hizo uso del componente `FormattedMessage` de `react-intl`.

![image](https://github.com/user-attachments/assets/3a7d235c-79e4-47d3-895b-2c7c891a33cc)

> **Nota:** También se pasa la ciudad como parámetro en `values`, ya que el nombre de la ciudad se ubica en posiciones distintas en la oración, dependiendo del idioma.

---

Cualquier duda, no dude en contactarme a través del correo o.urregov@uniandes.edu.co.
