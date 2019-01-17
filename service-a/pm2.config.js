module.exports = {
  apps: [
    {
      name: "Service A",
      script: "./server.js",
      instances: "max",
      env: {
        NODE_ENV: "production",
        PORT: 3000,
        SERVICE_B_BASE_URL: 'http://<ip>:3000'
      }
    }
  ]
};
