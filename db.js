const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://user_node_cafe:WqG7h86PQcWLMtTP@miclustercafe.qvkjykg.mongodb.net/TAD', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Error de conexión a MongoDB:'));
db.once('open', () => {
  console.log('Conexión exitosa a MongoDB');
});
