import $ from 'jquery';
import BaresoilClient from 'baresoil-client';

const bsOpt = {};
if (process.env.DEVELOPMENT) {
  bsOpt.serverUrl = 'http://localhost:8086/__bs__/live';
}
const client = new BaresoilClient(bsOpt);

$(document).ready(function() {
  $('#send-button').on('click', () => {
    const feedback = $('#input-box').val().replace(/^\s*|\s*$/mg, '');
    const email = $('#contact-me').val().replace(/\s*/g, '');
    if (!feedback.length && !email.length) {
      return;
    }

    $('#send-button').hide();
    $('#sending-spinner').show().text('Sending feedback...');

    client.run('send_feedback', {
      email: email,
      feedback: feedback,
    }, (err) => {
      if (err) {
        $('#sending-spinner').text('Could not send feedback: ' + err);
      } else {
        $('#sending-spinner').text('Feedback sent, thank you!');
      }
      setTimeout(() => {
        $('#sending-spinner').hide();
        $('#send-button').fadeIn();
      }, 2000);

      client.reset();
    });
  });
});
