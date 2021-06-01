import axios from 'axios';
// let cors = "https://cors-anywhere.herokuapp.com/";

// let cors = "https://cors.bridged.cc/";

//working on dev but not on production
// let cors = "https://thingproxy.freeboard.io/fetch/";
// let cors = "http://3.23.104.79:8080/";

// axios.defaults.baseURL = cors + "http://192.168.15.44:3333";
axios.defaults.baseURL = "http://192.168.15.44:3333";
axios.interceptors.request.use(function (config) {
    config.headers["Access-Control-Allow-Origin"] = "*";
    return config;
});

export default axios;