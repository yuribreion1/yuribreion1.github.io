# Beyond the Basics

## Options When Starting vi

So far, you have invoked the `vi` editor with the command: 

- `vi <filename>`

There are other options to the `vi` command that can be helpful. You can open a file directly to a specific line number or pattern. You can also open file in read-only mode. Another option recovers all changes to a file that you were editing when the system crashed

### Advancing to a Specific Place

When you begin editing an existing file, you can call the file in and then move to the first occurrence of a _pattern_ or to a specific line number. You can also specify your first movement by search or by number right on the command line:

- `$ vi +n <filename>`
  - Opens file at line number _n_
- ` $ vi + <filename>`
  - Opens file at last line
- ` $ vi /pattern <filename>`
  - Opens file at the first occurrence of pattern

### Read-Only Mode

There will be times when you want to look at a file but want to protect that file inadvertent keystrokes and changes. (You might want to call in a lenghty file to practice vi movements, or you might want to scroll through a command file or program.) You can enter a file in read-only mode and use all the vi movement commands, but you will not be able to change the file.

To look at a file in read-only mode, enter either>

- `$ vi -R <filename>`

or:

- `$ view <filename>`

### Recovering a Buffer

Occasionally a system failure may happen while you are editing a file. Ordinarily, any edits made after your last write (save) are lost. However, there is an option, `-r`, which lets you recover the edited buffer at the time of a system crash.

On a traditional Unix system with the original `vi`, when you first log on after the system is running again, you will receive a mail message starting that your buffer has been saved. In addition, if you type the command:

- `$ ex -r`

or:

- `$ vi -r`
you will get a list of any files that the system has saved.

Use the `-r` option with a filename to recover the edited buffer. For example, to recover the edited buffer of the file `practice` after a system crash, enter:

- `$ vi -r practice`

It is wise to recover the file immediately, lest you inadvertently make edits to the file and then have to resolve a version skew between the preserved buffer and the newly edited file.
