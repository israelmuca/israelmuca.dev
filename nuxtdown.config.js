module.exports = {
  api: function(isStatic) {
    const baseURL = "http://localhost:3000";
    const browserBaseURL = !isStatic ? "" : process.env.BASE_URL;

    return {
      baseURL,
      browserBaseURL
    };
  },
  content: [
    [ "blog",
      {
        page: "/blog/_blogpost",
        permalink: "blog/:slug",
        //data: TODO:
        isPost: true
      }
    ]
  ]
};
