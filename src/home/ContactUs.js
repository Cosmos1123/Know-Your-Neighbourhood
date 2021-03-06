import React, { Component } from 'react'
import'./Contact.css'


export class ContactUs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      description: 'The content of a textarea goes in the value attribute'
    };
  }
  render() {
    return (
                        <section>

                    <div class="listing-hero">
                      <div class="hero-heading">
                          <div class="hero-large">Contact Us.</div>
                          <div class="hero-text"> <i>Got any Questions? Feel free to ask or visit our KYN page </i> </div>       
                        </div>
                    </div>

                  <div class="container-contact">
                      <div class="wrap-contact">

                        <form name="contact" class="contact-form validate-form" method="post" action= "contact-form-handler.php">

                          <div class="wrap-input validate-input" data-validate="Please enter your name">
                            <input class="input" type="text" name="name" placeholder="Full Name"></input>
                          </div>

                          <div class="wrap-input validate-input" data-validate = "Please enter your email">
                            <input class="input" type="text" name="email" placeholder="E-mail"></input>
                          </div>

                          <div class="wrap-input validate-input" data-validate = "Please enter your message">
                            <textarea class="input" type="text" name="message" placeholder="Your Message"></textarea>
                          </div>

                          <div class="container-contact-form-btn">
                            <button type="submit" class="contact-form-btn">
                              <span>Send</span>
                            </button>
                          </div>

                          <div class="grid-container">
                            <div class="item1 left-align"><i class="fa fa-lg fa-map-marker-alt"></i> 4517 Washington Ave, Manchester, Kentucky 39495</div>  
                            <div class="item4 right-align"><i class="fa fa-lg fa-phone"></i> (123) 456-7890<br></br>(123) 456-7890</div>

                        </div>

                        </form>

                      </div>
                    </div>
                  </section>

      
    );
  }
}

 
     
   






export default ContactUs
