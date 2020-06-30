

var youTubeAPI = "https://www.googleapis.com/youtube/v3/search?part=snippet&q=soccer&type=video&safeSearch=strict&key=AIzaSyDjQrTkfNOMureZhpUSnGSQCtifA33w4eA"
var baseURL = "https://www.googleapis.com/youtube/v3";
var searchKeyWord = "/search?";
var requiredForURL = "part=snippet";
var addItemToURL = "&";
var queryTerm = "q=";
var queryExample = "cats";
var typeTerm = "type=video";
var safeSearchSetting = "safeSearch=strict";
var APIkey = "AIzaSyDjQrTkfNOMureZhpUSnGSQCtifA33w4eA";

var youtubeQueryURL = baseURL+searchKeyWord+requiredForURL+addItemToURL+queryTerm+queryExample+addItemToURL+typeTerm+addItemToURL+safeSearchSetting+addItemToURL+APIkey;