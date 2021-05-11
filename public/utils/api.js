import axios from "axios";

export default {
    standingSearch: function(input) {
        console.log("APISEARCH: ", input)
        return axios.get("/api/soccer", input);
    }
    
};