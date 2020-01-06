const {Matchmaking, createPlayer: createEWCPlayer, Api: EWCMatchmakingApi } = require("ewc-matchmaking");
const matchapi = new EWCMatchmakingApi('http://localhost:11451')
async function test(){
	console.log(await matchapi.putPlayer({u:1123053,handle:'qq.879724291'}));
	console.log(await matchapi.putPlayer({u:'tira',handle:'web.0000-0000'}));
    console.log(await matchapi.getPlayer({handle:'qq.879724291'}));
}

test();
