# ADC-Portal
This repo will contain the source code for the Capgemini ADC Portal/Catalogue - This portal will display the service offerings from the ADC and provide a means to capture the required data to set up these services


# React-Starter-Kit
A react starter kit was used to initially create the React application.
The repository for this starter kit can be found at: https://github.com/facebookincubator/create-react-app


However, we have now progressed to the stage where we have ejected from the starter environment.

## Developing


The package.json has been significantly updated.  If you have a previous development environment for this project, it may be best to remove the node_modules folder completely and run `npm install`.

We have seen situations where npm has failed to import dependencies if you do not take this step.




### Testing the application

We have implemented the Enzyme Testing Framework coupled with chai. Please see below for the command to run the tests.

There are two test script implemented:

1. `test` : Best run from the command line as `npm test`, (as this does not accept input in the terminal window in most development IDEs), this command will run the test framework and stay active, watching for changes files. If it detects any changed files, it will automatically re-run the tests.

2. `test:coverage` : Can be run in most IDE enviromnets or from the command-line (with `npm test:coverage`), this will run all tests and then show the test coverage statistics.

    
_Although all tests pass as of 26/10/2017, there is one known issue with the tests, where the Catalogue.test.js test displays a warning about a missing property. If anyone manages to resolve this issue, please remove this comment._    

### Running the app

- Use the `npm start` script, either from the command-line or inside the IDE. The application can then be opened in the browser at [http://localhost:3000/][1]

[1]:http://localhost:3000



