import React from 'react';

const About = () => {
    return(
        <div className='body-container'>
            <div className='content-container'>
                <div className='test-content'>
                    <h3 className='content-title'>About Us</h3>
                    <p className='content-text'>
                        We are a family owned business local to the Cherokee County area. 
                        We have served the community for 6 years strong and strive to continue to do so.
                    </p>
                    <br/>
                    <p className='content-text'>
                        We are open to the public Friday through Sunday to the public. Monday through Thursday
                        are available by reservation only.
                    </p>
                    <br/>
                    <p className='content-text'>
                        You can make a make a reservation or check for availability by calling us at (256) 341-3768 or 
                        by <a className='link-text' href='#'>sending us a message</a>
                    </p>
                </div>
                <div>
                    <img className='image' src='https://noc.com/wp-content/uploads/2020/09/chattahoochee-sit-on-top-girls-2-600x513.jpg' alt=''/>
                </div>
            </div>
        </div>
    )
}

export default About;