const router = require('express').Router();
const bookController = require('../../controllers/bookController');

router.route('/')
   .get(bookController.findAll);

router.route('/add')
   .post(bookController.create);


router.route('/:id')
   .get(bookController.findById)
   .put(bookController.update)
   .delete(bookController.remove);

   module.exports = router;