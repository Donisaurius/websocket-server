const socketController = (socket) => {
  console.log("Cliente conectado", socket.id); //id de conexion, pero este cambiará cada vez que se vuelva a conectar el cliente

  socket.on("message", (data) => {
    socket.broadcast.emit("message", data);
  });

  socket.on("disconnect", () => {
    console.log("Cliente desconectado", socket.id);
  });
};

module.exports = {
  socketController,
};
