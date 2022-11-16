const got = require("got");

const handleReceivedResponse = (response) => {
  console.log(response.body);
};

const url = "https://api.github.com/repos/sinatra/sinatra";

got(url).then(handleReceivedResponse);