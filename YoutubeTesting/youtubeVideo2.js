// Search for Youtube Video

var youTubeAPI = "https://www.googleapis.com/youtube/v3/search?part=snippet&q=soccer&type=video&safeSearch=strict&maxResults=2&key=AIzaSyDjQrTkfNOMureZhpUSnGSQCtifA33w4eA"
var baseURL = "https://www.googleapis.com/youtube/v3";
var searchKeyWord = "/search?";
var requiredForURL = "part=snippet";
var addItem = "&";
var queryTerm = "q=";
var queryExample = "cats";
var typeTerm = "type=video";
var safeSearchSetting = "safeSearch=strict";
var maxResults = "maxResults=";
var resultsExample = 2;
var APIkey = "key=AIzaSyDjQrTkfNOMureZhpUSnGSQCtifA33w4eA";

var youtubeQueryURL = baseURL+searchKeyWord+requiredForURL+addItem+queryTerm+queryExample+addItem+typeTerm+addItem+safeSearchSetting+addItem+APIkey;
var videosRetreived = [];

$.ajax({
    url: youtubeQueryURL,
    method: "GET"
})
.then(function(response) {
    console.log(youtubeQueryURL);
    console.log(response.items[0].id.videoId);
    response.items.forEach(function(item){
        videosRetreived.push(item.id.videoId); 
    })
    console.log(videosRetreived);
})

// load iframe API
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
$("body").append(tag);

function renderVideo(idPassed){
    //<iframe id="player" type="text/html" width="640" height="390" frameborder="0"></iframe>
  var player = $("<iframe>")
  var srcURL = "http://www.youtube.com/embed/"+idPassed+"?enablejsapi=1&origin=http://example.com"
  player.attr({
    type:"text/html",
    width:"640",
    height:"390",
    frameborder:"0",
    src:srcURL
  });
  $("main").append(player);
}

var videoIndex = 0
$("button").on("click",function(event){
    // console.log("click");
    var videoList = videosRetreived;
    if (videoIndex === videoList.length){
    videoIndex = 0;
    }
    // console.log(videoIndex);
    renderVideo(videoList[videoIndex]);
    videoIndex++;
    // console.log(videoIndex);
})
