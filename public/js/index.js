var socket = io();

socket.on('connect', function(){
  console.log('Connected to Server!');

  // socket.emit('createEmail', {
  //   to: 'jen@example.com',
  //   text: 'Hey, this is me'
  // });

  // socket.emit('createMessage', {
  //   from: 'ZMH',
  //   text: 'It works!'
  // });
});

socket.on('disconnect', function(){
  console.log('Disconnected from Server!');
});

socket.on('newMessage', function (message) {
  console.log('newMessage: ', message);
});

socket.on('newEmail', function (email) {
  console.log('New Email', email);
});
