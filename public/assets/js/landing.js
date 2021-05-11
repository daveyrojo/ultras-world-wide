import API from "../utils/api"

const leagueInput = document.getElementById("inputLeague");
const teamInput = document.getElementById("inputTeam");
const searchButton = document.getElementById("searchButton");

searchButton.addEventListener("click", apiSearch);

function apiSearch() {
    const searchArray = [leagueInput, teamInput];
    API.standingSearch(searchArray)
        .then((res) => {
            let standingResults = res.data;
            console.log(standingResults);
        })
        .catch((err) => console.log(err));
};
