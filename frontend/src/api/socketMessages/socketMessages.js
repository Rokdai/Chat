export const socketSendMessage = (socket, message) => {
  socket.send(JSON.stringify(message));
};
