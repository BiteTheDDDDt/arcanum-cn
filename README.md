
# To play or modify the game

  

Check out this [guide](https://discord.com/channels/622495527485046805/625963167817793566 ) on discord for instructions on how to get the game running locally, or use the following guide below.

Note: You will need to have git installed. It comes packaged on most operating systems these days, but if you're not sure if you have it, following the guide [here](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git) will get you started.  

## Part 1: Clone the repo.

1. Go to the [Arcanum Testing Repo](https://gitlab.com/arcanumtesting/arcanum).

2. On this page, there is a button titled `Clone`. Tap on this button. It will display a menu.

3. On the menu that is displayed, there is a text field titled `Clone with HTML`. Copy the text in that text field.

4. - If on Windows, open Command Prompt.
    - If on Mac or Linux, open Terminal.

5. Within Command Prompt or Terminal, navigate to the location you'd like the game to be placed.

    - [Navigating With Command Prompt](https://www.youtube.com/watch?v=9zMWXD-xoxc)

    - [Navigating With Terminal](https://www.youtube.com/watch?v=N65cjH_bcMM)

6. Once you've navigated to the desired folder within Command Prompt or Terminal, input the following command: `git clone <paste the text copied from step 3 here>`

    - It should look like this `git clone git@gitlab.com:arcanumtesting/arcanum.git`

   This will download the code for the game into a folder called `arcanum` within the folder you've navigated to.

7. Navigate into the `arcanum` folder by executing the following command in Command Prompt or Terminal: `cd arcanum`

8. Run the following command: `git checkout -b <your name or alias>`.

    - Example: `git checkout -b tinytim`

   This will create a personal branch that you can modify the code without affecting anyone else's work. It will also allow you to push up your code changes should you want to share them with others.

9. Keep the Command Prompt or Terminal window open, we'll be coming back to it later.

## Part 2: Setup VSCode

1. Download and install [VSCode](https://code.visualstudio.com/download). This is free software produced by Microsoft for coding. It is available for Windows, Mac, and Linux.

2. Open VSCode

3. Press the following keys at the same time

   - If on Mac: Shift Cmd P

   - If on Windows/Linux: Shift Ctrl P

    A search bar will appear. This is called the command pallette.

4. Search `install command`, which may display this as one of the options:

   `Shell Command: Install 'code' command in PATH`

   - If this option is available, run it to install the `code` command.

## Part 3: Setup the local repo and run the game

For the following to succeed, ensure that within Command Prompt or Terminal, you are still navigated to the `arcanum` folder as described in Part 1 above.

1. Switch back to Command Prompt or Terminal and run the following command: `code .`

	This should open the arcanum repo in your VS Code.

    - If this doesn't work and on Mac/Linux, run the following command in Terminal: `open -a Visual\ Studio\ Code .` or open VS Code and from within it, navigate to your arcanum directory

    - If this doesn't work and on Windows, open VS Code. From within VS Code, open your arcanum directory.

2. Download and install [Node](https://nodejs.org/en/download). This is required for the game to run.

3. Within Command Prompt or Terminal, run the following command: `npm install`

   This will install all the dependencies into the arcanum folder that the game requires in order to work.

4. Within Command Prompt or Terminal, run the following command: `npm run dev`

   - You will notice that you no longer are able to type in commands. This command is long running and will continue working until you exit the command by hitting the following keys together: Ctrl C or q followed by enter, h followed by enter opens the help menu

   - While this command is running, any changes made to the code will automatically be reflected within the dev folder.

5 You should now, if the program compiled sucessfully, see a message like ``` -> Local: http://localhost:3000 ```, this is the url to the now running game on your local machine, you can eihter enter the url manually into a browser, or click alt + left click on it to open a page in your default browser automtaically.

### Feel free to play or modify the game from this point forward. If you have questions, feel free to ask on [discord](https://discord.com/channels/622495527485046805/735060637918691359). If this is your first time editing code, take some time to familiarize yourself with the repo, don't get discouraged, ask lots of questions