module.exports = {
  apps: [
    {
      name: "my-react-app",
      script: "npm",
      args: "start",
      cwd: "/home/ubuntu/x-tube", // Adjust this path to the root directory of your React app
      env: {
        NODE_ENV: "production",
        PORT: 3001
      }
    }
  ]
};
