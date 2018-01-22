/*

api.giphy.com

riFcpySJBkJmW8iczsascuMVH9GjPM1W

GET /v1/gifs/search

q=Chelseafc


*/

var api = "http://api.giphy.com/v1/gifs/search?";

var apikey = "&api_key=riFcpySJBkJmW8iczsascuMVH9GjPM1W";

var query = "&q=Chelseafc";

function setup() {

	var url = api + apikey + query;
	loadJSON(url, gotData);
}

function gotData(giphy) {
	console.log(giphy.data[0].images.downsized_medium.url);
}