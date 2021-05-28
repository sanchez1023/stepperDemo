import React, { Component } from 'react';
import Header from './header';
import Iframe from 'react-iframe'

export default class Aboutus extends Component {
    constructor(props) {
        super(props)
        this.state = {
            header: false,

        }
    }
    listenToScroll = () => {
        var theposition = window.pageYOffset
        console.log("value of scroll===>" + theposition);
        if (theposition >= 500) {
            console.log("in scroll 23");

            this.setState({
                header: true
            })
        }
        else {
            this.setState({
                header: false
            })
        }

    }
    componentDidMount() {
        window.addEventListener('scroll', this.listenToScroll)
    }
    render() {

        return (
            <div>
                <div className='backgroundImage' >
                   <div>

                   </div>
                </div>
                <Header visible={this.state.header} props={this.props} />
                <div>
                    <div className='aboutDiv'>
                        About us
                </div>
                    <div className='contentDiv'>
                        A creative mind is motivated by the desire to achieve,
                        not by the desire to beat other!

    Our journey began in 2017,we a bunch of engineers would always find
    our way to getaway from our hectic engineering life .
    As we were a group of four we used to do our
    Weekend getaways on our personal vehicle it self ,
    but for longer commutes we have to either relay on public transport or
     merge with some other groups as there was no tourism
     company to focus on a small number of the group including people less than 10.
    As we were frequent travellers we had made contacts and would also provide
    bookings for other groups as well. Then we decided to make it big as we arranged an interstate
     trip to goa and all the bookings and itinerary was done by us on the basis of people
     who have travelled to goa without any service provider. We took 10 people from our
      engineering college and it turned out to become a hit and great start to our
       professional journey. After that, there was no looking back as then we went on to arrange an
      industrial visit of our college in last of engineering to the northeast with
      the count around 90 people.
     After that, we came to know that tourism is a great sector to boon and there
      were competitors but not with affordable prices or any payment methods.
     we group of motivated and travel experience engineers have come
      to live the voyage and navigate travel enthusiast to travel and count on us,
       as our tag line suggests "You travel , we count".
                    </div>
                    <div style={{ height: 500, color: 'black' }}>
                        heading two
                    </div>
                </div>
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
            </div>
        )
    }
}