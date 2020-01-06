var express = require('express');
var router = express.Router();

router.put('/player', async function(req, res, next) {
    const Player = req.app.get('player'),
        match = req.app.get("matchmaking");

    let { handle, id, elo, fob, matchingMode, createdAt } = req.query;
    [handle, id, elo, fob, matchingMode, createdAt].map(param => {
        if (param == undefined) throw UserDefindError('missing params');
    });
    let result = match.put(new Player({ handle, id, elo, fob, matchingMode, createdAt }));
    res.json(result)
});
router.delete('/player', async function(req, res, next) {
    const match = req.app.get("matchmaking");
    let player = match.findByHandle(req.query.handle)[0]
    match.remove(player);
    res.json(player)
});
router.get('/player', async function(req, res, next) {
    const match = req.app.get("matchmaking");
    let player = match.findByHandle(req.query.handle)
    res.json(player)
});
router.get('/all', function(req, res, next) {
    res.json(req.app.get("matchmaking").list());
});
router.get('/suitable', function(req, res, next) {
    const match = req.app.get("matchmaking");

    let player = match.findByHandle(req.query.handle)[0]
    res.json(match.findPlayerInRange(player));
});

module.exports = router;