---
layout: default
title: Simple Editing
nav_order: 1
parent: VI and VIM
grand_parent: IT Topics
---

# Simple Editing

This chapter introduces you to editing with `vi`.
`vi` has two modes: command mode and insert mode. As soon as you enter a file, you are in command mode, and the editor is waiting for you to enter a command. Commands enable you to move anywhere in the file, to perform edits, or to enter insert mode to add new text. Commands can also be given to exit the file(saving or ignoring your edits) in order to return to the Unix prompt.

## Vim or Neovim tools

There are tools to be highlighted and mentioned to improve the experience using the editor

1. Setting the number line  - `:set nu`
2. Setting spellcheck       - `:set spell`
    2.1 Setting language    - `:set spelllang=en_us`
    2.2 Display suggestions - `:z=`

## Single Movements

The keys `h`, `j`, `k` and `l` works similarly as the arrow keys to navigate inside the file. At first, it may seem awkward to use letter keys instead of arrows for cursor movement. After a short while, though, you will find it is one of the things you will like best of `vi` - you can move around without even taking your fingers off the center of the keyboard.

## Numeric Arguments

You can proceed movement commands with numbers. For example: `4l` moves the cursor four spaces to the right, just as if you had typed `l` four times (llll) 

## Movement Within a Line

When you save a file, `vi` displayed a message telling you how many lines are in that file. For example: 
```
"training-vi.md", 16L -- In this case, 16 lines
```

Two useful commands that involve movement within a line are: 

- `0` that moves to beginning of line `$` that moves to the end of line

## Movement by Text Blocks

You can also move the cursor by blocks of text: words, sentences, paragraphs, etc. The `w` command moves the cursor forward one word at the time, counting symbols and punctuation as equivalent as words.

You can also move by word, not counting symbols and punctuation, using the `W` command (capital letter w).

To move backward by word, use the `b` command. Capital `B` allows you to move backward by word, not counting punctuation.

To move to a specific line, you can use the `G` command. Plain `G` goes to the end of file, 1G goes to the top of the file, and 42G goes to line 42. 

## Simple Edits

When you enter text in your file, it is rarely perfect. You find typos or want to improve on a phrase; sometimes your program has abug. Once you enter text, you have to be able to change it, delete it, move it or copy it. 
In `vi` you can perform any of these edits with a few basic keystrokes: `i` for insert; `a` for append; `c` for change, and `d` for delete. To move or copy text, you use pairs of commands. You move text with a `d` for "delete", then `p` for "put"; you copy text with a `y` for "yank", then a `p` for "put".

### Appending Text

You can append text at any place in your file with the append command `a`. This works in almost the same way as `i`, except that text is inserted _after_ the cursor rather than _before_ the cursor. You may have noticed that when you press `i` to enter insert mode, the cursor does not move until after you enter some text. By contrast, when you press `a` to enter insert mode, the cursor moves one space to the right. When you enter text, it appears after the original cursor position.

### Changing Text

You can replace any text in your file with the change command `c`. To tell `c` how much text to change, you combine `c` with a movement command. In this way, a movement command serves as a _text object_ for the `c` command to affect. For example, `c` can be used to change text from the cursor:

- `cw` 	to the end of the word
- `c2b` to back two words
- `c$` 	to the end of line
- `c0`	to the beginning of line

After issuing a change command, you can replace the identified text with any amount of new text, with no characters at all, with one word, or with hundreds of lines. `c` like of `a` and `i`, leaves you in insert mode until you press the `ESC` key.

When the change affects only the current line, `vi` marks the end of the text that will be changed with a `$`, so that you can see what part of the line is affect, so that you can see what part of the line is affected.

#### Lines

To replace the entire current line, user the special change command, `cc`. It changes the entire line, replacing that line with any amount of text entered before pressing `ESC`. It does not matter where the cursor is located on the line; `cc` replaces the entire line of text. 

### Characters

One other replacement edit is given by the `r` command. Replaces a single character with another single character. You do not have to press `ESC` to return to command mode after making the edit.

### Substituting Text

Suppose you want to change just a few characters, and not a whole word. The substitute command(s), by itself, replaces a single character. With a preceding count, you can replace that many characters. As with the change command `c`, the last character of the text will be marked with a `$` so that you can see how much text will be changed. The command with capital letter, changes the whole line.

### Deleting Text

You can also delete any text in your file with the delete command `d`. Like the change command, the delete command requires a text object (the amount of text to be operated on). You can delete by word `dw`, by line `dd and D`.

Often you want to delete only one or two characters. Just as `r` is a special change command to replace a single character, `x` deletes only the character the cursor is on.


### Moving Text

In `vi`, you move text by deleting it and then placing that deleted text elsewhere in the file, like a "cut and paste". Each time you delete a text block, that deletion is temporarily saved in a special buffer. Move to another position in your file and use the put command `p` to place that text in the new position. You can move any block of text, although moving is more useful with lines than with words.

