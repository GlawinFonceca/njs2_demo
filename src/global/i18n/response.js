const RESPONSE = {
  INVALID_USER: {
    responseCode: 1001, responseMessage: {
      "en": "Invalid user data"
    }
  },
  CUSTOM_RESPONSE: {
    responseCode: 1002,
    responseMessage: {
      "en": "Custom response",
      "es": "Respuesta personalizada", //reponse in Spanish language
      "ar": "استجابة مخصصة" //response in arabic
    }
  },
  SUCCESS: {
    responseCode: 1002, responseMessage: {
      "en": "Successfull"
    }
  },
  CUSTOM_RESPONSE: {
    responseCode: 1002, responseMessage: {
      "en": "Custom response"
    }
  }
};

module.exports.RESPONSE = RESPONSE;
