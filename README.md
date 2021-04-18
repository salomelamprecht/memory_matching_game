# Memory Matching Game
This matching game is mainly for use by children, however can also be enjoyed by adults especially on the harder levels.  The integrated Jokes API also has some really good jokes and all jokes have been filtered to ensure suitable for younger players.  
It has been shown that matching games can improve and support cognitive function for elderly and those suffering with dementia, so kids can also play with their grandparents.

The game has broken up into different themes and levels and is very easy to play.  The user can take as long as they want but will need to match all cards in order to complete the game, should they wish to stop they can quit the game.

[![GitHub issues](https://img.shields.io/github/issues/salomelamprecht/memory_matching_game?style=plastic)](https://github.com/salomelamprecht/memory_matching_game/issues) 
[![GitHub forks](https://img.shields.io/github/forks/salomelamprecht/memory_matching_game)](https://github.com/salomelamprecht/memory_matching_game/network)

## User Stories
Some user stories that have been identified are:
1.	As a user I want to be able to navigate the game easily.
2.	As a user I want to know how to play the game so instructions are necessary.
3.	As a user I want to have a choice of different themes so that I can choose the one that is most appealing to me.
4.	As a user I want to be able to choose the difficulty of the game and as I progress, I would want to choose a higher difficulty level.
5.	As a user I want to be able to quit the game and choose from a different theme or level easily.
6.	As a user I want to be able to contact the developer to provide feedback on the usability and be able to make suggestions.
7.	As a user I want to be able to see my score and improve on it and also compete against my family or friends.
8.  As a user I want to be able to have an alternative to just playing the game.

## UX
<img src="/assets/img/readme/gameimage.png" alt="Image of game startup screen" style="max-width: 100%"/>

The game is targeted at younger players so has been kept as simple as possible with only two html pages and mainly navigated by the user selecting buttons which hide and show elements.  The majority of elements are created with javascript apart from the basic structure of the page.

As the game is targeted for younger players, the background image and colours used are aimed specifically at them, though parents and grandparents may well also like to play the game, especiallly when playing against one another in a family setting.

Please see separate UX folder for planes and wireframes.

## Features 
The user is able to choose from a variety of options as well as three difficulty levels and will be able to save their score and if their score makes it onto the highscores for that level, they can view the highscore list.  This will enable them to compete against others in the same household when using the same web browser and also compete against themselves to better their score and memory.

### Feature 1
The user can select the theme they want to play.
<img src="/assets/img/readme/themeselection.png" alt="Image of game themes" style="max-width: 100%"/>

### Feature 2
The user can choose between easy, medium or hard difficulty levels.
<img src="/assets/img/readme/levelselection.png" alt="Image of game levels" style="max-width: 100%"/>

### Feature 3
The user can save their score to localStorage.
<img src="/assets/img/readme/savescore.png" alt="Image of saving player score" style="max-width: 100%"/>

### Feature 4
The user can see if they're on the highscores list and compete against others.
<img src="/assets/img/readme/highscores.png" alt="Image of highscores list" style="max-width: 100%"/>

## Technologies
*Main*
<img src="/assets/img/readme/html5.png" alt="HTML5 logo" width="25" height="25"/> HTML5
<img src="/assets/img/readme/css.png" alt="CSS logo" width="25" height="25"/> CSS3
<img src="/assets/img/readme/javascript.png" alt="JavaScript logo" width="25" height="25"/> JavaScript

*Frameworks & Libraries*
<img src="/assets/img/readme/bootstrap.png" alt="Bootstrap logo" width="25" height="25"/> Bootstrap4
<img src="/assets/img/readme/jquery.png" alt="JQuery logo" width="89" height="25"/> JQuery
<img src="/assets/img/readme/swal.png" alt="SweetAlert logo" width="110" height="25"/> SweetAlert

*Version Control*
<img src="/assets/img/readme/Git.png" alt="Git logo" width="25" height="25"/> Git for version control
<img src="/assets/img/readme/GitHub.png" alt="GitHub logo" width="25" height="25"/> GitHub for deployment

*Fonts & Icons*
<img src="/assets/img/readme/fontawesome.png" alt="FontAwesome logo" width="25" height="25"/> FontAwesome
<img src="/assets/img/readme/GFLogo.png" alt="Google Fonts logo" width="25" height="25"/> GoogleFonts

## IDE used
VS Code

## Code Snippet
Choosing themes snippet: user chooses Princesses theme.

```
$(function chooseTheme() {
  $('.princesses').click(function () {
    document.querySelector('.difficulty').style.display = 'block';
    $('.theme').hide();
    choosePrincesstheme();
  });
 })
```

## Testing
### *Manual Testing*
Whilst developing the game, I frequently previewed it in order to check the layout and content as well as its responsiveness.  I did this throughout the development period.  

I used git version control and a two working branches to ensure that any changes were commited to the master branch only when happy with the progress.  Commits added throughout as and when larger changes were made whilst using working branches.  

I used console.log() throughout to ensure the game was functioning the way I needed it to. 

#### Testing against user stories
Please see below and also in the features sections where there are some images showing how this works.
1.	Navigating the game is easy with the simple layout. Buttons only become available as the user makes their choices throughout therefore simplifying the whole design.
2.	The instructions are displayed to the user when the game starts and stays for the duration of the game so that the user can refer back to it if required. 
3.	Themes are easily selected by the click of a button.
4.	Difficulty levels can be easily selected by the click of a button. 
5.	If the user changes their mind and no longer wants to play the game they selected, they can select quit button and it will take them back to where they can make new selections.
6.	Users can contact the developer by emailing them through the link available in the footer.
7.	Users can play against family and friends and keep score using the same web browser's localStorage.
8.  There are jokes for the user to enjoy should they wish to take a break from playing the game.  This is done by selecting the jokes button below the game's main section.

**Some of the issues encountered and fixed are as follows:**

* Upon the game loading it went straight to level selection rather than theme selection.  This was fixed with removing the overlapping code in Jasmine testing used initally.  The Jasmine test was running the code at the same time as the JS file.
* When completing the game and clicking on quit, the game would reload but the previous gameboard would not be replaced.  This was fixed with reloading the page.
* Image cards were not loading correctly, different sizes depending on size of screen etc.  Fixed by fixing the cards height and width to 100px.
* User was unable to select different themes and levels without having multiple different functions for the same thing but different theme and difficulty.  Fixed by pushing the themed arrays into a separate empty array and then emptying the array upon game completion. 
* Whenever saving the user's name against the highscores list, it saved all of easy, medium and hard levels to 1 highscores table.  Changed this so that easy, medium and hard level scores are separated out with their own top 10 highscores list.
* As the user wins an alert was showing, this was changed to a modal instead for the total moves, time taken and score as well as congratulations message for the different levels.

**Some outstanding issues that still need to be resolved are:**
* If the user clicks on the cards too fast, same card twice or keeps clicking and doesn't wait for the cards to turn over, matching no longer works as it should.  
* Timer currently starts before first click and does not stop on last click. 
* localStorage easy clears with localStorage.clear() in console, however when saving a new score after clearing all previous easy scores up to 10 are listed on the highscores.  Not an issue for frontend player that does not look at the console.
* Extra move is counted on at end but does not affect score.

I uploaded to GitHub and then also tested the website using tablets and mobiles.  Most responsive testing was completed in Chrome.

### *Online Validators*
#### *HTML Validator* (https://validator.w3.org/)
Section needs a heading - fixed by changing to divs.
Type attribute unnecessary for JavaScript resources - removed.

#### *CSS Validator* (https://jigsaw.w3.org/css-validator/)
No errors found.

#### *JavaScript Validator* (https://jshint.com/)
Installed jshint in the terminal.  Validated code throughout. 

## Version Control
I used git for version control.  Created a working-branch & working-branch2 for all added changes before committing to the master branch to ensure new additions to the game did not impact on the working game code in the master branch.  Used push and pull requests to update master branch with successful additions.  Working-branch has been left to show where a major change to html occurred.  Working-branch2 merged with master as this is the branch where I used javascript to create the majority of HTML in the content.js file.

## Deployment

## Credits 
### Useful articles and game how to guides used:

#### Articles: 
* https://michael-karen.medium.com/how-to-save-high-scores-in-local-storage-7860baca9d68
* https://developer.mozilla.org/en-US/docs/Web/JavaScript 

#### Games:
* https://www.freecodecamp.org/news/vanilla-javascript-tutorial-build-a-memory-game-in-30-minutes-e542c4447eae/ 
* https://github.com/sandraisrael/Memory-Game-fend/blob/master/js/app.js
* https://www.youtube.com/watch?v=tjyDOHzKN0w
* https://www.youtube.com/watch?v=4zx5bM2OcvA

### Thank you to the designers of the icons used in the themes:
#### Mining:
<img src="/assets/img/mining/excavator.png" alt="Excavator" width="25" height="25"/> Icons made by Good Ware https://www.flaticon.com/authors/good-ware" from https://www.flaticon.com/ www.flaticon.com

#### Princesses: 
<img src="/assets/img/princesses/princess1.png" alt="Princess" width="25" height="25"/> Icons made by Smashicons https://www.flaticon.com/authors/smashicons from https://www.flaticon.com/

#### Shapes
<img src="/assets/img/shapes/cube.png" alt="Cube" width="25" height="25"/> Icons made by Pixel Perfect https://www.flaticon.com/authors/pixel-perfect from https://www.flaticon.com/

#### Letters & Numbers
<img src="/assets/img/alphabet_numbers/s.png" alt="Letter S" width="25" height="25"/> Icons made by Freepik https://www.freepik.com from https://www.flaticon.com/

#### Wireframes
<img src="/assets/img/wireframes/bodyRM.png" alt="Wireframe of the body of an article" width="25" height="25"/> Icons made by Pixel Perfect https://www.flaticon.com/authors/pixel-perfect from https://www.flaticon.com/

### Thanks to Jokes API for the jokes:
#### Jokes API
https://sv443.net/jokeapi/v2/
<img src="/assets/img/joke.png" alt="A programming joke" width="33vw" height="33vh"/>