The put command `p` puts the text that is in the buffer _after_ the cursor position. The uppercase version of the command, `P`, puts the text _before_ the cursor. If you delete one or more lines, `p` puts the deleted text on a new line(s) below the cursor, after the cursor.

### Copying Text

Often you can save editing time (and keystrokes) by copying a part of your file to use in other places. With the two commands `y` (for yank) and `p` (for put), you can copy any amount of text and put that copied text in another place in the file. A yank command copies the selected text into a special buffer, where it is held until another yank (or deletion) occurs. You can then place this copy elsewhere in the file with the put command. 

As with change and delete, the yank command can be combined with any movement command (yw, y$, 4yy). Yank is most frequently used with a line (or more) of text, because to yank and put a word usually takes longer than simply to insert the word.

The shortcut `yy` operates on the entire line, just as `dd` and `cc` do. But the shortcut `Y`, for some reason, does not operate the way `D` or `C` do. Instead of yanking from the current position to the end of the line, `Y` yanks the whole line; that is, `Y` does the same thing as `yy`.

Yanking uses the same buffer as deleting. Each new deletion or yank replaces the previous contents of the yank buffer. 

### Repeating or Undoing Your Last Command

Each edit command that you give is stored in a temporary buffer until you give the next command. For example, if you insert the after a word in your file, the command used to insert the text, along with the text that you entered, is temporarily saved.

Any time you make the same editing command over and over, you can save time by duplicating it with the repeat command, the period `.`. Position the cursor where you want to repeat the editing command. 

### Undo

You can undo last command if you make an error. Simply press `u`. The cursor need not be on the line where the original edit was made. 

`U`, the uppercase version, **undoes all edits on a single line**, as long as the cursor remains on that line. Once you move off a line, you can no longer use `U`.

### More Ways to Insert Text

- `A` (uppercase): Append text to end of current line
- `I` (uppercase): Insert text at beginning of line
- `o` (lowercase): Open blank line below cursor for text 
- `O` (uppercase): Open blank line above cursor for text
- `s` (lowercase): Delete character at cursor and substitute text
- `S` (uppercase): Delete line and substitute text
- `R` (uppercase): Overstrike existing character with new character

All of these commands place you in insert mode. After inserting text, remember to press `ESC` to return to command mode.
`A` (append) and `I` (insert) **save you from having to move your cursor to the end or beginning of the line before invoking insert mode.**

`s` and `S` (substitute) allow you to delete a character or a whole line and replace the deletion with any amount of new text. `s` is equivalent of the two-stroke command `c` `SPACE`, and `S` is the same as `cc`. One of the best uses for `s` is to change one character to several characters.
`R` is useful you want to start changing text, but you do not know exactly how much. For example, instead of guessing wheter to say `3cw` or `4cw`, just type `R` and them enter your replacement text.

## Joining Two Lines with J

Sometimes while editing a file you end with a series of short lines that are difficult to scan. When you want to merge two lines into one, position the cursor anywhere on the first line, and press `J` to join two lines

- Before

``` 
With a screen editor
you can 
scroll the page, move the cursor
```
- After
```
With a screen editor you can
scroll the page, move the cursor
```
Using a numeric argument with `J` joins that numer of consecutive lines. In the example here, you could have joined three lines by using the command `3J`

## Review of Basic vi Commands

| Text object				| Change   | Delte    | Copy    |
|---------------------------------------|----------|----------|---------|
| One word				| cw	   | dw	      | yw	|
| Two words, not counting punctuation	| 2cW	   | 2dW      | 2yW	|
| Three words back			| 3cb	   | 3db      | 3yb	|
| One line				| cc	   | dd	      | yy	|
| To end of line			| C	   | D	      | Y	|
| To beginning of line			| c0	   | d0	      | y0	|
| Single character			| r	   | x or X   | yl	|
| File character			| 5s	   | 5x       | 5yl     |

### Movements 

| Movements| Commands    |
|--------------- | --------------- |
| Arrow keys   | h, j, k, l   |
| To first character of next line   | +   |
| To first character of previous line  | -   |
| To end of word  | e or E   |
| Forward by word  | w or W   |
| Backward by word  | b or B   |
| To end of line  | $   |
| To beginning of line  | 0   |

### Other operations

| Operations | Commands |
| -------------- | --------------- |
| Place text from buffer | P or p |
| Start `vi`, open file if specified | `vi <filename>` |
| Save edits, quit file | ZZ |
| No saving of edits, quit file | `:q!` |

### Text creationand manipulation commands

| Editing action   | Command | 
|--------------- | --------------- |
| Insert text at current position   | i   |
| Insert text at beginning of line   | I   |
| Append text at current position   | a   |
| Open new line below cursor for new text   | o   |
| Open new line above cursor for new text  | O   |
| Delete line and substitute text   | S   |
| Overstrike existing characters wth new text   | R   |
| Toggle case   | ~    |
| Repeat last action  | .   |
| Undo last change   | u   |
| Restore line to original state   | U   |
