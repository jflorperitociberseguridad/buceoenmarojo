## Buceo Javier - Sitio Web Ficticio

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Licencia: MIT](https://img.shields.io/badge/Licencia-MIT-yellow.svg?style=for-the-badge)

Este es el repositorio del código para el sitio web de "Buceo Javier", un centro de buceo ficticio especializado en viajes y cursos en el Mar Rojo. Este proyecto fue desarrollado como un ejercicio completo de maquetación web, optimización SEO y funcionalidades modernas con tecnologías front-end.

**Ver la demo en vivo:** [https://jflorperitociberseguridad.github.io/buceoenmarojo/](https://jflorperitociberseguridad.github.io/buceoenmarojo/)

---

## ✨ Características Principales

* **Sitio Web Multipágina:** Estructura completa con más de 10 páginas HTML interconectadas (`index`, `servicios`, `viajes`, `blog`, `contacto`, etc.).
* **Diseño Totalmente Responsive:** Maquetado con Tailwind CSS para una visualización perfecta en dispositivos móviles, tablets y ordenadores de escritorio.
* **SEO Avanzado:**
    * Meta etiquetas (título, descripción) optimizadas en cada página.
    * Uso de datos estructurados (JSON-LD) con esquemas específicos (`SportsActivityLocation`, `Product`, `Review`, `Event`, `BlogPosting`, `ImageGallery`, `ContactPage`) para mejorar la visibilidad en Google.
    * Archivos `sitemap.xml` y `robots.txt` para una correcta indexación.
* **Componentes Interactivos:**
    * Carrusel de imágenes automático en la cabecera usando **Swiper.js**.
    * Menú de navegación con desplegable (`dropdown`) funcional mediante CSS.
    * Popup para captación de suscriptores con lógica de aparición y cierre.
* **Galería Visual:** Página de galería con un grid de imágenes y efectos visuales al pasar el ratón.
* **PWA Ready:** Incluye un archivo `manifest.json` para permitir que el sitio sea "instalable" en dispositivos móviles.
* **Maquetación Profesional:** Secciones claras, llamadas a la acción (CTA) y un diseño limpio y moderno enfocado en la experiencia de usuario.

---

## 🛠️ Tecnologías Utilizadas

* **HTML5:** Para la estructura semántica del contenido.
* **CSS3 / Tailwind CSS v3:** Utilizado a través de su CDN para una maquetación rápida y moderna basada en utilidades.
* **JavaScript (ES6+):** Para la interactividad de componentes como el slider y el popup.
* **Swiper.js:** Librería externa para la creación de carruseles de imágenes.
* **JSON:** Para la simulación de una fuente de datos externa para el blog.

---

## 📂 Estructura de Archivos

```
/buceoenmarojo/
|-- index.html
|-- que-hacemos.html
|-- servicios.html
|-- viajes.html
|-- zonas-de-buceo.html
|-- tienda.html
|-- blog.html
|-- galeria.html
|-- testimonios.html
|-- calendario.html
|-- contacto.html
|-- login.html
|-- 404.html
|
|-- styles.css         (Hoja de estilos personalizada)
|-- script.js          (Lógica de JavaScript)
|-- blog.json          (Datos para el blog)
|
|-- google...........html (Archivo de verificación de Google)
|-- manifest.json
|-- robots.txt
|-- sitemap.xml
|
|-- /img/
|   |-- icon-192.png
|   |-- icon-512.png
```

---

## 🚀 Cómo Empezar

Como este es un sitio web estático que utiliza CDNs para sus dependencias (Tailwind, Swiper), no se requiere un proceso de instalación o compilación complejo.

1.  **Clona el repositorio:**
    ```sh
    git clone [https://github.com/jflorperitociberseguridad/buceoenmarojo.git](https://github.com/jflorperitociberseguridad/buceoenmarojo.git)
    ```
2.  **Navega a la carpeta del proyecto:**
    ```sh
    cd buceoenmarojo
    ```
3.  **Abre el archivo `index.html`** en tu navegador preferido para ver el sitio localmente.

---

## ✉️ Contacto

Creado por **Javier Flor** como parte de un proyecto de desarrollo web completo.

---

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Consulta el archivo `LICENSE` para más detalles (si se añade).
