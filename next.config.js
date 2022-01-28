module.exports = {
  async headers() {
    return [
      {
        source: "/api/checkout",
        headers: [
          {
            key: "Content-Type",
            value: "application/json",
          },
          { key: "Access-Control-Allow-Credentials", value: "true" },
          { key: "Access-Control-Allow-Origin", value: "*" },
          {
            key: "Access-Control-Allow-Methods",
            value: "GET,OPTIONS,PATCH,DELETE,POST,PUT",
          },
          {
            key: "Access-Control-Allow-Headers",
            value:
              "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version",
          },
        ],
      },
    ];
  },
  images: {
    domains: ["i.imgur.com", "dummyimage.com", "images.unsplash.com"],
  },
  serverRuntimeConfig: {
    PROJECT_ROOT: __dirname,
  },
};
