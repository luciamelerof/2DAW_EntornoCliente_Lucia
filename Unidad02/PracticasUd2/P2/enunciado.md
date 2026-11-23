# Práctica 2 – Alta de socios de una biblioteca

## Objetivo

Crear un formulario para dar de alta socios en una biblioteca municipal. Hay que validarlo con JavaScript y, si todo es correcto, guardar el socio y mostrarlo en una tabla debajo del formulario.

## Estructura de archivos

```
P2/
├── index.html
├── css/style.css
├── clase.js       (clases Socio y Biblioteca)
└── ejercicio.js   (validación y eventos)
```

## Campos del formulario

| Campo | Tipo de control | `name` |
|---|---|---|
| DNI | `text` (máx. 9 caracteres) | `dni` |
| Nombre | `text` | `nombre` |
| Apellidos | `text` | `apellidos` |
| Email | `text` | `email` |
| Teléfono | `text` (máx. 9 caracteres) | `telefono` |
| Fecha de nacimiento | `text` (DD/MM/AAAA) | `fechaNac` |
| Tipo de socio | `radio`: Infantil, Adulto, Jubilado | `tipo` |
| Géneros favoritos | `checkbox`: Novela, Cómic, Ensayo, Poesía, Ciencia ficción | `generos` |

Cada campo debe llevar debajo un `<span class="error" id="err-xxx">` donde se mostrará su mensaje de error.

## Reglas de validación

1. **DNI** correcto: 8 dígitos más una letra, y la letra tiene que corresponder al número.
2. **Nombre y apellidos**: más de 2 caracteres cada uno sin contar los espacios.
3. **Email**: formato `texto@texto.dominio`. Usa una expresión regular.
4. **Teléfono**: 9 dígitos y que empiece por 6, 7, 8 o 9.
5. **Fecha de nacimiento** válida en formato DD/MM/AAAA (que no se acepte, por ejemplo, `31/02/2010`).
6. **Tipo de socio** coherente con la edad, calculada a partir de la fecha de nacimiento:
   - Infantil: menos de 14 años.
   - Adulto: de 14 a 64 años.
   - Jubilado: 65 años o más.
7. Hay que marcar **al menos un género** favorito.

## Patrones requeridos

Expresiones regulares que hay que usar en las validaciones (con `patron.test(valor)`):

| Campo | Patrón | Notas |
|---|---|---|
| DNI | `/^\d{8}[A-Z]$/i` | 8 dígitos + letra. La letra se comprueba aparte: `'TRWAGMYFPDXBNJZSQVHLCKE' [numero % 23]`. |
| Nombre / Apellidos | `/^[A-Za-zÁÉÍÓÚáéíóúÑñÜü\s]+$/` | Solo letras y espacios. Además: `valor.replace(/\s/g, '').length > 2`. |
| Email | `/^[^\s@]+@[^\s@]+\.[a-z]{2,}$/i` | `texto@texto.dominio`, dominio de 2 letras o más. |
| Teléfono | `/^[6-9]\d{8}$/` | 9 dígitos empezando por 6, 7, 8 o 9. |
| Fecha (DD/MM/AAAA) | `/^(\d{2})\/(\d{2})\/(\d{4})$/` | Solo comprueba el formato. Después crea un `Date` con los grupos capturados y comprueba que día, mes y año coinciden (así se descarta `31/02/2010`). |

## Requisitos

- Usa `document.forms['formSocio']` y `form.elements[...]` para acceder a los campos.
- Usa `e.preventDefault()` en el evento `submit` y vacía los errores antes de volver a validar.
- Haz cada validación en una función aparte (`compruebaDNI`, `compruebaEmail`, `compruebaTelefono`, `compruebaFecha`, `calculaEdad`...).
- Si todo es correcto:
  - Crea un objeto `Socio` y añádelo al array `socios` de un objeto `Biblioteca`.
  - Vuelve a pintar la tabla con todos los socios. Haz que el método `toString()` de `Socio` devuelva la fila `<tr>`.
  - Limpia el formulario con `form.reset()`.

## Ampliación (opcional)

- Muestra la edad calculada en una columna más de la tabla.
- Cuando un campo tenga error, añádele la clase CSS `invalido` (borde rojo) y quítasela al corregirlo.
