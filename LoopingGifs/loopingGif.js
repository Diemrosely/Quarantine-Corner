
// format === address/v1/gifs/<query type>?api_key=<key>&q=<search term>&limit=<number results>&offset=<offset gif>&rating=<rating>&lang=<lang>;
var offsetVar = 0
var offsetVar = 0
function SearchGif(query){
    var limit = 4;
    var queryURLGiph = "https://api.giphy.com/v1/gifs/search?api_key=QdzVX4ZFr4pgz6YjWf0sCpUHfSxLdByA&q=" + query + "&limit=" + limit + "&offset="+offsetVar+"&rating=G&lang=en";

    $.ajax({
        url: queryURLGiph,
        method: "GET",
    })
        .then(function (response) {
            console.log(queryURLGiph);
            var newImageArray = []
            for (var i = 0; i < response.pagination.count; i++) {
                var newURL = response.data[i].images.fixed_height.url;
                newImageArray.push(newURL);
                // $("body").append(newImage);
            }
            loopingGif(newImageArray);
        })
}
function loopingGif(imageArray) {
    // console.log(imageArray);
    // console.log(imageArray.length);
    var imgIndex = 0;
    var loopNumber = 0;
    var newImage = $("<img>").attr('src',imageArray[imgIndex]);
    $("body").prepend(newImage);
    

    // $("#catGif").attr('src', imageArray[imgIndex]);

    var timerInterval = setInterval(() => {
        loopNumber++
        imgIndex++;
        if (imgIndex > imageArray.length - 1) {
            imgIndex = 0;
        }
        // $("#catGif").attr('src', imageArray[imgIndex]);
        newImage.attr('src',imageArray[imgIndex]);
        if (loopNumber > 10) {
            clearInterval(timerInterval);
            console.log("stopping");
            $(newImage).remove();

        }
        // console.log(imgIndex);
    }, 5000);
}

// SearchGif("cat");
$("#addDog").on("click",function(event){
    offsetVar++;
    SearchGif("dogs");
});
$("#addCat").on("click",function(event){
    SearchGif("cats");
});