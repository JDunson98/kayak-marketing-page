import React from 'react';

const ContactForm = () => {
    return(
        <div className="body-container">
            <div>
                <h3 className='content-title'>Contact Us</h3>
                <p className='content-text'>Need to contact us? Fill out the form below!</p>
                <form>
                    <label for='firstName'>
                        <h4>Name</h4>
                        <input className='form-input' type='text' placeholder='First Name' />
                    </label>
                    <label>
                        <input className='form-input' type='text' placeholder='Last Name' />
                    </label>
                    <label>
                        <h4>Email</h4>
                        <input className='form-input' type='email' placeholder='Email' />
                    </label>
                    <label>
                        <h4>Message</h4>
                        <textarea className='text-area' type='textarea' placeholder='Message' />
                    </label>
                    <br/>
                    <button className='footer-button' type='submit'>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default ContactForm;