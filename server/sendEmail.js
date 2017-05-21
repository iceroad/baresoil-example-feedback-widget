const config = require('./config')
  , request = require('request')
  ;


module.exports = function sendEmail(contents, subject, cb) {
  var postData ={
    from: config.from_email,
    to: config.to_email,
    subject: subject,
    text: contents,
  };

  var requestParams = {
    auth: {
      username: 'api',
      password: config.mailgun_key,
    },
    form: postData,
    gzip: true,
  };

  return request.post(config.mailgun_url + '/messages', requestParams, function(err,
      httpResponse, body) {
    if (err || httpResponse.statusCode < 200 || httpResponse.statusCode > 299) {
      console.error(err);
      console.error(httpResponse.headers);
      console.error(body);
      return cb(new Error('Could not send feedback.'));
    }
    return cb();
  });
};
