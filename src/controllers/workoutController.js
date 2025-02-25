const getAllWorkouts = (req, res) => {
    res.send('Obtener todos los WorkOuts');
}
const getOneWorkout = (req, res) => {
    res.send(`Obtener WorkOut ${req.params.workoutId}`);
}
const createNewWorkout = (req, res) => {
    res.send(`Crear WorkOut ${req.params.workoutId}`);
}
const updateOneWorkout = (req, res) => {
    res.send(`Editar WorkOut ${req.params.workoutId}`);
}
const deleteOneWorkout = (req, res) => {
    res.send(`Eliminar WorkOut ${req.params.workoutId}`);
}
module.exports = {
    getAllWorkouts,
    getOneWorkout,
    createNewWorkout,
    updateOneWorkout,
    deleteOneWorkout

}