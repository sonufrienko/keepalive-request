module.exports = {
  apps: [
    {
      name: "Service B",
      script: "./server.js",
      instances: "max",
      env: {
        NODE_ENV: "production",
        PORT: 3001
      }
    }
  ]
};
