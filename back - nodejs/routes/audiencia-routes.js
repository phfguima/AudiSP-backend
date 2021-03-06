var router = require("express").Router();
var audController = require('../controller/audiencia-controller');

router.get('/sugeridas/:id', function (req, res) {
    audController.getAudienciaSugerida(req)
        .then(
            (response) => {
                res.status(200).send(response)
            })
        .catch((error) => {
            res.status(500).send(error.mesage)
        });
});

router.get('/lista', function (req, res) {
    audController.getListaAudencias(req)
        .then(
            (response) => {
                res.status(200).send(response)
            })
        .catch((error) => {
            res.status(500).send(error.mesage)
        });

});

router.post('/data', function (req, res) {
    audController.getListaAudienciaPorData(req)
        .then(
            (response)=>{
                res.status(200).send(response)
            }
        ).catch(
            (error)=>{
                res.status(500).send(error)
            }
        );
});

router.put('/update', function (req, res) {
    audController.updateAudiencia(req)
        .then(
            (response)=>{
                res.status(200).send(response)
            }
        ).catch(
            (error)=>{
                res.status(500).send(error)
            }
        );
});

router.get('/url/:id', function (req, res) {
    audController.getUrlPublicacao(req)
        .then(
            (response) => {
                res.status(200).send(response)
            })
        .catch((error) => {
            res.status(500).send(error.mesage)
        });
});


module.exports = router;