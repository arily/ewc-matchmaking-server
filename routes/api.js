var express = require('express');
var router = express.Router();

router.put('/player', async function(req, res, next) {
	const o =  req.app.get('getOsuApi')();
	const user = await o.getUser({u: req.query.u})
	const player = await req.app.get('createPlayer')(Object.assign(req.query,user));
	req.app.get("matchmaking").putIn(player);
    res.json(player)
});
router.delete('/player', async function(req, res, next) {
	const match = req.app.get("matchmaking");
	let player = match.findByHandle(req.query.handle)[0]
    req.app.get("matchmaking").remove(player);
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