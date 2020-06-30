var imageArrayOne = [];

var query = "cat";
var limit = 2;
var queryURLGiph = "https://api.giphy.com/v1/gifs/search?api_key=QdzVX4ZFr4pgz6YjWf0sCpUHfSxLdByA&q=" + query + "&limit=" + limit + "&offset=0&rating=G&lang=en";
// format === address/v1/gifs/<query type>?api_key=<key>&q=<search term>&limit=<number results>&offset=<offset gif>&rating=<rating>&lang=<lang>;
function init(){
    $.ajax({
        url: queryURLGiph,
        method: "GET",
    })
        .then(function (response) {
            console.log(queryURLGiph);
            for (var i = 0; i < response.pagination.count; i++) {
                // var newImage = $("<img>");
                // newImage.attr('src',response.data[i].images.fixed_height.url);
                var newURL = response.data[i].images.fixed_height.url;
                imageArrayOne.push(newURL);
                // $("body").append(newImage);
            }
            loopingGif();

        })
}
function loopingGif() {
    console.log(imageArrayOne);
    console.log(imageArrayOne.length);
    var imgIndex = 0;
    var loopNumber = 0;
    $("#catGif").attr('src', imageArrayOne[imgIndex]);

    var timerInterval = setInterval(() => {
        loopNumber++
        imgIndex++;
        if (imgIndex > imageArrayOne.length - 1) {
            imgIndex = 0;
        }
        $("#catGif").attr('src', imageArrayOne[imgIndex]);

        if (loopNumber > 10) {
            clearInterval(timerInterval);
            console.log("stopping");
        }
        console.log(imgIndex);
    }, 5000);
}

init();