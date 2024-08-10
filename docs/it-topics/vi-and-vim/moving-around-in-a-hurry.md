---
layout: default
title: Moving Around in a Hurry
nav_order: 2
parent: VI and VIM
grand_parent: IT Topics
---

# Moving Around in a Hurry

You will not use `vi` just to create new files. You will spend a lot of your time in `vi` editing existing files. You rarely want to simply open to the first line in the file and move through it line by line; you want to get to a specific place in a file and start working.

All edits start with you moving the cursor to where yu want to begin the edit (or, with `ex` line editor commands, by identifying the line number to be edited). 

## Scrolling the Screen

There are `vi` commands to scroll forward and backward through the file by full and half screens:

- `^F` Scroll forward one screen
- `^B` Scroll backward one screen
- `^D` Scroll forward half screen (down)
- `^U` Scroll backward half screen (up)

## Repositioning the Screen with z

If you want to scroll the screen up or down, but you want the cursor to remain on the line where you left it, use the `z` command

- `z` [ENTER] Move the current line to top of screen and scroll
- `z.` Move current line to center of the screen and scroll
- `z-` Move current line to bottom of screen and scroll

## Redrawing the Screen

`CTRL + L` - Sometimes while you are editing, messages from your computer system will display on your screen. These messages do not become part of your editing buffer, but they do interfere with your work. When system messages appear on your screen, you need redisplay, or redraw, the screen.

Whenever you scroll, you redraw part of (or all of) the screen, so you always get rid of unwanted messages by scrolling them off the screen and then returning to your previous position. But you can also redraw the screen window without scrolling, by typing `CTRL + L`.

## Movement Within a Screen

You can also keep your current screen, or view of the file, and move around within the screen using:

- `H` Move to home - the top line on screen
- `M` Move to middle line on screen
- `L` Move to last line on screen
- `nH` Move to _n_ lines below top line
- `nL` Move to _n_ lines above last line

## Movement by Line

Within the current screen there are also commands to move by line. You have already seen `j` and `k`. You can also use: 

- `[ENTER]` Move to first character of next line
- `+` Move to first character of next line
- `-` Move to first character of previous line

These three commands move down or up to the first character of the line, ignoring any spaces or tabs, `j` and `l`, move the cursor down or up to the first position of a line, even if that position is blank (and assuming that the crsor started at the first position)

## Movements by Text Blocks

Another way that you cna think of moving through a `vi` file is by text blocks - words, sentences, paragraphs, or sections. 
You have already learned to move forward and backward by word (w, W, b or B). In addition, you can use these commands: 

- `e` - Move to end of word
- `E` - Move to end of  word (ignore punctuation)
- `(` - Move to beginning of current sentence
- `)` - Move to beginning of next sentence
- `{` - Move to beginning of current paragraph
- `}` - Move to beginning of next paragraph
- `[[` - Move to beginning of current section
- `]]` - Move to beginning of next section

To find the end of sentence, `vi` looks for one of these punctuation marks: ?, ., or !. `vi` locates the end of a sentence when the punctuation is followed by at least two spaces or when it appears as the last nonblank character on a line. If you have left only a single space following a period, or if the sentence ends with a quotation mark, `vi` will not recognize the sentence.

A paragraph is defined as text up to the next blank line, or up to one of the default paragraph macros (.IP, .PP, .LP or ..QP) from the troff MS macro package. Similarly, a section is defined as text up to the next default section macro (.NH, .SH, .H 1, or .HU). The macros that are recognized as paragraph or section separators can be customized with the `:set` command. 

## Movement by Searches

One of the most useful ways to move around quickly in a large file is by searching for text, or more properly, a _pattern_ of characters. Sometimes a search can be performed to find a misspelled word or to find each occurrence of a variable in a program. 

To search command is the special character `/` (slash). When you enter a slash, it appears on the bottom line of the screen; you then type in the pattern that you want to find. 

A pattern can be whole word or any other sequence of characters (called a "character string"). For example, if you search for the character _red_, you will match _red_ as a whole word, but you will also match _occurred_ word. If you include a space before or after pattern, the spaces will be treated as part of the word. As with all bottom-line commands, press `[ENTER]` to finish. `vi`, like all other Unix editors, has a special pattern-matching language that allows you to look for variable text pattern: for example, any word beginning with a capital letter, or a word _The_ at the beginning of a line.

