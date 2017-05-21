# baresoil-example-feedback-widget

This is a simple embeddable feedback form that accepts input from a web form,
and uses the [Mailgun](https://www.mailgun.com) service to send an email to
the developer containing the contents of the feedback.

To see a live demo, scroll to the bottom of [www.baresoil.com](https://www.baresoil.com/).

Note that to develop this project locally, you will need to sign up for a free
Mailgun account and obtain an API key. The API key should be entered into the
file `server/config.js`. After you have obtained the key, the following steps will
get you started:

  1. Install the Baresoil CLI: `npm install baresoil -g`
  2. Clone this repository.
  3. Run `npm install` in the `server` directory.
  4. Run `npm install` in the `client` directory.
  5. Start the Baresoil Development Environment in the root directory of the project: `baresoil dev`.
  6. Open the following URL in a web browser: [http://localhost:8086/](http://localhost:8086) to see an autorefreshing preview of the project.

For documentation on Baresoil, see [docs.baresoil.com](https://docs.baresoil.com/).

