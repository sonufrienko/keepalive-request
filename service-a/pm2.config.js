module.exports = {
  apps: [
    {
      name: "Service A",
      script: "./server.js",
      instances: "max",
      env: {
        NODE_ENV: "production"
      }
    }
  ]
};
