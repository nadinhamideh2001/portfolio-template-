# Plan 3 — Contacto: estructura limpia + foto lateral

## Objetivo

Corregir la sección de contacto, que se había vuelto confusa visualmente, y volver a una **estructura simple**, manteniendo el diseño limpio pero agregando una **foto lateral** como apoyo visual.

---

## Prompt (mi pregunta a la IA)

> “Mi sección de contacto quedó rara.  
> Quiero volver a una estructura simple como antes: texto + links,  
> pero agregando una foto al costado derecho (tipo card).  
> Proponeme HTML + CSS sin duplicar estilos y que sea responsive.”

---

## Respuesta de la IA (plan propuesto)

1. Mantener la estructura general:
   - `main.section.section--paper`
   - `.container`
2. Crear un grid `.contact-layout` con dos columnas:
   - Izquierda: título, texto y links.
   - Derecha: card con imagen.
3. En mobile, colapsar a una sola columna.
4. Usar clases específicas para contacto para evitar colisiones (`.contact-page`).
5. Dejar una sola definición de estilos de contacto en el CSS.

---

## Implementación (qué hice realmente)

- Reestructuré `contact.html` usando un layout simple de dos columnas.
- Coloqué el texto y los links a la izquierda.
- Añadí una imagen lateral dentro de una card a la derecha.
- Eliminé estilos duplicados de contacto en el CSS.
- Ajusté el responsive para que en móvil todo se vea en una sola columna.

---

## Resultado

La sección de contacto volvió a ser clara y ordenada, manteniendo una estética coherente con el resto del sitio y sumando un elemento visual sin sobrecargar el diseño.
