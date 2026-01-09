#BIENVENIDO A MI PORTFOLIO

Aqui puedes encontrar mi sitio en vivo:[https://nadinhamideh2001.github.io/portfolio-template-/] (https://nadinhamideh2001.github.io/portfolio-template-/)

# Portfolio — Nadin

Portfolio web personal enfocado en **branding y dirección de arte**.  
Proyecto final del curso **Web Foundations (UDIT)**.

El sitio está desarrollado como **web estática**, con una landing principal, galería de proyectos, páginas individuales de proyecto, sección About y Contacto, y un eror 404.

## Objetivo del proyecto

Diseñar y desarrollar un portfolio profesional que:

- Presente proyectos de diseño de forma clara y visual.
- Mantenga una estética editorial, limpia y coherente.
- Sea responsive y accesible.
- Utilice buenas prácticas de HTML, CSS y JavaScript básico.

---

## Stack utilizado

- **HTML5 semántico**
- **CSS**
  - Arquitectura por secciones
  - Variables CSS
  - Layout con Grid y Flexbox
- **JavaScript**
  - Menú mobile
  - Animaciones de foco en scroll
- **GitHub Pages** para el deploy

## Justificación: uso de un único archivo CSS

Decidí unificar todos los estilos CSS del proyecto en un único archivo (`otros.css`) por motivos de organización personal y costumbre de trabajo. Al tratarse de un proyecto de escala pequeña–media, con un número limitado de páginas y componentes, centralizar los estilos me permitió tener una visión global del diseño, facilitar la lectura del código y acelerar el proceso de desarrollo y ajuste visual.

Esta decisión también responde a mi forma habitual de trabajar, en la que priorizo un archivo principal bien estructurado por bloques (reset, tipografía, layout, componentes y secciones), en lugar de múltiples archivos separados. De este modo, evité duplicaciones, conflictos de estilos y dependencias innecesarias entre archivos.

Aunque soy consciente de que en proyectos de mayor envergadura una arquitectura CSS modular puede ser más adecuada, en este caso opté por un único archivo como punto de partida sólido, claro y mantenible, asegurando coherencia visual y facilidad de edición durante todo el desarrollo del portfolio.

---

## Estructura del proyecto

```txt
portfolio-template/
├── index.html
├── gallery.html
├── about.html
├── contact.html
├── 404.html
├── README.md
├── LICENSE
├── .gitignore
├── docs/
│   ├── plan1.md
│   ├── plan2.md
│   └── plan3.md
├── assets/
│   ├── css/
│   │   ├── base.css
│   │   ├── layout.css
│   │   ├── components.css
│   │   └── otros.css
│   ├── js/
│   │   └── main.js
│   ├── images/
│   └── fonts/
└── projects/
    ├── proyecto1.html
    ├── proyecto2.html
    └── ...
```

---

## Galería de proyectos

La galería principal muestra **9 proyectos**, cada uno representado por una imagen real local (no imágenes de placeholder).

Cada tarjeta utiliza la **imagen 1** de su respectivo set:

- A1
- B1
- D1
- E1
- K1
- P1
- RR1
- S1
- T1

Las imágenes se cargan desde `assets/images/` y se optimizan usando `loading="lazy"`.

---

## Tipografía

Todo el sitio utiliza **Arial** como tipografía global, trabajada en distintos pesos:

- **700** → títulos
- **600** → navegación, labels
- **400** → texto base

La tipografía se define de forma global desde `:root` y `body` para mantener consistencia y legibilidad.

---

## Uso de Inteligencia Artificial

Durante el desarrollo se utilizó **IA como herramienta de apoyo**, principalmente para:

- Ordenar y refactorizar el CSS.
- Definir una estructura clara de tipografía global.
- Proponer soluciones de layout (galería y contacto).
- Servir como punto de partida conceptual para resolver problemas de estructura.

Las decisiones finales de diseño, implementación y ajustes fueron realizadas manualmente.

El proceso completo está documentado en la carpeta `/docs`.

---

## Documentación del proceso (docs)

Dentro de la carpeta `docs/` se incluyen:

- **plan1.md**  
  Tipografía global Arial y orden del CSS.

- **plan2.md**  
  Implementación de imágenes reales en la galería.

- **plan3.md**  
  Reestructuración de la página de contacto (layout limpio + imagen lateral).

Cada archivo incluye:

- El prompt usado con la IA.
- La propuesta recibida.
- La implementación real realizada.

---

## Responsive

El sitio está optimizado para:

- Desktop
- Tablet
- Mobile

Utilizando breakpoints en:

- 1024px
- 900px
- 768px
- 520px

---

## Licencia

Este proyecto se publica bajo licencia MIT.  
El contenido visual y textual pertenece a su autora.

---

## Autora

**Nadin Hamideh**  
Diseñadora gráfica  
Branding · Dirección de arte · Diseño editorial · Web
