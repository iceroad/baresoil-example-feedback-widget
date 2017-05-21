const sendEmail = require('./sendEmail');

module.exports = function(fnArg, cb) {
  if (typeof fnArg !== 'object') {
    return cb(new Error('Invalid feedback.'));
  }

  const subject = (fnArg.feedback || '').substr(0, 40);
  const feedbackText = `
Remote IP: ${this.baseConnection.remoteAddress}

Feedback:
==================================================================
${fnArg.feedback}
==================================================================

Email:
==================================================================
${fnArg.email}
==================================================================`;

  sendEmail(feedbackText, subject, cb);
};
