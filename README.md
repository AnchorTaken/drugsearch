# DrugSearch
I'm not quite sure what this project will end up being and I only have a breif direction i wan't the project to go towards.
## Getting Started


### Prerequisites
What things you need to install the software and how to install them
```
* [Node.js](https://nodejs.org/) - Core
* [VSCode](https://code.visualstudio.com/) - (Prefferable but not mandatory)
* [XAMPP](https://www.apachefriends.org/) - (Anything with MySQL DB and php will work)
```
### Installing
Step 1 - Start
```
Clone or download the repository
```
Step 2 - Core
```
Get familiar with folder structure 
-API Server (Needs to be run on server like xampp that can handle php)
-Angular APP (Raw Angular App that is later built and used on php server)
-Other (MySQL and other stuffs)
```
Step 3 - Setting up API Server
```
Open Repo and go to API Server and copy all the info from there to xampp or your preffered server core folder.
```
Step 4 - Importing MySQL
```
Open MySQL and import data by going to import and selecting the file in "other" folder to import
```
Step 5 - Quick test
```
Run server to see if it's spinning up. In case of xampp just booting up server and seeing landing page is enought to indicate that it works.
```
Step 6 - Spinning up Angular App
```
Goto Angular App and open it in VSCode or GitBash or other other just default terminal.
Enter "npm i" to install all the dependencies.
Then enter "npm i -g @angular/cli" to install angular cli.
Then enter "ng serve --open" to spin up the app. You can use "--port 0000" after open if you have another node app running in background.
```
Step 7 - Building and deploying to server
```
After changes you have added are satisfying you are ready to test it on server and see if it's going to work. Use "ng build" to quickly compile the app. It will be placed in DIST folder in core angular app. 
Copy over that data to your xampp server into app folder.
```
Step 8 - See if it works



<!-- 
End with an example of getting some data out of the system or using it for a little demo
## Running the tests
Explain how to run the automated tests for this system
### Break down into end to end tests
Explain what these tests test and why
```
Give an example
```
### And coding style tests
Explain what these tests test and why
```
Give an example
``` 
## Deployment
Add additional notes about how to deploy this on a live system-->
## Built With
* [Codeigniter](http://codeigniter.com/) - Main Framework For API Management
* [Codeigniter REST Api](https://github.com/chriskacerguis/codeigniter-restserver) - Sub library for Codeigniter
* [Angular](https://angular.io/) - Core 
* [Bootsrap](http://getbootstrap.com/) - Essencials for layout and design
* [Jquery](https://jquery.com) - Essencials 
* [Font Awasome](https://fontawesome.com/) - Icons 

## Contributing
Please read [CONTRIBUTING.md](https://gist.github.com/PurpleBooth/b24679402957c63ec426) for details on our code of conduct, and the process for submitting pull requests to us.
## Versioning
We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/AnchorTaken/drugsearch/tags). 
## Authors
* **Evalds** - *Initial work* - [AnchorDesigns](https://github.com/AnchorDesigns)
See also the list of [contributors](https://github.com/your/project/contributors) who participated in this project.
## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details
## Acknowledgments
*Billie Thompson* - *Initial work* - [PurpleBooth](https://github.com/PurpleBooth). For README Example
