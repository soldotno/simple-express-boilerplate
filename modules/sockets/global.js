var debug = require('debug')('application:socketio:global');

exports = module.exports = function (io, ipc) {
    io.sockets.on('connection', function (socket) {
        debug('global socket connected');

        socket.on('disconnect', function () {
            debug('global socket disconnected');
        });
    });
};