const axios = require("axios");
require("dotenv").config();
const BASE = "https://v3.football.api-sports.io/";


const APIKEY = process.env.FOOTY_API_KEY;
//v3.football.api-sports.io/standings?league=253&season=2021


module.exports = {
  getStanding: function (req, res) {
    console.log("GET FOOTY STANDINGS LINE TEN/10: ");

    const leagueID = 253;
    const seasonYear = 2021;
    
    const url = `${BASE}standings?league=${leagueID}&season=${seasonYear}${APIKEY}`;
    console.log("URL: ", url);
    axios
      .get(url)
      .then((res) => {
        
        res.json(res);
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
