Dali Dev II Challenge

This is my submission for the DALI Level II Developer Challenge. For this challenge, I fetched a list of objects from http://mappy.dali.dartmouth.edu/members.json using axios. Each JSON object represented a person who works for DALI, and it also included latitude and longitude coordinates. I used those coordinates to plot points on the image of a map, which I found through an internet search, and each person represented one member of DALI from the information fetched from the URL above.  

When the user hovers over a red dot on the map, a small box appears showing data related to the person, such as a small photo and a message. If the user clicks on the dot, a new tab opens to the DALI member's provided URL. If the user moves their mouse so it is not longer on top of the red dot, the box disappears.  

I built this application using JavaScript with React and Redux.  

The application is hosted at: http://watermandrew-devchallenge.surge.sh/
