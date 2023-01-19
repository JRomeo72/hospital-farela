const routesCtrl = {}

routesCtrl.renderCGeneral = (req, res) => {
    res.render('./especialidades/01-cirugia-general')
}

routesCtrl.renderGinecologia = (req, res) => {
    res.render('./especialidades/02-ginecologia-obstetricia')
}

routesCtrl.renderCUrologica = (req, res) => {
    res.render('./especialidades/03-cirugia-urologica')
}

routesCtrl.renderCOncologica = (req, res) => {
    res.render('./especialidades/04-cirugia-oncologica')
}

routesCtrl.renderCOrtopedica = (req, res) => {
    res.render('./especialidades/05-cirugia-ortopedica')
}

module.exports = routesCtrl;