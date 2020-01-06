const { Matchmaking, Player, Api } = require("ewc-matchmaking");
const match = new Matchmaking();

// const matchapi = new EWCMatchmakingApi('http://localhost:11452')
function test() {
    match.put(new Player({ handle: 'test:1', id: 1123053, elo: 1720, fob: false, matchingMode: ['FFA', 'ranking'], createdAt: new Date().getTime() }));
    match.put(new Player({ handle: 'test:2', id: 3, elo: 1, fob: true, matchingMode: 'FFA', createdAt: new Date().getTime() }));
    let idke = new Player({ handle: 'idke', id: 11453414, elo: 2620, fob: true, matchingMode: 'ranking', createdAt: new Date().getTime() });
    let cookiezi = new Player({ handle: 'cookiezi', id: 123456, elo: 2520, fob: true, matchingMode: 'ranking', createdAt: new Date().getTime() });
    let tira = new Player({ handle: 'tira', id: 11455414, elo: 1800, fob: true, matchingMode: 'ranking', createdAt: new Date().getTime() });

    [idke, cookiezi, tira].map(player => match.put(player))
    let collection = match.getCollection().findPlayersMatchmaking();
    let FFA = collection.findMatchingModeIs('FFA').findPlayersMatchmaking();
    console.log(FFA);
    FFA.setPlayersPending()
    console.log(FFA);
    FFA.setPlayersPlaying()
    console.log(FFA);
    let ranking = collection.findMatchingModeIs('ranking');
    console.log(ranking);
    let tira_match = ranking.findRankingPlayersSuitableFor(tira);
    let idke_match = ranking.findRankingPlayersSuitableFor(idke);
    console.log('tira', tira_match);
    console.log('idke', idke_match);
    return;
}

test();