// const Router = require('express').Router();
const { Router } = require('express')
const router =  Router();
const {
    renderIndex,
    renderConocenos,
    renderPrenatales,
    renderHospitalizacion,
    renderBlog,
    renderContactanos,
    renderPrueba
    } = require('../controllers/index');

const { 
    renderUEmergencias,
    renderQuirofanos,
    renderNurseria,
    renderCIntensivos,
    renderURecuperacion,
    renderCExterna,
    renderUltrasonografia,
    renderPAgua,
    renderLClinico
    } = require('../controllers/servicios');

const {
    renderCGeneral,
    renderGinecologia,
    renderCUrologica,
    renderCOncologica,
    renderCOrtopedica

    } = require('../controllers/especialidades');

const {
    renderGHabitaciones,
    renderSalida
    } = require('../controllers/galerias');

const {
    renderArticulo01,
    renderArticulo02
    } = require('../controllers/blog');

router.get('/', renderIndex);
router.get('/conocenos', renderConocenos);
router.get('/planes-prenatales', renderPrenatales);
router.get('/hospitalizacion', renderHospitalizacion);
router.get('/blog', renderBlog);
router.get('/contactanos', renderContactanos);
router.get('/prueba', renderPrueba);

router.get('/servicios/unidad-de-emergencias', renderUEmergencias);
router.get('/servicios/quirofanos', renderQuirofanos);
router.get('/servicios/nurseria', renderNurseria);
router.get('/servicios/cuidados-intensivos-recien-nacido', renderCIntensivos);
router.get('/servicios/unidad-de-recuperacion', renderURecuperacion);
router.get('/servicios/clinica-consulta-externa', renderCExterna);
router.get('/servicios/ultrasonografia', renderUltrasonografia);
router.get('/servicios/unidad-parto-en-agua', renderPAgua);
router.get('/servicios/laboratorio-clinico', renderLClinico);

router.get('/especialidades/cirugia-general', renderCGeneral);
router.get('/especialidades/ginecologia-obstetricia', renderGinecologia);
router.get('/especialidades/cirugia-urologica', renderCUrologica);
router.get('/especialidades/cirugia-oncologica', renderCOncologica);
router.get('/especialidades/cirugia-ortopedica', renderCOrtopedica);

router.get('/gallery/habitaciones', renderGHabitaciones);
router.get('/gallery/salida', renderSalida);

router.get('/blog/articulo-01', renderArticulo01);
router.get('/blog/articulo-02', renderArticulo02);

module.exports = router;