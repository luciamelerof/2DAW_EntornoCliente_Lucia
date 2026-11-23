# Práctica 4 – Matrícula de alumnado en un instituto

## Objetivo

Crear un formulario de matrícula para un instituto de FP. Esta práctica añade validación **en tiempo real** (mientras se escribe), control de duplicados, edición de registros y filtrado de la tabla.

## Estructura de archivos

```
P4/
├── index.html
├── css/style.css
├── clase.js       (clases Alumno e Instituto)
└── ejercicio.js   (validación y eventos)
```

## Campos del formulario

| Campo | Tipo de control | `name` |
|---|---|---|
| NIA (nº de identificación del alumno) | `text` | `nia` |
| DNI | `text` | `dni` |
| Nombre | `text` | `nombre` |
| Apellidos | `text` | `apellidos` |
| Email | `text` | `email` |
| Contraseña | `password` | `password` |
| Repetir contraseña | `password` | `password2` |
| Fecha de nacimiento | `text` (DD/MM/AAAA) | `fechaNac` |
| Ciclo | `select`: SMR, DAM, DAW, ASIR | `ciclo` |
| Curso | `radio`: 1º, 2º | `curso` |
| Turno | `radio`: Mañana, Tarde | `turno` |
| Módulos | `checkbox` (al menos 6 opciones) | `modulos` |
| Acepto las condiciones | `checkbox` | `condiciones` |

## Reglas de validación

1. **NIA**: exactamente 8 dígitos. **No puede repetirse** con el de ningún alumno ya matriculado.
2. **DNI** válido y tampoco puede estar repetido.
3. **Nombre y apellidos**: solo letras (también con tilde y ñ) y espacios, de 3 caracteres como mínimo sin contar los espacios.
4. **Email**: tiene que terminar en `@alu.edu.es`.
5. **Contraseña**:
   - Al menos 8 caracteres.
   - Al menos una mayúscula, una minúscula, un número y un carácter especial.
   - Las dos contraseñas tienen que coincidir.
6. **Fecha de nacimiento** válida. El alumno tiene que tener **16 años o más**. Para DAM, DAW y ASIR (grado superior) tiene que tener **18 o más**.
7. Hay que elegir obligatoriamente un **ciclo**, un **curso** y un **turno**.
8. **Módulos**: hay que marcar **de 2 a 5**.
9. Hay que marcar **condiciones** para enviar el formulario.

## Patrones requeridos

Expresiones regulares que hay que usar en las validaciones (con `patron.test(valor)`):

| Campo | Patrón | Notas |
|---|---|---|
| NIA | `/^\d{8}$/` | Exactamente 8 dígitos. Comprueba además que no exista ya en el `Instituto`. |
| DNI | `/^\d{8}[A-Z]$/i` | 8 dígitos + letra. La letra se comprueba aparte: `'TRWAGMYFPDXBNJZSQVHLCKE'[numero % 23]`. |
| Nombre / Apellidos | `/^[A-Za-zÁÉÍÓÚáéíóúÑñÜü\s]+$/` | Solo letras (con tilde y ñ) y espacios. Además: `valor.replace(/\s/g, '').length >= 3`. |
| Email | `/^[^\s@]+@alu\.edu\.es$/i` | Tiene que terminar en `@alu.edu.es` (los puntos se escapan). |
| Contraseña (completa) | `/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,}$/` | Las 4 reglas + longitud en un solo patrón (lookaheads). |
| Contraseña (por reglas) | `/.{8,}/`, `/[A-Z]/`, `/[a-z]/`, `/\d/`, `/[^A-Za-z0-9]/` | Por separado, para contar cuántas se cumplen en el indicador Débil / Media / Fuerte. |
| Fecha (DD/MM/AAAA) | `/^(\d{2})\/(\d{2})\/(\d{4})$/` | Solo comprueba el formato. Después crea un `Date` con los grupos capturados y comprueba que día, mes y año coinciden (así se descarta `31/02/2010`). |

## Requisitos

### Validación en tiempo real
- Cada campo de texto se valida en el evento `blur` (al salir del campo) y vuelve a validarse en `input` cuando ya tiene un error.
- Pon la clase `valido` (borde verde) o `invalido` (borde rojo) según el resultado.
- En el `submit` se valida todo de nuevo antes de guardar.
- Organiza el código para no repetir lógica, por ejemplo con un objeto que relacione cada campo con su función de validación y su mensaje:

```js
const validaciones = {
    nia:   { fn: compruebaNIA,   msg: 'NIA inválido o repetido' },
    email: { fn: compruebaEmail, msg: 'El email debe ser @alu.edu.es' },
    // ...
};
```

### Indicador de seguridad de la contraseña
- Debajo del campo contraseña, muestra «Débil», «Media» o «Fuerte» según cuántas reglas del punto 5 se cumplen. El texto se actualiza con cada pulsación (`input`).

### Tabla de matriculados
- Columnas: NIA, Nombre completo, Edad, Ciclo, Curso, Turno, Nº módulos y Acciones. **No** muestres la contraseña.
- **Eliminar**: pide confirmación con `confirm()` y borra al alumno.
- **Editar**: carga los datos del alumno en el formulario y el botón de envío pasa a decir «Guardar cambios». Al guardar se actualiza el alumno en lugar de crear uno nuevo. Ojo: al editar no se puede marcar como repetido su propio NIA o DNI.
- Encima de la tabla pon un `select` para **filtrar por ciclo** (con la opción «Todos») y un contador: «Mostrando X de Y alumnos».

## Ampliación (opcional)

- Ordena la tabla por apellidos o por edad al hacer clic en la cabecera de la columna.
- Muestra un resumen con el número de alumnos de cada ciclo.
