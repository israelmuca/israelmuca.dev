---
type: TUTORIAL
title: 'How to: International API - i18n + validation in Node.js for your API'
summary: >-
  Modern APIs should be able to talk to your users regardless of their language.
  Leverage Express-Validator and Airbnb's Polyglot.js to easily define
  translations, and talk to the end user in their language.
description: >-
  Tutorial to implement a node.js server with express, express-validator, and
  polyglot.js to easily adjust the translations to be shown to the end user in
  any language that you want, fulfilling i18n requirements while decoupling your
  code.
keywords: >-
  node.js backend express i18n polyglot internationalization translation
  tutorial es6 babel express-validator
date: '2019-02-27T16:17:16-06:00'
thumbnail: /images/uploads/kevin-walker-751074-unsplash.jpg
---
So a while back, I was working on an API for a customer who had an [i18n](https://en.wikipedia.org/wiki/Internationalization_and_localization) requirement. Alongside other requests, they needed their API to validate incoming user data, and depending on that data, return the specific success or error messages in the user’s provided language.

Regarding the actual translations, the customer wanted to easily provide the backend with the messages in both languages (spanish & english to begin with), and they wanted to be able to eventually support more languages, being able to modify them “on the go” without requiring help from a developer.

So I started researching how to fulfill those requirements, and I ran into some hiccups along the way, thus, I thought it’d be nice to create a tutorial with my proposed (and implemented) solution.

## Let’s code!

This tutorial uses ES6, Node.js and Express, creating a server that will be responding the calls.
I’ve included a working solution with basic testing, you can go ahead and check that out in this [repository](https://github.com/israelmuca/node-i18n-validation-example), or work through the code step-by-step with me!

### Libraries

We’ll be using some battle tested libraries to speed up our development:

- **express**, to create/manage the server
- **express-locale**, to get the user’s locale
- **body-parser**, to get the user’s input
- **express-validator**, to validate the user’s input
- **node-polyglot**, by Airbnb, to help us manage languages
- **object.fromentries**, to convert an Array into an Object
- **nodemon**, to automatically restart the server


And since we’ll be using ES6, we’ll also be needing babel!
- **babel/core**
- **babel/node**
- **babel/preset-env**

So let’s get to the console and create the project
```shell
mkdir i18n-validation
cd i18n-validation
npm init
```
_I changed the default entry to **server.js**_

Now, lets install our main dependencies
```shell
npm i express express-locale body-parser express-validator node-polyglot object.fromentries
```

Now, let’s install our development dependencies
```shell
npm i @babel/core @babel/node @babel/preset-env nodemon --save-dev
```

Now, all we need to do is add another file:
```shell
touch .babelrc
```
And inside, we’ll write:
```javascript
{
"presets": [
"@babel/preset-env"
]
}
```

If you’re going to source control your project, don ’t forget to add a `.gitignore` with `node_modules` in it, to avoid committing them.

For the sake of making my development easier, I'll also change the scripts in package.json:
```javascript
{
...
"main": "server.js",
"scripts": {
"start": "nodemon --exec babel-node server.js",
"test": "echo \"Error: no test specified\" && exit 1"
},
...
}
```
> We’re using nodemon to avoid having to manually restart the server every time we make a change, and babel-node to run ES6 in node (**NEVER** deploy with babel-node!).
>The final repo includes some basic tests which we're not covering in this tutorial.

Finally, let’s create the server.js file:
```shell
touch server.js
```

Let’s now get express going by modifying the `server.js`

```javascript
// Import dependencies
// =============================================================
import express from 'express'

// Setup the express router
// =============================================================
const router = express()

// Start the server!
// =============================================================
router.listen(8080, () => {
console.log(`App running on port 8080`)
})
```

By now, we can run:
```shell
npm start
```
If all’s good, the console should be telling us that we’re running on port 8080.
And with that, we’ll have a server… _that does nothing!_

Now, we need to **actually** get it going.

So we need to add more dependencies

```javascript
// Import dependencies
// =============================================================
import express from 'express'
import createLocaleMiddleware from 'express-locale'
import bodyParser from 'body-parser'
```

And we need to set them up on the server

```javascript
// Setup the express router
// =============================================================
const router = express()

// Get the user's locale, and set a default in case there's none
router.use(createLocaleMiddleware({
"priority": ["accept-language", "default"],
"default": "en_US"
}))

// Add data parsing to express
router.use(bodyParser.urlencoded({ extended: true }))
router.use(bodyParser.json())
```

With these changes, now we’re checking on the user’s locale and parsing the data they’re sending. However, we need to add `polyglot` to express.

For that, we’ll first be creating our .js file where the translations will be living
```shell
mkdir i18n
cd i18n
touch i18n.js
cd ..
```

Let’s open this new file, where we’ll have two constants, an array that will show what languages are available
```javascript
export const availableLangs = ['es', 'en']
```

And an object that will contain the actual translations

```javascript
export const messages = {
en: {
// Error messages
'emailRequiredField': "'email' is a required field.",
'emailIsEmail': "This is not a valid email address.",
'passwordRequiredField': "'password' is a required field.",

// Success messages
'loginSuccessful': "You've successfully logged in.",
'emailSent': "Your password recovery email was sent."
},
es: {
// Mensajes de error
'emailRequiredField': "'email' es un campo requerido.",
'emailIsEmail': "Este no es un email válido.",
'passwordRequiredField': "'password' es un campo requerido.",

// Mensajes de éxito
'loginSuccessful': "Has iniciado sesión exitosamente.",
'emailSent': "Tu correo de recuperación de contraseña ha sido enviado."
}
}
```

With our messages ready, we’ll go ahead and create a middleware for express, that will import polyglot and these translations, to include them in the actual express request.

```shell
mkdir utilities
cd utilities
touch startPolyglot.js
cd ..
```

Open this new file, where we’ll import both polyglot and the translations

```javascript
import Polyglot from 'node-polyglot'
import { messages } from '../i18n/i18n'
```

And we’ll create a function that will be used on every request as an Express’ middleware. It will get the user’s locale (which we got in the `server.js`), create an instance of Polyglot, and load it with the proper messages depending on the user’s language

```javascript
exports.startPolyglot = (req, res, next) => {
// Get the locale from express-locale
const locale = req.locale.language

// Start Polyglot and add it to the req
req.polyglot = new Polyglot()

// Decide which phrases for polyglot will be used
if (locale == 'es') {
req.polyglot.extend(messages.es)
} else {
req.polyglot.extend(messages.en)
}
next()
}
```
If you remember, our `server.js` uses the `createLocaleMiddleware` to set the current locale, which lives on `req.locale.language`.

So we get that value, and for our use case, check if it is _es_ for spanish or _en_ for english (our default in case it’s neither), and load the proper messages for the language, which are added to the Express’ ‘req’ object through polyglot’s _extend_ function.

### Adding Polyglot to Express

Now, we need to add this middleware to Express on the `server.js`, both by importing it, and adding it **AFTER** we create the _locale middleware_, as polyglot uses it.

```javascript
import { startPolyglot } from './utilities/startPolyglot'

// Start polyglot and set the language in the req with the phrases to be used
router.use(startPolyglot)
```

There, now our server is ready to send error or success messages in either spanish or english, however, where will these messages originate?

### Routes

So Express needs to know what to do with different type of calls on the different routes.
For that, we’ll start listening for calls in our server by first creating a routes folder and file.

```shell
mkdir routes
cd routes
touch auth.routes.js
cd ..
```

Let’s open this file and add the following code:

```javascript
// Routes =============================================================
module.exports = router => {

// POST route to mock a log endpoint
router.post("/api/login")

// POST route to mock a forgotten password endpoint
router.post("/api/forgot-password")


}
```

What this code will do, is export a function that will take the Express instance as a parameter, to create the actual routes we’ll be using in our test API. For now, it’s missing parameters, since it’s only adding the first one, which tells express the route to listen to. After that parameter, we may add as many Express’ middlewares as we need. We will be adding middleware to do the input data validation, the error processing in case there’s any, and finally, if all’s good, respond with a success message if there were no errors with the validation.

Now, let’s go ahead and add it to the `server.js` right before we start it

```javascript
// Routes
// =============================================================
require("./routes/auth.routes")(router)
```

So now our API is listening for POST requests on `localhost:8080/api/login` and `localhost:8080/api/forgot-password`, but we still have no functionality, let’s get there.

### Validating user’s input

So it’s time to validate data, for that, we’ll be using express-validator, which is a handy middleware that let’s us validate data as it comes from the req object, setting specific error messages for each of the parameters that we’re expecting.

```shell
mkdir validator
cd validator
touch auth.validator.js
cd ..
```

Now, open `auth.validator.js` and we’ll first import the `check` function from `express-validator`.
```javascript
import { check } from 'express-validator/check'
```

Next, we’ll create a function that will be exported, which we’ll be using as middleware in our `auth.routes.js`. This function receives an string, which we define based on the use case of that route, inside we’ll use the check function that was just imported, to validate the data we’re receiving.
We’ll be using a `switch` for that, so we can reuse the same validator both for the `login`, and the `forgot-password`

Here’s the code:

```javascript
exports.validator = functionName => {
switch (functionName) {
case 'login': {
return [
check('email')
.exists().withMessage('emailRequiredField')
.isEmail().withMessage('emailIsEmail'),

check('password')
.exists().withMessage('passwordRequiredField')
]
}
case 'forgotPassword': {
return [
check('email')
.exists().withMessage('emailRequiredField')
.isEmail().withMessage('emailIsEmail')
]
}
}
}
```
We won’t get deep into the details of how the `check` function works, but it basically adds another object inside of the `req` which will store the errors (if there’s any).

What’s important to note though, is the fact that instead of setting normal error messages, we’re using the variables that we created on our i18n file!

Why? Because we want to use those `keys` from our i18n.js in whatever language the user chooses, so we need to check the object for all the possible error messages, and check our translated errors object, and swap the error string with the actual error message that we wrote in the user’s language, but not yet.

For now, we’ll be adding this validator into our route file by going to `auth.routes.js` and importing it:

```javascript
import { validator } from '../validator/auth.validator'
```

Now, we’ll use it on our actual routes:
```javascript
// POST route to mock a login endpoint
router.post("/api/login", validator('login'))

// POST route to mock a forgotten password endpoint
router.post("/api/forgot-password", validator('forgotPassword'))
```

So now our server listens to post requests on those two routes, and validates the incoming payload.
Now we need to make sure to transform those strings.

### Translating the errors

For this, we’ll create another Express middleware which will check all the errors (if any) and convert them into strings in the user’s language.

```shell
cd utilities
touch processErrors.js
cd ..
```

Go ahead and open this new file, where we’ll import another function from `express-validator` and the npm package `object.fromentries`.

```javascript
import { validationResult } from 'express-validator/check'
import fromEntries from 'object.fromentries'
```

Now, we need to create the function that will do the translation:

```javascript
const translateMessages = (errObj, req) => {
// Convert the errObj to an Array
const errArr = Object.entries(errObj)
// For each array(err), compare the error msg with the polyglot phrases, and replace it.
errArr.forEach(err => {
Object.keys(req.polyglot.phrases).forEach(phrase => {
if (phrase == err[1].msg) {
err[1].msg = req.polyglot.t(phrase)
}
})
})

// Return a function that converts the Array to an Object
return fromEntries(errArr)
}
```

In this code, we’re receiving both the error Object created with `express-validator` (which we’ll extract from the `req` object with the `validationResult` function in a bit), and the Express’ `req` object.

We’re creating an `Array` from the `errObj`, and then, for each entry, we’re taking the string we set as the error variable, and comparing it with the keys from the translation messages, changing the string in the `errArr` _(each "err[1].msg")_ to the actual phrase in polyglot in the desired language _(each "phrase")_.

Finally, we use the imported `fromEntries` function, to convert the Array back into an Object and return it.

Now, in that same file, we’ll export a middleware function that will be using this `translateMessages` function to process the errors (if any).

```javascript
exports.procErr = (req, res, next) => {

// Verifies if there were validation errors added to the request
const validationErrors = validationResult(req)

// If there were errors in the validation
if (!validationErrors.isEmpty()) {
// Return the result of the function below
return res.status(400).send(translateMessages(validationErrors.mapped(), req))
} else {
// If no errors, go!
next()
}
}
```

In this code we receive the regular `req, res, next` from Express, and we first verify if there were any errors using express-validator’s `validationResult`.
Then, we check if there are errors, and if there are any, we return them with Express’ response.
Check that return closely, as you can see, we send the results of the `translateMessages` function that is receiving the `validationErrors`, and the `req` object.
We also have an `else`, that when there are no validation errors, calls `next()` to continue to the next Express middleware.

### Sending the errors
So we're able to manage the errors by converting them from the string to their translated version, and packaging it in an object, ready to be sent back to the user if needed.  

Now, we just need to use that file!  
Let's go back to our `auth.routes.js` file and make use of this new function by importing it:
```javascript
import { procErr } from '../utilities/processErrors'
```

As I mentioned earlier, we built it as an Express Middleware, so we can just add it inside of our chain of events

And then using it in the actual routes:
```javascript
// Routes =============================================================
module.exports = router => {

    // POST route to mock a login  endpoint
    router.post("/api/login", validator('login'), procErr)

    // POST route to mock a forgotten password endpoint
    router.post("/api/forgot-password", validator('forgotPassword'), procErr)

}
```

### Moving past errors

So now, our code is ready to handle errors in both english and spanish, but what about success messages?
We already have those in the i18n.js file, but we’re not using them.

Lets write the final piece of code:

```shell
mkdir controller
cd controller
touch auth.controller.js
cd ..
```

Open this new file, where we’ll create a couple of exports to handle the final steps of the `login` and `forgot-password` processes.
If express didn’t return an error on the last step, theoretically, there are no errors on the user's data, so we’ll go ahead and send success messages here.

On a real world application we’d go to the database and check the user’s data and confirm it is actually correct and _not just valid_, but that’s beyond the scope of this tutorial.

So let’s write some code on the `auth.controller.js`.

```javascript
exports.login = (req, res) => {

// If no validation errors, get the req.body objects that were validated and are needed
const { email, password } = req.body

// Here, we would make use of that data, validating it against our database, creating a JWT token, etc...

// Since all the validations passed, we send the loginSuccessful message, which would normally include a JWT or some other form of authorization
return res.status(200).send({ auth: true, message: req.polyglot.t('loginSuccessful'), token: null })
}

exports.forgotPassword = (req, res) => {
// If no validation errors, get the req.body objects that were validated and are needed
const { email } = req.body

// Here, we would make use of that data, validating it against our database, creating a JWT token, etc...

// Since all the validations passed, we send the emailSent message
return res.status(200).send({ auth: true, message: req.polyglot.t('emailSent') })
}
```

As you can see, both functions are exported to be used in the `routes` file, and both deconstruct the `req.body` to get the values we need to use.

In both cases, further validation would be done in the controller, such as going to the database and checking if the user’s actually exist and are authorized to either login (and their password is correct) or if they’re not banned and are authorized to request a new password.

We’re assuming all of those things happened already, and just sending the response using Express’ `res` which includes the message with:
`req.polyglot.t('key')`.
This will take the value assigned to that key in the user’s selected language, and return that message.

Now, we need to go back to our `routes` to add this two functions there.
It should now look something like this:

```javascript
import { validator } from '../validator/auth.validator'
import { procErr } from '../utilities/processErrors'
import { login,
forgotPassword } from '../controller/auth.controller'

// Routes =============================================================
module.exports = router => {

// POST route to mock a login endpoint
router.post("/api/login", validator('login'), procErr, login)

// POST route to mock a forgotten password endpoint
router.post("/api/forgot-password", validator('forgotPassword'), procErr, forgotPassword)


}
```

As you can see, we’re importing both `login` and `forgotPassword`, and adding them in the `post` as the final parameter.
These last functions respond with the success messages when everything is ok!

So that's it!
Now, Express responds properly whether your `headers` are set to `es_MX` or `en_US`. Both for error and success messages.

### Testing

