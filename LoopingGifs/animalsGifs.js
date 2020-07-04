
    var gifIndex = 0;
    var display = false;
    var newGifArray = []


    function SearchGif(tag) {
        if (tag === "previous"){
            var currentGIF = $("#gifHolder").attr('src');
            var currentIndex = newGifArray.indexOf(currentGIF);
            var previousIndex = currentIndex - 1; // working logic
            if (currentIndex === 0){
                // no previous gif to display
                return
            }
            else{
                var previousGif = $(newGifArray).get(previousIndex);
                $("#gifHolder").attr('src', previousGif);
            }
        }
        else{
            var queryURLGiph = "https://api.giphy.com/v1/gifs/random?api_key=QdzVX4ZFr4pgz6YjWf0sCpUHfSxLdByA&tag=" + tag + "&rating=G&lang=en";
            // console.log(tag);
            // console.log(queryURLGiph);
            $.ajax({
                url: queryURLGiph,
                method: "GET",
            })
            .then(function (response) {
                // console.log(queryURLGiph);
                var newGif = response.data.images.fixed_height.url;
                newGifArray.push(newGif);
                loopingGif(newGifArray);
                gifIndex++;
            })
        }
    }
    function loopingGif(gifArray) {
        // console.log(gifIndex);
        // console.log(gifArray);
        var newGif = $("#gifHolder").attr('src', gifArray[gifIndex]);
        if (!display) {
            display = true;
            newGif.css("display", "block");
        }
    }

    $("button").on("click", function (event) {
        SearchGif($(this).attr("id"));
    });