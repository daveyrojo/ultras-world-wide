var axios = require("axios");

var config = {
  method: "get",
  url: "https://v3.football.api-sports.io/standings?league=253&season=2021",
  headers: {
    "x-rapidapi-key": "74d3ffb9c7d65432c7ff23972306f1bf",
    "x-rapidapi-host": "v3.football.api-sports.io",
  },
};

console.log(config);
axios(config)
  .then(function (response) {
    console.log(JSON.stringify(response.data));
  })
  .catch(function (error) {
    console.log(error);
  });
