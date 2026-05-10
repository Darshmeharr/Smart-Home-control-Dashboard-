const socket = io();

const lightStatus = document.getElementById("light-status");
const fanStatus = document.getElementById("fan-status");

const lightBtn = document.getElementById("light-btn");
const fanBtn = document.getElementById("fan-btn");

lightBtn.addEventListener("click", () => {
    socket.emit("toggle-light");
});

fanBtn.addEventListener("click", () => {
    socket.emit("toggle-fan");
});

socket.on("update-state", (state) => {
    lightStatus.textContent = state.light ? "ON" : "OFF";
    fanStatus.textContent = state.fan ? "ON" : "OFF";
});
