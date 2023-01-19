const routesCtrl = {}

routesCtrl.renderIndex = (req, res) => {
    res.render('index')
}

routesCtrl.renderConocenos = (req, res) => {
    res.render('conocenos', {
        imgUrl:[
            { img:'/img/conocenos/slider/Valores-1.jpeg', active: ' active' },
            { img:'/img/conocenos/slider/Valores-2.jpeg' }
        ]
    })
}

routesCtrl.renderPrenatales = (req, res) => {
    res.render('prenatales')
}

routesCtrl.renderHospitalizacion = (req, res) => {
    res.render('hospitalizacion')
}

routesCtrl.renderContactanos = (req, res) => {
    res.render('contactanos')
}

routesCtrl.renderBlog = (req, res) => {
    res.render('blog')
}

routesCtrl.renderPrueba = (req, res) => {
    res.render('prueba', {
        imgUrl:[
            { img:'/img/conocenos/slider/Valores-1.jpeg', active: ' active' },
            {img:'/img/conocenos/slider/Valores-2.jpeg'}
        ]
    })
}

module.exports = routesCtrl;