`vi` begins the search at the cursor and searches forward, wrapping around to the start of the file if necessary. The cursor will move to the first occurrence of the pattern. If there is no match, the message "Pattern not found" will be shown on the status line.

## Repeating Searches

The last pattern that you searched for stays available throughout your editing session. After a search, instead f repeating you original keystrokes, you can use a command to search again for the last pattern:

- `n` - Repeat search in same direction
- `N` - Repeat search in opposite direction
- `/ [ENTER]` - Repeat search forward 
- `? [ENTER]` - Repeat search backward 

Since the last pattern stays available, you can search for a pattern, do some work, and then search again for the same pattern without retyping it by using `n`, `N`, `/` or `?`. The direction of your search is displayed at the bottom left of the screen.

### Changing through searching

You can combine the `/` and `?` search operators with the commands that change text, sech as `c` and `d`.

## Current Line Searches

There are also miniature versions of the search commands that operate within the current line. The command `fx` moves the cursor to the next instance of the character `x` (where x stands for any character). The command `tx` moves the cursor to the character _before_ the next instance of _x_. Semicolons can be used repeatedly to "find" your way along.

- `fx` - Find (move cursor to) next occurrence of x in the line, where x stands for any character
- `Fx` - Find (move cursor to) previous occurrence of x in the line
- `tx` - Find (move cursor to) character _before_ next occurrence of x in the line
- `Tx` - Find (move cursor to) character _after_ previous occurrence of x in the line
- `;` - Repeat previous find command in same direction
- `,` - Repeat previous find command in opposite direction

Examples:

| Keystrokes | Results  | Description |
| -------------- | --------------- |---------- |
| `fo` | With a screen edit***o***r you can scroll the | Find the first occurrence of letter o |
| `;` | With a screen editor y***o***u can scroll the | Next occurrence of letter o |


## Movement by Line Number

Lines in a file are numbered sequentially, and you can move through a file by specifying line numbers.
Line numbers are useful for identifying the beginning and end of large blocks of text you want to edit. Line numbers are also useful for programmers, since compilers error messages refer to line numbers. Finally, line numbers are used by `ex` commands.

The command `CTRL + G` causes the following to be displayed at the bottom of your screen: the current line number, the total number of lines in the file, and what percentage of the total the present file number represents.

## The G (Go To) Command

You can use line numbers to move the cursor through a file. The G(go to) command uses a line number as a numeric argument and moves directly to that line.
For instance, 44G moves the cursor to the beginning of line 44. `G` without a line number moves the cursor to the last line of the file.

## Review of vi Motion Commands

| Movement | Command |
| -------------- | --------------- |
| Scroll forward one screen | ^F |
| Scroll backward one scree | ^B |
| Scroll forward half screen | ^D | 
| Scroll backward half screen | ^U |
| Scroll forward one line | ^E |
| Scroll backward one line | ^Y |
| Move current line to top of screen and scroll | z [ENTER] |
| Move current line to center of screen and scroll | z . |
| Move current line to bottom of screen and scroll | z - |
| Redraw the screen | ^L |
| Move to home - the top line of screen | H |
| Move to middle line of screen | M |
| Move to first character of next line | [ENTER] |
| Move to first character of next line | + |
| Move to first character of previous line | - |
| Move to first nonblank character of current line | ^ |
| Move to end of word | e |
| Move to end of word ignoring punctuation | E |
| Move to the beginning of current sentence | ( |
| Move to beginning of next sentence | ) | 
| Move to beginning of current paragraph | { |
| Move to beginning of next paragraph | } |
| Moving to beginning of current section | [[ |
| Moving to beginning of next section | ]] |
| Search forward for pattern | /_pattern_ |
| Search backward for pattern | ?_pattern_
| Repeat last search | n |
| Repeat last search in opposite direction | N |
| Repeat last search forward | / |
| Repeat last search backward | ? |
| Go to given line _n_ | _n_ G |
| Go to end of file | G |
