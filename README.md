# Minesweeper

Hello everyone! In this repository is the game we all know and love; crafted with love, refactored with care, and perhaps Object-oriented programming at its roughest; here is a newbie rendition of the thrilling Microsoft classic: Minesweeper.

## Installing

Required browser settings:
* JavaScript enabled
* HTML5 support


### Description
** the playing field is a 10 x 10 grid
** each grid unit is a cell that can be revealed; 
** each cell has a 15% chance of containing a mine
** cells also contain clues; a number that represents the amount of mines it is surrounded by;
** player interacts with the cells by clicking on them
** if a cell containing a mine is clicked, then game over!
** try to click on every cell that isn't a mine
** once all non-mine cells have been clicked, then the player wins

What constitutes as touching the cell:
Directly above, below, left, and right of the cell;
'Kitty-corner' of the cell, in all four respective corners of the cell;
Here is a diagram of what adjacent is:
P represents the elements that constitute as touching the cell;
N represents the cell itself.
```
P P P
P N P
P P P
```
if the number were to be 1, there would be 9 possible combinations for where the mine could be. B represents mine.
```
B P P  
P N P  
P P P
```
```
P B P  
P N P  
P N P
```
```
P P B 
P N P  
P N P 
```
```
P P P
B N P  
P N P
```
```
P P P  
P N B  
P N P  
```
```
P P P  
P N P  
B P P
```
```
P P P  
P N P  
P B P
```
```
P P P
P N P
P P B
```
 Shift-click the cells to select and flag them if you think it's a mine.
 

 ## *Technologies used:*
 * Native JavaScript
 * HTML5
 * CSS3
 * [Visual Studio Code](https://www.visualstudio.com/)
 * [Google Chrome Browser](https://www.google.com/chrome/) * * Developer tools) *  *
 * [Atom text editor](https://atom.io/)


 ## *Getting Started:*

 Here's the link to the game!

 https://billhsiao.github.io/minesweeper/

## *Next steps:*

Unsolved problems: refactoring the game and wrapping it up in as many objects as possible
Trying out iterative and recursive methods and benchmarking the two, for micro-performance gains.
Maybe eliminate the constructor class for board or maybe make board with more properties so that it warrants its own constructor class.

Some new things that I would like to implement that I find interesting. 
Blackout minesweeper: whole board never reveals, only one square is revealed at a time - and that is the one that the mouse has targeted. So you can take a peek at the square underneath it, but that's all you get. Still have to flag the proper mines and once you succeed at flagging all the correct mines then you win!

different modes, sizes, mine %, probably change em to a variable that is set by the user wwith an additional user input menu for such things (like a little box that pops up before the game initializes that has all the available input fields for the necessary variables)

make it more patriotic

Refining it more.

