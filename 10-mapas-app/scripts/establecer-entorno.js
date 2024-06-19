const { writeFileSync, mkdirSync } = require('fs');

require('dotenv').config();

const ruta = './src/environments/environment.ts';

const contenido = `export const environment = {
  mapbox_token: "${process.env['MAPBOX_TOKEN']}"
};`;

mkdirSync('./src/environments', { recursive: true });

writeFileSync(ruta, contenido);
