const express = require('express');
const router = express.Router();
const careerController = require('../controllers/careerController');

router.get('/', careerController.getCareers);
router.post('/create', careerController.createCareer);

router.post('/search', careerController.search);
router.get('/search', careerController.search);

router.get('/careers/edit/:id', careerController.getEditcareer);
router.post('/careers/edit', careerController.postEditcareer);


module.exports = router;