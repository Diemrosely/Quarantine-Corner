      // function renderVideo(){
        // // 2. This code loads the IFrame Player API code asynchronously.
        var tag = document.createElement('script');

        tag.src = "https://www.youtube.com/iframe_api";
        $("body").append(tag);
        // $.ajax({
          // url: "https://www.youtube.com/iframe_api",
          // method: "GET"

        // })
        // 3. This function creates an <iframe> (and YouTube player)
        //    after the API code downloads.
        function renderVideo(idPassed){
          console.log(player);
          var player;
          function onYouTubeIframeAPIReady(player) {
              player = new YT.Player('player', {
              height: '390',
              width: '640',
              videoId: idPassed,
              events: {
              }
              });
              console.log(player);
          }
          onYouTubeIframeAPIReady(player);
          // 4. The API will call this function when the video player is ready.
          function onPlayerReady(event) {
            // event.target.playVideo();
          }

          function stopVideo() {
            player.stopVideo();
          }
        }

      var videoIndex = 0
      $("button").on("click",function(event){
        // console.log("click");
        var videoList = ["hY7m5jjJ9mM","ByH9LuSILxU","tpiyEe_CqB4"]
        if (videoIndex === videoList.length){
          videoIndex = 0;
        }
        // console.log(videoIndex);
        renderVideo(videoList[videoIndex]);
        videoIndex++;
        // console.log(videoIndex);
      })
      