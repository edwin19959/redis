const redis = require('redis');

// Conectar al servidor de Redis
const subscriber = redis.createClient({
  url: 'redis://your-redis-url:port',
  password: 'your-password'
});

subscriber.on('connect', () => {
  console.log('Conectado a Redis');
});

subscriber.on('error', (err) => {
  console.log('Error de conexión:', err);
});

(async () => {
  await subscriber.connect();  // Usar connect con promesas

  // Suscribirse al canal 'mi-canal'
  await subscriber.subscribe('mi-canal', (message) => {
    console.log(`Mensaje recibido: ${message}`);
  });
})();
