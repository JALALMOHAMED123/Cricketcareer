const express = require('express');
const router = express.Router();
const careerController = require('../controllers/careerController');

router.get('/', careerController.getcareers);
router.post('/careers', careerController.createCareer);

router.post('/careers/search', careerController.search);
router.get('/careers/edit/:id', careerController.getEditcareer);
router.post('/careers/edit', careerController.postEditcareer);


module.exports = router;