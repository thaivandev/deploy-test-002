module.exports = {


  friendlyName: 'Send sms',


  description: '',


  inputs: {
    toMobileNumber: {
      type: 'string',
      example: '+918401428558',
      description: 'The mobile number to whom we need to send sms',
      required: true
    },
    msgBody: {
      type: 'string',
      example: 'Message here',
      description: 'The mobile number to whom we need to send sms',
      required: true
    }
  },


  exits: {

    success: {
      description: 'All done.',
    },

  },


  fn: async function (inputs, exits) {
    // TODO
    // console.log("helper: send-sms: ", inputs);
    // Twilio Credentials
    // To set up environmental variables, see http://twil.io/secure
    const accountSid = 'AC5677ef179bfd66c916b35f379aecd78f';
    const authToken = 'eaa607bf5dd7295a23caa162f4047ec2';

    // chưa run được cần upgare account bên tưikio

    // require the Twilio module and create a REST client
    const client = require('twilio')(accountSid, authToken);
    console.log('client', client);

    client.messages
      .create({
        to: '+840396780093',
        from: inputs.toMobileNumber,
        body: inputs.msgBody,
      }, (err, message) => {
        if (err) {
          return exits.success({
            status: true,
            message: 'error send message',
            data: err
          });
        }

        return exits.success({
          status: true,
          message: 'sms send success',
          data: message
        });

      });
  }
};

