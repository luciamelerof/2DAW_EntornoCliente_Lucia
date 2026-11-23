# Práctica 3 – Reservas de un hotel

## Objetivo

Crear un formulario de reserva de habitaciones de hotel. Hay que validarlo, calcular el precio total de la estancia y guardar las reservas en una tabla. Desde la tabla se podrán borrar reservas.

## Estructura de archivos

```
P3/
├── index.html
├── css/style.css
├── clase.js       (clases Reserva y Hotel)
└── ejercicio.js   (validación y eventos)
```

## Campos del formulario

| Campo | Tipo de control | `name` |
|---|---|---|
| DNI o NIE | `text` | `documento` |
| Nombre completo | `text` | `nombre` |
| Email | `text` | `email` |
| Fecha de entrada | `text` (DD/MM/AAAA) | `entrada` |
| Fecha de salida | `text` (DD/MM/AAAA) | `salida` |
| Nº de huéspedes | `number` | `huespedes` |
| Tipo de habitación | `radio`: Individual (50 €/noche), Doble (80 €/noche), Suite (150 €/noche) | `habitacion` |
| Extras | `checkbox`: Desayuno (10 €/noche), Parking (8 €/noche), Spa (25 € una sola vez) | `extras` |
| Régimen | `select`: Solo alojamiento, Media pensión, Pensión completa | `regimen` |

## Reglas de validación

1. **Documento**: puede ser un **DNI** válido (8 dígitos y letra correcta) o un **NIE** válido (X, Y o Z, 7 dígitos y letra). Para el NIE, cambia X por 0, Y por 1 y Z por 2 y calcula la letra igual que en el DNI.
2. **Nombre completo**: al menos dos palabras de 2 o más letras cada una.
3. **Email** con formato correcto.
4. **Fechas**:
   - Las dos deben ser válidas en formato DD/MM/AAAA.
   - La fecha de entrada no puede ser anterior a hoy.
   - La fecha de salida tiene que ser posterior a la de entrada.
   - La estancia no puede pasar de 30 noches.
5. **Huéspedes**: un número entero que dependa del tipo de habitación:
   - Individual: 1.
   - Doble: 1 o 2.
   - Suite: de 1 a 4.
6. Hay que elegir obligatoriamente un **tipo de habitación** y un **régimen**: el `select` tiene que empezar con una opción vacía «-- Elige --».

## Patrones requeridos

Expresiones regulares que hay que usar en las validaciones (con `patron.test(valor)`):

| Campo | Patrón | Notas |
|---|---|---|
| DNI | `/^\d{8}[A-Z]$/i` | 8 dígitos + letra. La letra se comprueba aparte: `'TRWAGMYFPDXBNJZSQVHLCKE'[numero % 23]`. |
| NIE | `/^[XYZ]\d{7}[A-Z]$/i` | Sustituye X→0, Y→1, Z→2 (`valor.replace(/^X/i,'0')...`) y calcula la letra como en el DNI. |
| Nombre completo | `/^[A-Za-zÁÉÍÓÚáéíóúÑñÜü]{2,}(\s+[A-Za-zÁÉÍÓÚáéíóúÑñÜü]{2,})+$/` | Al menos dos palabras de 2 letras o más separadas por espacios. |
| Email | `/^[^\s@]+@[^\s@]+\.[a-z]{2,}$/i` | |
| Entrada / Salida | `/^(\d{2})\/(\d{2})\/(\d{4})$/` | Solo comprueba el formato. Después crea un `Date` con los grupos capturados y comprueba que día, mes y año coinciden (así se descarta `31/02/2010`). |
| Huéspedes | `/^\d+$/` | Número entero positivo; luego compara el rango según la habitación. |

## Cálculo del precio

```
noches = días entre salida y entrada
total  = noches × precio habitación
       + noches × (desayuno + parking, si están marcados)
       + 25 si se ha marcado spa
```

- Media pensión suma **15 €/noche por huésped** y pensión completa **30 €/noche por huésped**.
- Haz el cálculo en un método `calcularTotal()` de la clase `Reserva`.

## Requisitos

- Tienes que validar en el `submit`, con `e.preventDefault()` y un mensaje de error en cada campo.
- Si todo es correcto, crea la `Reserva`, añádela al `Hotel` y vuelve a pintar la tabla con las columnas: Documento, Nombre, Entrada, Salida, Noches, Habitación, Extras, Total (€) y **Acciones**.
- En la columna Acciones habrá un botón **Eliminar** que quita esa reserva del array y vuelve a pintar la tabla. Pista: guarda un `id` en cada reserva y usa `data-id` en el botón.
- Debajo de la tabla, muestra la **facturación total** del hotel (la suma de todas las reservas).

## Ampliación (opcional)

- Muestra el precio en un `<p id="previo">` mientras el usuario rellena el formulario (eventos `change` / `input`), antes de enviarlo.
- No dejes que haya dos reservas con el mismo documento que se solapen en fechas.
