#**Minesweeper**

Hello everyone! In this repository is the game we all know and love; crafted with love, refactored with care, and perhaps Object-oriented programming at its roughest; here is a newbie rendition of the thrilling Microsoft classic: Minesweeper.

### Installing

Need an internet browser. (Chrome, FireFox, Opera)

### Description

Currently this game features one board size with the dimensions 10 cells x 10 cells @ 15% mine-spawn per cell.

The objective of the game is to traverse the board and reveal every cell that isn't a mine. Use the clues & hints that the cells provide; the numbers represent how many mines are touching the respective square that it is in.

What constitutes as touching the cell:
Directly above, below, left, and right of the cell;
'Kitty-corner' of the cell, in all four respective corners of the cell;
Here is a diagram of what adjacent is:
P represents the elements that constitute as touching the cell;
N represents the cell itself.

P P P
P N P
P P P

if the number were to be 1, there would be 9 possible combinations for where the mine could be. B represents mine.

B P P  P B P  P P B  P P P  P P P  P P P  P P P  P P P
P N P  P N P  P N P  B N P  P N B  P N P  P N P  P N P
P P P  P N P  P N P  P N P  P N P  B P P  P B P  P P B

 Shift-click the cells to select and flag them if you think it's a mine.

 ##Technologies used:
 Native JavaScript
 HTML5
 CSS3
 Visual Studio Code
 Google Chrome Browser
 Atom text editor


 ##Getting Started:

 Here's the link to the game!

 https://billhsiao.github.io/minesweeper/

Next steps:

Unsolved problems: refactoring the game and wrapping it up in as many objects as possible
Trying out iterative and recursive methods and benchmarking the two, for micro-performance gains.
Maybe eliminate the constructor class for board or maybe make board with more properties so that it warrants its own constructor class.

Refining it more.
