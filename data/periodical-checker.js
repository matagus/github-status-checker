var containerElem = document.querySelector("#container");
var statusElem = document.querySelector("#status");

self.port.on("update-status", function(status, last_updated) {
  statusElem.className = status;
});

self.port.on("change-gui-mode", function(mode) {
  containerElem.className = mode;
});
