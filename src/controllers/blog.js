const routesCtrl = {}

routesCtrl.renderArticulo01= (req, res) => {
    res.render('./articulos/articulo-01')
}

routesCtrl.renderArticulo02= (req, res) => {
    res.render('./articulos/articulo-02')
}

module.exports = routesCtrl;