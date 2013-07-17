Development Environment 
=======

Tools, Scripts, WorkFlow

Setup Environment
=======

For Windows Users
-------
1. Download [Git](http://git-scm.com/download/win) Stand-alone for windows and install it
![mysgit setup](images/mysgit.png)
2. Download [Nodejs](http://nodejs.org/download/) for windows and install it
3. From Git Shell, install jshint (`npm install -g jshint`)
4. Download [SourceTree](http://www.sourcetreeapp.com/download/) for windows and install it (without portable Git)
5. Download [Lua for mingw](mingw_lua.zip), extract it, move `lua.exe`, `luac.exe` and `lua51.dll` to `C:\Program Files\Git\bin`

For Ubuntu Users
-------
1. Install git(`sudo apt-get install git`)
2. Download [Nodejs](http://nodejs.org/download/) for linux and install it
3. Install jshint (`npm install -g jshint`)

Install newer nodejs on Ubuntu
-------
1. Edit source list(`sudo nano /ect/apt/sources.list`)
2. Add (`http://archive.ubuntu.com/ubuntu/ quantal main restricted universe multiversedeb`) and (`http://security.ubuntu.com/ubuntu/ quantal-security main restricted universe multiverse`)
3. Update Package list(`sudo apt-get update`)
4. Install nodejs
```
  $sudo apt-get install python-software-properties

  $sudo add-apt-repository ppa:richarvey/nodejs

  $sudo apt-get update
  
  $sudo apt-get install nodejs
```
5. Check version(`node -v`)


How to contribute?
=======
1. Create a branch (`git checkout -b new_feature`)
2. Commit your changes (`git commit -am "Added awesome feature"`)
3. Push to the branch (`git push origin new_feature`)
4. Open a **[Pull Request]** for review and merge
