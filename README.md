# David Nelson's Portfolio

Visit the website of this project [here](https://www.davidmarknelson.com/)

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

Run `npm run api-dev` for the api to send the message from the contact form.

## Environment variables

`NODE_ENV` is set to `development` or `production`.  
`PORT` is set to a port you specify.  
`SG_API_KEY` is your Sendgrid api key you can get for free.  
`SG_PW` is your Sendgrid accound password.  
`SG_USER` is your Sendgrid username.  
`SMTP` is your SMTP mail address. Sendgrid uses `smtp.sendgrid.net`  
`EMAIL` is the email address you want the messages from the contact form to be sent to.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Use Cypress to run the end-to-end tests in the `cypress/integration/` directory.