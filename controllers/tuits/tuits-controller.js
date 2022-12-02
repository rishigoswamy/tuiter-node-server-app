import * as tuitsDao from './tuits-dao.js'

const currentUser = {

};

const templateTuit = {
    ...currentUser,
    "topic": "Space",
    "time": "2h",
    "liked": false,
    "replies": 0,
    "retuits": 0,
    "likes": 0,
    "dislikes": 0,
    "comments": 0
}

const createTuit = async(req, res) => {
    const newTuit = req.body;
    newTuit._id = parseInt((new Date()).getTime()+'');
    newTuit.userName = "NASA";
    newTuit.handleName = "nasa";
    newTuit.image = "nasa.jpg";
    newTuit.topic = "Space";
    newTuit.time = "2h";
    newTuit.liked = false;
    newTuit.disliked = false;
    newTuit.replies = 0;
    newTuit.retuits = 0;
    newTuit.likes = 0;
    newTuit.dislikes = 0;
    newTuit.comments = 0
    const insertedTuit = await tuitsDao
        .createTuit(newTuit);
    res.json(insertedTuit);
}
const findTuits = async (req, res) => {
    const tuits = await tuitsDao.findTuits()
    res.json(tuits);
}
const updateTuit = async(req, res) => {
    const tuitdIdToUpdate = parseInt(req.params.tid);
    const updates = req.body;
    const status = await tuitsDao
        .updateTuit(tuitdIdToUpdate,
            updates);
    res.json(status);
}
const deleteTuit = async (req, res) => {
    const tuitdIdToDelete = parseInt(req.params.tid);
    const status = await tuitsDao
        .deleteTuit(tuitdIdToDelete);
    res.json(status);
}

export default (app) => {
    app.post('/api/tuits', createTuit);
    app.get('/api/tuits', findTuits);
    app.put('/api/tuits/:tid', updateTuit);
    app.delete('/api/tuits/:tid', deleteTuit);
}