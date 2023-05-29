const postsControlador = require('./posts-controlador');
const passport = require('passport');

module.exports = app => {
  app
    .route('/post')
    .get(postsControlador.lista)
    .post(postsControlador.adiciona)
    .post(passport.authenticate('bearer', {session:false}), postsControlador.adiciona);
};
