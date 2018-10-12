const router = require('express').Router();
const { routinesCtrl } = require('../controllers');
const middlewares = require('../middlewares');

router.get('/', routinesCtrl.getAll);
router.get('/:routineId', routinesCtrl.get);
/*router.get('/:routineId', (req,res,next) => {
  middlewares.validator.validate(req, res, next, {
  params: {
    routineId: 'number',
  },
});
}, routinesCtrl.get);*/
router.post('/', routinesCtrl.create);
router.put('/:routineId', routinesCtrl.update);
router.delete('/:routineId', routinesCtrl.delete);

router.post('/:routineId/exercises', routinesCtrl.addExercise);
router.get('/:routineId/exercises', routinesCtrl.getExercises);
router.delete('/:routineId/exercises/:exerciseId', routinesCtrl.removeExercise);

module.exports = router;
