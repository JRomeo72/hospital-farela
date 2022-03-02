const app = require('./server')

app.listen(app.get('port'), () => {
    console.log('Servidor corriendo en puerto', app.get('port'))
});