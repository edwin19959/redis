const redis = require('redis');

// Conectar al servidor de Redis
const publisher = redis.createClient({
  url: 'redis://your-redis-url:port',
  password: 'your-password'
});

publisher.on('connect', () => {
  console.log('Conectado a Redis');
});

publisher.on('error', (err) => {
  console.log('Error de conexión:', err);
});

(async () => {
  await publisher.connect();  // Usar connect con promesas

  // Publicar un mensaje en el canal 'mi-canal'
  const message = 'Hola, desde Redis!';
  publisher.publish('mi-canal', message, () => {
    console.log(`Mensaje publicado: ${message}`);
    publisher.quit(); // Cerrar la conexión
  });
})();
