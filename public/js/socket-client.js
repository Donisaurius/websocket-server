const socketOnline = document.getElementById("server-online");
const socketOffline = document.getElementById("server-offline");
const socketinput = document.getElementById("socket-input");
const socketbtn = document.getElementById("socket-btn");

const socket = io();

socketbtn.addEventListener("click", () => {
  const msg = socketinput.value;

  const payload = {
    msg,
    uid: "123",
    date: new Date().getTime(),
  };

  socket.emit("message", payload);
});

socket.on("connect", () => {
  socketOffline.style.display = "none";
  socketOnline.style.display = "";
});

socket.on("message", (payload) => {
  console.log("Desde el cliente", payload);
});

socket.on("disconnect", () => {
  socketOnline.style.display = "none";
  socketOffline.style.display = "";
});
