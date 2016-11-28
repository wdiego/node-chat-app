var socket = io();

socket.on('connect', function() {
    console.log('Connected to server');

    socket.emit('createMessage', {
        from: 'wdiego',
        text: 'Hey! How are you doing?'
    });

});

socket.on('disconnect', function() {
    console.log('Disconnect from server');
});

socket.on('newMessage', function(message) {
    console.log('New message', message);
});