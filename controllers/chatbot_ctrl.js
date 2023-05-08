const { request, response } = require("express");

const chatbotRes = async (req = request, res = response) => {

  const { message } = req.body;

  const sdk = require('api')('@writesonic/v2.2#4enbxztlcbti48j');

  sdk.auth(`5626884f-f75f-46cc-8f5f-9a8aba73321b`);
  
  sdk.chatsonic_V2BusinessContentChatsonic_post({
    enable_google_results: 'false',
    enable_memory: true,
    input_text: message
  }, {engine: 'premium', language: 'es'})
    .then(({ data }) => res.json({
      status: 'SUCCESS',
      data
    }))
    .catch(err => res.status(400).json({
      status: 'ERROR',
      err
    }));
}

module.exports = {
  chatbotRes
}