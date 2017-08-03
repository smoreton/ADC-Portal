# ADC-Portal
This repo will contain the source code for the Capgemini ADC Portal/Catalogue - This portal will display the service offerings from the ADC and provide a means to capture the required data to set up these services


# React-Starter-Kit
A react starter kit was used to initially create the React application.
The repository for this starter kit can be found at: https://github.com/facebookincubator/create-react-app
Instructions are provided there on how it was initially set up.


### Testing the application

We have implemented the Enzyme Testing Framework coupled with chai. Please see below for the command to run the tests.

````bash
    npm test
````

Please be aware you will see the following console warnings when running the tests:

    console.error node_modules\fbjs\lib\warning.js:36
      Warning: Unknown prop `onTouchTap` on <button> tag. Remove this prop from the element. For details, see https://fb.me/react-unknown-prop
          in button (created by EnhancedButton)
          in EnhancedButton (created by RaisedButton)
          in div (created by Paper)
          in Paper (created by RaisedButton)
          in RaisedButton (at UserDetailsUpload.js:46)
          in a (at UserDetailsUpload.js:45)
          in div (created by styled.div)
          in styled.div (at UserDetailsUpload.js:44)
          in UserDetailsUpload (created by WrapperComponent)
          in WrapperComponent

This is due the onTouchTap being defined within app.js, so when testing the components individually they
do not have the access to where onTouchTap is defined.

### Running the app

```bash
    npm install
    npm start
```

This should open the application in your browser at:  http://localhost:3000/



