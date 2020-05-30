# dotaNUBS

Do you feel that you have a passion in playing DOTA 2 yet tired of losing? Or maybe, you are an enthusiast
who wants to learn the detailed mechanic of a hero? Fret not, dotaNUBS is here for the helpless souls! dotaNUBS
is available in form of web-application and telegram bot :D.

You can find the most suitable hero for you in your current tier by viewing the statistics such as the rate of farming,
the role of the hero, etc. If you are a pro-scene fans or analyst, you can also get some information regarding to your 
favorite team or a team that you want to analyse.

Aim :

We would like to retrieve the most updated information of the heroes in Dota 2 with more
efficicent and more intuitive usage through the messaging platform e.g. Telegram. We also
would like to retrieve the latest information regarding to the Dota 2 professional competition
such as the percentage of a hero to be picked or banned.

User Stories: 
* As a new player, I would like to know what is the appropriate hero to start with, so that
I can learn with the hero with the hero with gradual learning curve.
* As a new player, I would like to know what is the skill of a hero, as well as the tips of
the combo skill so that I can have a starting guidance, and can improve the combo
according to my convenience.
* As a player, I would like to know what is the most picked or banned hero in my tier, so
that I can design an alternative strategy for the game, if my favourite hero is
frequently picked or banned.
* As a player, I would like to know what is the best hero with certain attributes, such as
the hero with faster farming rate in terms of Gold Per Minute, so that I can choose a
hero that suits my in-game role.
* As a professional player, I would like to know what is the current META at this time, so
that I can adjust my gameplay with the META, or even create a counter for the META.
* As a professional player, I would like to know the pick and ban of other professional
teams in their past matches so that I can analyse their gameplay and create a counter
strategy when my team meet with the other team in the tournament.
* As a esports enthusiast, I would like to know the standing of the professional teams, so
that I know where my favourite team stands.

Functionalities:

* The user should be able to indicate their particulars, so that the bot can keep track of
their main hero, role, and professional team, if any.
* The user should be able to retrieve the queries regarding to their hero information via
Telegram Bot.
* The user should be able to perform graphical queries from the web, and the web should
displays some statistics, if any.

We use React js as the front end, and Django as our backend. We have integrated the React with Django. We have managed to retrieve some seed of data stored in the database from the backend, and it will be shown by the frontend. Here is the following diagram:

![Diagram](/images/diagram.jpg)
One of the react component calls the backend to get some data that we want to display. Then, the backend retrieves the data from the database. This evidence is tested using some seeds in the database, and the front end enumerates everything inside the database as shown below:
![Output](/images/output.jpg)

Plan:

* Before June : Installing and testing tech stacks.
* 1st week of June : Finish basic functionalities for the app.
* 2nd week of June : Launch first prototype.
* 3rd week of June : Start building more advanced features.
* 4th week of June : Testing and debugging.
* 1st week of July : Implementation of peer team's suggestions.
* 2nd week of July : Working on telegram bot.
* 3rd week of July : Testing and debugging.
* 4th week of July : Final touch.


dotaNUBS is a project for CP2106 - Independent Software Developement Project (Orbital), built by team A+ Counter 
([Dick Jessen William](https://github.com/jessen11), [Mario Lorenzo](https://github.com/mario7lorenzo)). The project aims
for [Apollo 11](https://orbital.comp.nus.edu.sg/levels-of-achievement/) level of achievement. 

