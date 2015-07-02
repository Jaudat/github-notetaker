var appConstants = require('../constants/appConstants');
var axios = require('axios');

var id = "f2e272948565c4ead60e";
var sec = "5e76c6da6e2bc056bbb4d7740c11c3eb909211bc";
var param = "?client_id=" + id + "&client_secret=" + sec;

var githubUtils = {
  getBio: function(username){
    var url = "https://api.github.com/users/" + username + param;
    return axios.get(url);
  },
  getRepos: function(username){
    var url = "https://api.github.com/users/" + username + "/repos" + param;
    return axios.get(url);
  }
};

module.exports = githubUtils;
