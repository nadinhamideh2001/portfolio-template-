---

## ✅ docs/plan1.md (Arial global + ordenar CSS)

```md
# Plan 1 — Ordenar CSS + tipografía global Arial

## Prompt (mi pregunta a la IA)

"Quiero que toda la tipografía sea Arial en distintos pesos. Además, mi CSS está desordenado y duplicado (contact aparece dos veces). Proponeme una estructura limpia y cómo reordenar sin romper el layout. Dame el CSS final consolidado y qué clases debo mantener."

## Respuesta completa de la IA (plan)

1. Definir tipografía global en `:root` (una variable única `--font`) y usarla en `body`.
2. Normalizar pesos:
   - Titulares (h1/h2/h3): 700
   - Navegación/links: 600
   - Texto/párrafos: 400
3. Reemplazar clases que forzaban serif (ej. `.h-serif`) para que sigan existiendo pero usen Arial.
4. Detectar duplicados de secciones (especialmente CONTACT) y dejar **una sola versión**.
5. Ordenar el CSS por bloques:
   - Reset/Base
   - Layout helpers
   - Nav (desktop/mobile)
   - Páginas (Landing/Gallery/About/Projects/Contact/404)
   - Responsive al final
6. Probar en breakpoints y corregir overflow / spacing.

## Notas de implementación (qué hice realmente)

- Definí `--font: Arial, Helvetica, sans-serif;` en `:root` y lo apliqué en `body`.
- Ajusté pesos (700 titulares, 600 navegación/labels, 400 párrafos).
- Consolidé estilos de contacto dejando **una sola** sección de CONTACT.
- Reordené el archivo `assets/css/otros.css` por bloques lógicos para mantenimiento.
```
