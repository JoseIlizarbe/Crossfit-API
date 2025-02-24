const getAllWorkouts = (res, res) => {
    res.send('Obtener todos los WorkOuts');
}
const getOneWorkout = (res, res) => {
    res.send(`Obtener WorkOut ${req.params.workoutId}`);
}
const createNewWorkout = (res, res) => {
    res.send(`Crear WorkOut ${req.params.workoutId}`);
}
const updateOneWorkout = (res, res) => {
    res.send(`Editar WorkOut ${req.params.workoutId}`);
}
const deleteOneWorkout = (res, res) => {
    res.send(`Eliminar WorkOut ${req.params.workoutId}`);
}
module.exports = {
    getAllWorkouts,
    getOneWorkout,
    createNewWorkout,
    updateOneWorkout,
    deleteOneWorkout

}