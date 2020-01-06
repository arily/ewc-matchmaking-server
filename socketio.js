function init(server, app) {

    const io = require('socket.io')(server);
    io.on('connection', function(socket) {
        const Player = app.get('player'),
            match = app.get("matchmaking");
            console.log({Player,match});
        socket.on('newPlayer', ({ handle, id, elo, fob, matchingMode, createdAt }) => {
            [handle, id, elo, fob, matchingMode, createdAt].map(param => {
                if (param == undefined) throw UserDefindError('missing params');
            });
            socket.emit('player', match.put(new Player({ handle, id, elo, fob, matchingMode, createdAt })))
        })
        socket.on('allPlayer', () => {
            socket.emit('allPlayer',match.getCollection())
        })
    });

    return io;
}

module.exports = init;