const routesCtrl = {}

routesCtrl.renderUEmergencias = (req, res) => {
    res.render('./servicios/01-unidad-emergencias')
}

routesCtrl.renderQuirofanos = (req, res) => {
    res.render('./servicios/02-quirofanos', {
        imgUrl: [
            { img: '/img/servicios/quirofanos/quirofano-1.jpg', active: ' active' },
            { img: '/img/servicios/quirofanos/quirofano-2.jpg' }
        ]
    })
}

routesCtrl.renderNurseria = (req, res) => {
    res.render('./servicios/03-nurseria', {
        imgUrl: [
            { img: '/img/servicios/nurseria/nurseria-1.jpg', active: ' active'},
            { img: '/img/servicios/nurseria/nurseria-2.jpg' },
            { img: '/img/servicios/nurseria/nurseria-3.jpg' },
            { img: '/img/servicios/nurseria/nurseria-4.jpg' }
        ]
    })
}

routesCtrl.renderCIntensivos = (req, res) => {
    res.render('./servicios/04-cuidados-intensivos', {
        imgUrl: [
            { img: '/img/servicios/cirna/cirna-1.jpg', active: ' active'},
            { img: '/img/servicios/cirna/cirna-2.jpg' },
            { img: '/img/servicios/cirna/cirna-3.jpg' }
        ]
    })
}

routesCtrl.renderURecuperacion = (req, res) => {
    res.render('./servicios/05-unidad-recuperacion')
}

routesCtrl.renderCExterna = (req, res) => {
    res.render('./servicios/06-consulta-externa')
}

routesCtrl.renderUltrasonografia = (req, res) => {
    res.render('./servicios/07-ultrasonografia', {
        imgUrl: [
            { img: '/img/servicios/ultrasonografia/ultra-1.jpg', active: ' active'},
            { img: '/img/servicios/ultrasonografia/ultra-2.jpg' },
            { img: '/img/servicios/ultrasonografia/ultra-3.jpg' }
        ]
    })
}

routesCtrl.renderPAgua = (req, res) => {
    res.render('./servicios/08-parto-agua', {
        imgUrl: [
            { img: '/img/servicios/parto-agua/parto-agua-1.jpg', active: ' active'},
            { img: '/img/servicios/parto-agua/parto-agua-2.jpg' },
            { img: '/img/servicios/parto-agua/parto-agua-3.jpg' },
            { img: '/img/servicios/parto-agua/parto-agua-4.jpg' },
            { img: '/img/servicios/parto-agua/parto-agua-5.jpg' },
            { img: '/img/servicios/parto-agua/parto-agua-6.jpg' }
        ]
    })
}

routesCtrl.renderLClinico = (req, res) => {
    res.render('./servicios/09-laboratorio-clinico')
}

module.exports = routesCtrl;