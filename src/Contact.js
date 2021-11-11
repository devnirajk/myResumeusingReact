import React from 'react';


class Contact extends React.Component{
    render(){
        return(
            <div class="Contact_Box">

            <div>

            <form name="contactUs" method="POST">

            <input class="input_Box" type="text" name="name" placeholder="Your Name" required>
            </input>

            <input class="input_Box" type="number" name="phone" placeholder="Your Phone" required>
            </input>

            <input class="input_Box" type="email" name="email"  placeholder="Your Email" required>
            </input>

            <textarea class="text_Box"></textarea>

            <button> Send </button>

            </form>

            </div>

            </div>
        );
    }
}

export default Contact;