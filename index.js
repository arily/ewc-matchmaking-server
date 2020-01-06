const app = require('./app');
const { Matchmaking, createPlayer } = require("ewc-matchmaking");
const osu = require('node-osu');
function getOsuApi() {
    return new osu.Api('27caa4993a4430b2e63762bdd5e6b9643ddf7679')
}

async function test() {
    const match = new Matchmaking();

    app.set('matchmaking',match);
    app.set('createPlayer',createPlayer);
    app.set('getOsuApi',getOsuApi);
    // let arily = await createPlayer({ qq: 1919810, id: 1123053, name:'arily' });
    // let TiRa = await createPlayer({ qq: 114514, id: 3, name:'TiRa' });
    // match.putIn(arily);
}

test();