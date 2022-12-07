# Connect Four
Many people are familar with the game of Connect 4. It is a game that has been available since 1974 and chances are nearly everyone has played this game as a child. 

The game logic is simple: connect four of the checkers in a row or diagonally while preventing the other player from doing the same. 

## Play it here: 
This link takes you to the my take on the Connect 4 game. 
https://jtw007.github.io/Project1/ 


## Tech stack:
* HTML5
* CSS
* JavaScript with basic DOM events

## Wireframe 
<img src='wireframe.png'>

## MVP 
* Render a game area with filled with circles in 7 columns and 6 rows 
* Render the game area so that once a circle is filled, it remains that way until the game is over
* Set winning conditions and 2 colors for players 
* Create a functioning button that will reset the game without having to refreshing the window

## Stretch Goals
* Expanding winning conditions from Connect 4 to Connect 5
* Experimenting with different CSS styles or canvas to make the MVP more visually appealing to the eye 

## Potential Roadblocks
* I struggled with the Tic Tac Toe deliverable and, as a result, I foresee myself running into issues in regards to coding the individual circles so that they cannot be changed once they are clicked on. 
* Coding the winning conditions along with a tie game as I also had trouble with solving this issue during TTT. 
* Changing the appearance of the square once clicked on so it corresponds with the correct color 
* Alternate between 2 players' choices

## Post-Project Reflection/Approach taken
--Approach--
The approach I took to creating this project was first creating a text document (planning doc.txt in this case) and putting as much pseudo code in there as I could in one sitting, on top of organizing my HTML, CSS, and JS code by using comments indicating the start and end of specific sections. The reason for doing this was because I realized during the TTT deliverable that pseudo coding made it easier to not only structure the coding process and making it easier to work, but also to ask questions. Being in the learning stage, I found it difficult to word the questions despite not understanding certain concepts or being stuck on a problem. 

--Reflection--
This time around, I learned from my previous mistakes made during TTT and previous deliverables and applied what I learned here. The said mistakes being: not planning out at the beginning by pseudo coding of any sort, not asking for help/reaching out when it was necessary, and trying to build everything out in one go and trying to fix errors there. I made the last mistake during the TTT when I tried to structure all of the JavaScript functions and I ended up being overwhelmed by all the errors/non-functionality, which further contributed to my frustration and resulted in me quitting early. This time around, I decided to turn the frustration into motivation to solve the problem as best I could and then reaching out for assistance when I could not solve the problem on my own. 
My reasoning for choosing Connect 4 as my Project 1 idea was due to the fact that I had left the TTT deliverable so unfinished, I felt that my JS skills in that area were left weak and I wanted to strengthen/sharpen them by doing this project. As a result, the areas I struggled in were similar to the problems I struggled with in TTT. I struggled with setting up the JS functionality that would alternate between players so that only one player could click the game object at a time. 
Another area I struggled in was coming up with a win condition function. The win function and the unimplemented function that would have enabled only the bottom row of buttons to be clickable at the start of the game were areas I couldn't overcome, on my own at least. I received help from a fellow classmate (credited below) who explained the logic behind the win function and how to structure it. It was not my own code, however, and as a result I could not add it to my project without the proper citations. 
The last area I struggled in was the functionality that would only enable the bottom row of buttons to be clicked on and only after those buttons were clicked, the buttons above would then be enabled for clicking. While I am aware that I could have made regular styled divs to be clickable, I felt it would be easier to implement the game functions with buttons. 
One area I am proud of was the createBtn function because I previously had struggled with the concepts of JS DOM elements and applying the concepts. In this case, instead of creating 42 button divs, I used JS functionality with a nested for loop to create the buttons to populate the game board using a fraction of the lines of code required. It is this area, along with click function that alternates between players I felt I had the most growth in as a budding developer. One specific instance of growth are lines 180 and 191. I point out these specific lines because during testing I could not figure out why my win function was not firing and that was due to the fact that I had not added winFunction() to the aforementioned lines. In order for the win condition function to be work, it needed to be invoked every time a button was clicked. 


## Sources/Inspiration 
* JS winFunction() - lines 206-221 - logic credit: Jay Womack 
