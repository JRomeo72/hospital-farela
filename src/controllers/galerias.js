const routesCtrl = {}

routesCtrl.renderGHabitaciones = (req, res) => {
    res.render('galleries/g-habitaciones')
}

routesCtrl.renderSalida = (req, res) => {
    res.render('galleries/g-salida')
}

module.exports = routesCtrl;