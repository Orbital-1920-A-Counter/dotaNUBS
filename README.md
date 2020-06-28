# dotaNUBS

Do you feel that you have a passion in playing DOTA 2 yet tired of losing? Or maybe, you are an enthusiast
who wants to learn the detailed mechanic of a hero? Fret not, dotaNUBS is here for the helpless souls! dotaNUBS
is available in form of web-application and telegram bot :D.

Targeted for begineers and casuals to jump-start their progession, You can find the most suitable hero for you in your current tier by viewing the statistics such as the rate of farming, the role of the hero, etc. If you are a pro-scene fans or analyst, you can also get some information regarding to your 
favorite team or a team that you want to analyse. No need to fear about the complexity of the game, our intuitive design will help everyone find what they want with no hassle.

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
* As a new player, I would like to know more information for a particular hero that gives me
trouble in matches so that I stand a better chance against this hero in future matches.
* As two new players, we want to find what pairs of heroes that have good synergies and easy 
to play, so that we can climb out the ranks faster.
* As a player, I would like to know what is the most picked or banned hero in my tier, so
that I can design an alternative strategy for the game, if my favourite hero is
frequently picked or banned.
* As a player, I would like to know what is the best hero with certain attributes, such as
the hero with faster farming rate in terms of Gold Per Minute, so that I can choose a
hero that suits my in-game role.
* As an intermediate player, I would like to find out what items are best in some specific
conditions, such as when facing certain heroes.
* As an intermediate player, I would like to learn the changes of the META from lower ranks
to higher ranks, including the change in expected heroes that I will face in ranked matches.
* As an intermediate player, I would like to learn from high level matches from offline tournaments
with very high MMR pros.
* As a professional player, I would like to know what is the current META at this time, so
that I can adjust my gameplay with the META, or even create a counter for the META.
* As a professional player, I would like to know the pick and ban of other professional
teams in their past matches so that I can analyse their gameplay and create a counter
strategy when my team meet with the other team in the tournament.
* As a professional player, I would like to learn from our team's previous tournament and
pinpoint our strengths and weaknesses.
* As a professional coach, I would like to track my member's recent match, so that I can give them
proper training material to hone their abilities.
* As a esports enthusiast, I would like to know the standing of the professional teams, so
that I know where my favourite team stands.
* As a fan of one DoTA team, I want to know my team's schedule for the next matches and
championships.

Functionalities:

* The user should be able to indicate their particulars, so that the bot can keep track of
their main hero, role, and professional team by saving them in a database.
* The user should be able to retrieve the queries regarding to their hero information via
Telegram Bot, such as role, abilities, matchups, stat growth and counters.
* The user should be able to perform graphical queries from the web, and the web should
displays some statistics of the hero, such as pick rate, ban rate and win rate for various level of play.

We use React js as the front end, and Django as our backend. We have integrated the React with Django.
We have managed to retrieve some seed of data stored in the database from the backend, and it will be
shown by the frontend. Here is the following diagram:

![Diagram](/images/diagram.jpg)


Here is our frontpage design, with headers and footers:
![Frontpage](/images/frontpage1.jpg)

And here is our function to list all DoTA2 Heroes:
![Heroes](/images/heroes.png)

We can see a detailed info about one hero (Lina):
![One_Hero](/images/one_hero.png)

The profile page is shown below (Disclaimer: This ID is neither owned by the project maker):
![Profile](/images/profile.png)
Version Control:

We use GitHub to do version control. Our github can be seen [here](https://github.com/Orbital-1920-A-Plus-Counter/dotaNUBS).
We focus on doing pulls after some features has been completed to prevent clogged pull requests. The planning
for development was done early in one week so that both of us know our job scope and prevents two people
working on one thing simultaneously. A pull is checked by other member, and corrections are made as soon
as possible to prevent lingering bugs. Both members work on seperate branches, which can be seen at the 
end of this README file.

To run this project, first you need to install npm. Then, clone this project in your local computer.
After that, open command line in your OS and go to the frontend directory of the project. Finally, run 
'npm install react-scripts' if you have not done so, and run 'npm start'. You will see the project on 
localhost:3000.

Plan:
* 1st week of July : Implementation of peer team's suggestions.
* 2nd week of July : Further refinements.
* 3rd week of July : Testing and debugging.
* 4th week of July : Final touch.


dotaNUBS is a project for CP2106 - Independent Software Developement Project (Orbital), built by team A+ Counter 
([Dick Jessen William](https://github.com/jessen11), [Mario Lorenzo](https://github.com/mario7lorenzo)). The project aims
for [Apollo 11](https://orbital.comp.nus.edu.sg/levels-of-achievement/) level of achievement. 

This README is created at May 2020.
