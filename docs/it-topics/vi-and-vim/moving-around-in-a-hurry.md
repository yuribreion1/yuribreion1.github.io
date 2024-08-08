---
layout: default
title: Moving Around in a Hurry
nav_order: 2
parent: VI and VIM
grant_parent: IT Topics
---

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
