import React, { Component } from 'react';
import { ReCaptcha } from 'react-recaptcha-v3'

class Recaptcha extends Component {

  updateToken = () => {
    // you will get a new token in verifyCallback
    this.recaptcha.execute();
  }

  render() {
    return (
      <div>
        <ReCaptcha
            ref={ref => this.recaptcha = ref}
            sitekey="6LdWODIaAAAAAMdOsIw0f1SgKXCsBOlQL7EsiiCg"
            action='create_email'
        />
      </div>
    );
  };
};

export default Recaptcha;