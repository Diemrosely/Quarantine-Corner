# Quarantine  Corner

We created this webpage as a way to help parents keep their kids entertained with educational and family friendly content. Our user’s story is:

```
AS A quarantined parent
I WANT to keep up my child busy with educational content
SO THAT they are entertained with safe content.
```

The entertainment options we provided to children through our site are funny animal GIFs, NASA’s astronomy photo of the day, and DIY videos for craft options. 

![](Project%20One%20Front%20End%20Template/images/QCorner.png)

## Layout

The landing page for the site sets the idea for what theme we are reaching for with this project. It is meant to be a colorful page that provides a welcoming scene. When looking at other sites for children, the color palette was something that struck out as necessary. This led us to use pastel colors along with cartoon-style icons.

Additionally, the site is designed to be mobile responsive so users are not limited to viewing the page on a desktop. Taking into account our intended audience, being able to access this site on a mobile device was something we prioritized. Additionally, we needed to design a site that is easily accessible due to the younger age of our users. The user can move around the page with the navigation bar at the top or just scrolling and clicking on different images that will link to the different pages of the site. On these pages, most of the interactive elements have restricted options in order to minimize the difficulty of the site. 

## Functions

Our site hosts three main functions for users to interact with:
1. Random animal gifs
2. NASA’s astronomy media of the day
3. DIY craft ideas

The random animal gifs is developed for the user to be able to view a random GIF on the site. The site interacts with the GIPHY random image API that returns a gif object. This GIF is chosen from the options of
* dogs
* cats
* pandas
* random animal
* previous
These choices send a category that searches for a specific type of random GIF based on the ID of the button selected. The gifs are also restricted to be G-rated on the query URL for the API. The image retrieved is displayed on the page along with stored in a temporary array for the user to be able to press the previous button to view the previous GIF on the list. 

The NASA Astronomy section communicates with the NASA Open Data API in order to retrieve the media of the day. This is typically an image but it can be a Youtube video with more information about the topic of the day displayed. In order to check for the media type, we parse through the data returned for the day, and check what type of media it is. If it is an image, it is displayed in a ```<Img>``` tag but if it is a video, an ```<iFrame>``` is created and the video is displayed here for the user to view with interactive controls. This page displays the information from this API in a more enticing view for children to learn something new about Astronomy daily. 

The last section is a DIY ideas section for users to get videos of crafts to make at home. This page operates by contacting the Youtube Search API in order to retrieve a video ID to use when setting up an iFrame with a Youtube embedded URL. Additionally, this page loads in Youtube’s iFrame API in order to provide the user all the functionality of a video as it would be seen on Youtube’s page. The options for loading videos are:
* Slime
* Home Craft
* Games
Each of these options searches for that term within Youtube and returns the current most relevant result with that term with some limitations set on the queryURL such as strict search enabled.


