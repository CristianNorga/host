const fs = require('fs');
const path = require('path');

// Ruta del archivo appsettings.json
const inputPath = path.resolve(__dirname, '../src/libs/config/settings/appsettings.json');
// Ruta del archivo .env a generar
const outputPath = path.resolve(__dirname, '../.env');

// Cargar el archivo appsettings.json
const rawData = fs.readFileSync(inputPath, 'utf8');
const settings = JSON.parse(rawData);

// Generar líneas del .env
const envLines = Object.entries(settings).map(([key, value]) => {
	if (Array.isArray(value)) {
		return `${key.toUpperCase()}=${value.join(',')}`;
	} else if (typeof value === 'object' && value !== null) {
		return `${key.toUpperCase()}=${JSON.stringify(value)}`;
	} else {
		return `${key.toUpperCase()}=${value}`;
	}
});

// Escribir en el archivo .env
fs.writeFileSync(outputPath, envLines.join('\n'));

console.log(`✅ Archivo .env generado con ${envLines.length} variables.`);
