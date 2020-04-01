const express = require('express');
const cors = require('cors');
const routes = require('./routes');
const app = express();

app.use(cors()); // permissão da onde tem acesso, { origin : 'https://meusite.com' }
app.use(express.json()); // para o express entender as requisições no formato Json no corpo
app.use(routes);
app.listen(3333);