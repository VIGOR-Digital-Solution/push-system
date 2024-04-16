const Service = require("node-windows").Service;

const svc = new Service({
  name: "Push System Service",
  description: "This service is used to run/host Push System Web App",
  env: [
    {
      name: "NODE_ENV",
      value: "production",
    },
  ],
  script: require("path").join(__dirname, "server.js"),
});

svc.on("install", function () {
  svc.start();
});

svc.install();
