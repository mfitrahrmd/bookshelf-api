const Hapi = require('@hapi/hapi');
const { HOST, PORT } = require('./config/vars');
const { books } = require('./routes');

const notfoundRoute = {
  path: '/{any*}',
  method: '*',
  handler: (req, h) => {
    return h
      .response({
        status: 'not found',
        message: 'Oops, seems like you get lost',
      })
      .code(404);
  },
};

const server = () => {
  const hapiServer = Hapi.server({
    host: HOST,
    port: PORT,
    routes: {
      cors: true,
    },
  });

  hapiServer.route([...books, notfoundRoute]);

  hapiServer.start();
  console.log(`Server running on http://${HOST}:${PORT}`);
};

module.exports = server;
