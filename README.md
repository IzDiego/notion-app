# Instrucciones

- Crear integración en notion
- Dar permiso a la integración con la base datos de notion
- Crear documento .env con las variables de notion [O editar en el codigo]
- Modificar el contenido de:
```
const tareas:Object = {
    tarea: "Mi primer tarea",
    /* date: "today", [Se agrega una fecha automaticamente en notion] */
    status: "Sin Iniciar",
    /* El valor del status se agregará a la base de datos en caso de no existir */
    proyecto: "Proyecto de prueba 1"
  }
```
- Ejecutar y dar clic en boton de publicar