# Javascript form handling and validating

Take a look at: https://ddandev.github.io/js-form-validation/

Currently, warns empty fields when form is submitted with red border and text warning.

Fields with anything in them get a green border.

On Submit, opens new tab to send a message on WhatsApp. Demo implementation sends the message to the user's number but in js it is easy to update the related variable to a target number for actual usage. The whatsapp implementation is just for demo, the purpose of the repo is to work with custom form validation.

## Next features

1- Include RegEx validation for each type of expected input. Example: validate form only when the email field contains a string that looks like a real email. Same for the others

2- Handle line breaks in message box. Currently they are eaten by the target url. Implement one of the following: Replace line breaks for a simpe space. Or block line breaks while typing. Or translate the input's line breaks into actual line breaks on the final message sent.


## Known Issue

This repo is mostly for the javascript, so it is currently not responsive to small screen sizes. Might update the css in the future.
