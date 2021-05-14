// este diseno usaremos nuestro index.js como nuestro punto de etnrada
const express = require('express');
const routerIndex = require('./routers/index');
const app = express();
const PORT = process.env.PORT || 3000;
const { errors } = require('celebrate');
// ejecutamos para todos estos middelware

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
// cuando hacemos una peticion api nosotros mandamos un body
/*
    sino agregamos los miidlware no vamos a poder acceder req.body
*/

app.use('/api/v1', routerIndex);

// app.use('/', (req, res) => {
//   //   console.log(req.body);

//   res.status(200).json({ message: 'Hello World' });
// });

app.use(errors());

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
