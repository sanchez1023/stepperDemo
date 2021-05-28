import React, { Component } from 'react';
import Iframe from 'react-iframe'
export default class Footer extends Component {
    render() {
        return (
            < div className='footer' >
                <div>

                </div>
                <div className='addressIframe'>
                    <Iframe url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4299.5546616816455!2d72.9628860378745!3d19.167587908897474!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xa8c957a40c4d8de9!2sNew%20PMGP%20CHS!5e0!3m2!1sen!2sin!4v1566839777046!5m2!1sen!2sin"
                        width="100%"
                        height="100%"
                        id="myId"
                        className="myClassname"
                        display="initial"
                        position="relative" />
                </div>
            </div >

        )
    }
}