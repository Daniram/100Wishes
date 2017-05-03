import io from 'socket.io-client';

class Connection {   //singleton
    socket = io('http://localhost:3000');
}

export const connection = new Connection();