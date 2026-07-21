const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;
const GALON_A_LITROS = 3.785;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.json({
    mensaje: 'API de conversión de leche - Litros a Galones',
    rutas: {
      convertir: 'GET /convertir?litros=VALOR&precioPorGalon=VALOR',
      documentacion: 'GET /'
    }
  });
});

app.get('/convertir', (req, res) => {
  const { litros, precioPorGalon } = req.query;

  if (!litros) {
    return res.status(400).json({ error: 'El parámetro "litros" es obligatorio' });
  }

  const litrosNum = parseFloat(litros);
  if (isNaN(litrosNum) || litrosNum < 0) {
    return res.status(400).json({ error: '"litros" debe ser un número válido mayor o igual a 0' });
  }

  const galones = litrosNum / GALON_A_LITROS;
  const precio = precioPorGalon ? parseFloat(precioPorGalon) : undefined;

  let pagoTotal = undefined;
  if (precio !== undefined && !isNaN(precio) && precio >= 0) {
    pagoTotal = galones * precio;
  }

  const resultado = {
    litros: litrosNum,
    galones: parseFloat(galones.toFixed(4)),
    factorConversion: `${1} galón = ${GALON_A_LITROS} litros`,
  };

  if (pagoTotal !== undefined) {
    resultado.precioPorGalon = precio;
    resultado.pagoTotal = parseFloat(pagoTotal.toFixed(2));
  } else {
    resultado.mensaje = 'Para calcular el pago total, proporciona también "precioPorGalon"';
  }

  res.json(resultado);
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});
