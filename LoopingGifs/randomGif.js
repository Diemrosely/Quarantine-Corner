
var gifIndex = 0;
var display = false;

function SearchGif(tag){
    var queryURLGiph = "https://api.giphy.com/v1/gifs/random?api_key=QdzVX4ZFr4pgz6YjWf0sCpUHfSxLdByA&tag=" + tag +"&rating=G&lang=en";

    $.ajax({
        url: queryURLGiph,
        method: "GET",
    })
        .then(function (response) {
            console.log(queryURLGiph);
            var newGifArray = []
            var newGif = response.data.images.fixed_height.url;
            newGifArray.push(newGif);
            loopingGif(newGifArray);
        })
}
function loopingGif(gifArray) {
    console.log(gifArray);
    var newGif = $("#gifRandom").attr('src',gifArray[gifIndex]);
    if (!display){
        display = true;
        newGif.css("display","block");
    }
    // $("#catGif").attr('src', imageArray[imgIndex]);

}

$("#random").on("click",function(event){
    SearchGif("animals");
});
$("#addDog").on("click",function(event){
    // offsetVar++;
    SearchGif("dogs");
});
$("#addCat").on("click",function(event){
    SearchGif("cats");
});