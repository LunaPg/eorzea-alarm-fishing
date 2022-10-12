# eorzea-alarm-fishing

Eorzea Alarm fisging is a librairy that sends notification when time and wheather is perfect to gather a fish !

# Contributing !!

To contribute for code, you need to have some tests running.

If you want to contribute another way like setting up the project, create gihub template, free to PR too !!

It's just ... you can't write unit test for those, right :D

# Hacktoberfest

You're here for the hacktober fest ??

Check their awesome tutorial video !
https://hacktoberfest.com/participation/

If you don't like video, check their website !
https://hacktoberfest.com/participation/

# Fish class

The fish class will Handle the fish data as a cache layer.
For now in memory, will be later used inside a redis layer. (tbd)

It is using and converting IRL Date to EZ Date, add icon and fishingspot, as well as it's item id.

Everydata will be get from the FF XIV API, to ensure data corectness, we will wip the whole fish class and create a new one if data change.
No Update needed.
