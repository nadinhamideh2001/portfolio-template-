# Plan 2 — Galería: imágenes reales por proyecto

## Objetivo

Reemplazar las imágenes de prueba (picsum.photos) de la galería por **imágenes locales reales**, asignando una imagen representativa a cada proyecto.

---

## Prompt (mi pregunta a la IA)

> “En gallery.html quiero reemplazar las imágenes de picsum por imágenes locales.  
> Cada tarjeta debe usar la imagen 1 de cada set: A1, B1, D1, E1, K1, P1, RR1, S1, T1.  
> Decime exactamente qué cambiar en el HTML (src y alt) y qué estructura de rutas usar.”

---

## Respuesta de la IA (plan propuesto)

1. Guardar todas las imágenes dentro de `assets/images/`.
2. Reemplazar cada `src="https://picsum.photos/..."` por rutas locales, por ejemplo:
   - `src="./assets/images/A1.png"`
3. Mantener `loading="lazy"` para optimización.
4. Ajustar los atributos `alt` con el nombre real del proyecto.
5. Verificar mayúsculas, minúsculas y extensiones correctas (`.png` / `.jpg`).

---

## Implementación (qué hice realmente)

- Organicé todas las imágenes reales dentro de `assets/images/`.
- Reemplacé los `src` de las 9 tarjetas de la galería por rutas locales.
- Asigné correctamente la imagen 1 de cada proyecto:
  - A1, B1, D1, E1, K1, P1, RR1, S1, T1.
- Corregí extensiones y nombres inconsistentes.
- Actualicé los textos `alt` con el nombre real de cada proyecto.

---

## Resultado

La galería ahora muestra proyectos reales, mejora la coherencia visual del portfolio y elimina dependencias externas.
