const Service = require("node-windows").Service;

const svc = new Service({
  name: "Push System Service",
  description: "This service is used to run/host Push System Web App",
  script: require("path").join(__dirname, "server.js"),
});

svc.on("uninstall", function () {
  svc.stop();
  console.log("Uninstall complete");
});

svc.uninstall();
