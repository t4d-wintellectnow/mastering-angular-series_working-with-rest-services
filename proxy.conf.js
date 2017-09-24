const PROXY_CONFIG = [
  {
      context: [
          "/widget",      ],
      target: "http://localhost:3010",
      secure: false
  }
]

module.exports = PROXY_CONFIG;
