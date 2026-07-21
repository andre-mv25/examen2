# Convertidor de Leche: Litros a Galones

API que ayuda al productor de leche a convertir su producción diaria de litros a galones y calcular el pago correspondiente.

## Pseudocódigo

```
INICIO
  GALON = 3.785 litros
  ESCRIBIR "Ingrese la cantidad de litros producidos hoy:"
  LEER litrosProducidos
  galones = litrosProducidos / GALON
  ESCRIBIR "Ingrese el precio por galón:"
  LEER precioPorGalon
  pagoTotal = galones * precioPorGalon
  ESCRIBIR "Producción en litros: ", litrosProducidos
  ESCRIBIR "Producción en galones: ", galones
  ESCRIBIR "Precio por galón: $", precioPorGalon
  ESCRIBIR "Pago total: $", pagoTotal
FIN
```

## Diagrama de Flujo

```
+-------------------+
|      INICIO       |
+-------------------+
          |
          v
+-------------------+
| GALON = 3.785     |
+-------------------+
          |
          v
+-------------------+
| LEER litrosProd   |
+-------------------+
          |
          v
+-------------------+
| galones =         |
| litros / GALON    |
+-------------------+
          |
          v
+-------------------+
| LEER precioGalon  |
+-------------------+
          |
          v
+-------------------+
| pago = galones *  |
| precioGalon       |
+-------------------+
          |
          v
+-------------------+
| MOSTRAR resultados|
+-------------------+
          |
          v
+-------------------+
|       FIN         |
+-------------------+
```

## Endpoints

### Convertir litros a galones

```
GET /convertir?litros=100&precioPorGalon=50
```

### Respuesta de ejemplo

```json
{
  "litros": 100,
  "galones": 26.4198,
  "factorConversion": "1 galón = 3.785 litros",
  "precioPorGalon": 50,
  "pagoTotal": 1320.99
}
```

## Despliegue en Render

1. Subir este repositorio a GitHub
2. En Render, crear un nuevo "Web Service"
3. Conectar el repositorio
4. Configurar:
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
5. Crear el servicio
