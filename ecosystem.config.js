module.exports = {
  apps: [
    {
      name: "my-trello-api",
      script: "./src/index.js",
      exec_mode: "cluster",
      instances: 0,
      autorestart: true,
      watch: false,
      env_production: {
        NODE_ENV: "production",
      },
      env_staging: {
        NODE_ENV: "staging",
      },
    },
  ],
};
