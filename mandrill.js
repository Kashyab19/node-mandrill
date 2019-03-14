require('dotenv').config();
const mandrill = require('node-mandrill')(process.env.MANDRIL_KEY);
//send an e-mail
// From addres should be signed or u will get an response with status as rejected
mandrill('/messages/send', {
    message: {
        to: [{ email: process.env.TO_MAIL, name:process.env.TO_NAME }],
        from_email: process.env.FROM_EMAIL,
        subject: "Hey, what's up?",
        text: "Hello, I sent this message using mandrill."
    }
}, function (error, response) {
        //uh oh, there was an error
        if (error) console.log(JSON.stringify(error));

        //everything's good, lets see what mandrill said
        else console.log(response);
    });