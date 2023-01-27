# The Terminal

The terminal is how we interact with our computer
and its directories(folders) and files.

Its is a CLI: Commands Line Interface, a text based interface to the computer.

We can type commands, manipulate files, execute programs, or open documents. More powerful and faster than a GUI.

(GUI is a Graphical User Interface using icons, menus, and windows for us to interact within a visual way.)

<hr />

## Terminal Commands

- Print working Directory
    - `pwd`
    - show the name of the current directory, prints the full directory file path
- List Directory 
    - `ls`
    show the content of the current directory, show all the folders and/or files at the current directory path
- Make Directory
    - `mkdir`
    creates a new directory inside the current one aka makes a new folder
- Touch or New Item(ni) 
    - `touch fileName.fileType`
    - `ni fileName.fileType`
    - create a new file at the current directory 
- Change Directory
    - `cd`
    - moves into a different directory
    - to move forward: `cd fileOrFolderName`
    - to move backwards: `cd ..`
- Clear
    - `clear` or `cls` 
    - clears the terminal

<hr />

## Other Terminal Commands

- Copy File 
   - `cp`
   - copies a file, ex: `cp index.html copyIndex.html`  
- Move file
    - `mv` 
    - moves a file, ex: `mv index.html ./newFolderPath`
- Help
    - `help`
    - provides a list of commands and/ro opens a help menu
- Remove Here
    - `rm -r` or `rmdir`
    - removes files.folders, Warning!: these cannot be recovered as files permanently get deleted and not sent to the recycle bin.    
    - `rm -r` removes a directories contents (all/any folder and file it contains), `rmdir` removes an empty directory/folder.

    <hr/>

    ### Other things to note:

    - In the terminal a file path divides parent and child folders files with a forward slash: / 

    - ex: desktop/PTSB_Jan_2023/Lecture/Unit_1/terminal.md

        - Desktop
           - PTSB_Jan_2023
                - Lecture 
                    - Unit_1
                        - terminal.md

- Using the tab key can help us finish a folder or file name we are typing out.

- We do need to type file/folder names exactly 

- How to stop the terminal form running:
    - Use `ctrl+c` or `cmd+c` and enter/return 
    - stops the terminal from running something and/or exits what's running/a menu, appears in the terminal as `^c`
- On Mac `sudo` may need to be use before commands where we need to elevate from user to admin privileges
    - a password field will appear and your user computer password need to be entered 


