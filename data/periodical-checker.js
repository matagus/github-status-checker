var statusElem = document.querySelector("#status");

self.port.on("update-status", function(status, last_updated) {
  statusElem.className = status;
});
