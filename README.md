# Memory Matching Game
This matching game is mainly for use by children, however can also be enjoyed by adults especially on the harder levels.  The integrated Jokes API also has some really good  jokes and all jokes have been filtered to ensure suitable for younger players.  
It has been shown that matching games can also improve and support cognitive function for elderly and those suffering with dementia.

[![GitHub issues](https://img.shields.io/github/issues/salomelamprecht/memory_matching_game?style=plastic)](https://github.com/salomelamprecht/memory_matching_game/issues) 
[![GitHub forks](https://img.shields.io/github/forks/salomelamprecht/memory_matching_game)](https://github.com/salomelamprecht/memory_matching_game/network)

<img src="/assets/img/readme/gameimage.png" alt="Game Image"/> 

## User Stories
Some user stories that have been identified are:
1.	As a user I want to be able to navigate the game easily.
2.	As a user I want to know how to play the game so instructions are necessary.
3.	As a user I want to have a choice of different themes so that I can choose the one that is most appealing to me.
4.	As a user I want to be able to choose the difficulty of the game.
5.	As a user I want to be able to quit the game and choose from a different theme or level easily.
6.	As a user I want to be able to contact the developer to provide feedback on the usability and be able to make suggestions.
7.	As a user I want to be able to see my score and improve on it.

## UX
The website has been kept as simple as possible with only two html pages and mainly navigated by the user selecting buttons which hide and show elements.  

The background image and colours used is primarily aimed at younger players as they will be the target audience for the game, though parents and grandparents may well also play the game.

Please see separate UX folder for planes and wireframes.

## Features 
The user is able to choose form a variety of options as well as three difficulty levels and will is presented with a score so that they can keep track of their progress.

## Technologies Used
* HTML5
* CSS3
* Bootstrap4
* JavaScript
* JQuery
* GoogleFonts
* FontAwesome
* Git for version control
* GitHub for deployment

## Code Snippet
Choosing themes snippet: user chooses Princesses theme.

```
$(function chooseTheme() {
  $('.princesses').click(function () {
    $(levels).show();
    $('.theme').hide();
    choosePrincesstheme();
  });
 })
```

## Testing
### *Manual Testing*
Whilst developing the game, I frequently previewed it in order to check the layout and content as well as its responsiveness.  I did this throughout the development period.  

I used git version control and a working branch to ensure that any changes were commited to the master branch only when happy with the progress.  

I used console.log() throughout to nesure the game was functioning the way I needed it to. 

**Some of the issues encountered and fixed are as follows:**

* Upon the game loading it went straight to level selection rather than theme selection.  This was fixed with removing the overlapping code in Jasmine testing used initally.  The Jasmine test was running the code at the same time as the JS file.
* When completing the game and clicking on quit, the game would reload but the previous gameboard would not be replaced.  This was fixed with reloading the page.
* Image cards were not loading correctly, different sizes depending on size of screen etc.  Fixed by fixing the cards height and width to 100px.
* User was unable to select different themes and levels without having multiple different functions for the same thing but different theme and difficulty.  Fixed by pushing the themed arrays into a separate empty array and then emptying the array upon game completion. 

**Some outstanding issues that still need to be resolved are:**
* If the user clicks on the cards too fast, same card twice or keeps clicking and doesn't wait for the cards to turn over, matching no longer works as it should.  
* As the user wins currently this shows as an alert rather than a modal
* Timer currently starts before first click and does not stop on last click.

I uploaded to GitHub and then also tested the website using tablets and mobiles.  Most responsive testing was completed in Chrome.

### *Online Validators*
#### *HTML Validator* (https://validator.w3.org/)
Section needs a heading - fixed by changing to divs.
Type attribute unnecessary for JavaScript resources - removed.

#### *CSS Validator* (https://jigsaw.w3.org/css-validator/)
No errors found.

#### *JavaScript Validator* (https://jshint.com/)

## Deployment

## Credits 
Thank you to the designers of the icons used in the themes.

### Mining:
<img src="/assets/img/mining/excavator.png" alt="Excavator" width="25" height="25"/> Icons made by Good Ware https://www.flaticon.com/authors/good-ware" from https://www.flaticon.com/ www.flaticon.com

### Princesses: 
Icons made by Smashicons https://www.flaticon.com/authors/smashicons from https://www.flaticon.com/

### Shapes
Icons made by Pixel Perfect https://www.flaticon.com/authors/pixel-perfect from https://www.flaticon.com/

### Letters & Numbers
Icons made by Freepik https://www.freepik.com from https://www.flaticon.com/

### Wireframes
Icons made by Pixel Perfect https://www.flaticon.com/authors/pixel-perfect from https://www.flaticon.com/

### Jokes API
https://sv443.net/jokeapi/v2/
