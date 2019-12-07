import React, { Component } from 'react';
import { AppBar, TextField } from '@material-ui/core';
import Toolbar from '@material-ui/core/Toolbar';
import Axios from 'axios';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Masonry from 'react-masonry-component';
import Image from 'react-shimmer';
import notification from '../src/notification'
import Iframe from 'react-iframe'
import { Menu, Dropdown, Button } from 'antd';
import { connect } from 'react-redux';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';

import { askForPermissioToReceiveNotifications } from './push-notification';
import { CATEGORY_SELECT } from './constants/actionTypes';
const mapStateToProps = state => {
    console.log(state);


    return {}
};
const mapDispatchToProps = dispatch => ({

    onSubmit: data =>
        dispatch({ type: CATEGORY_SELECT, payload: data }),

    // onUnload: () =>
    //     dispatch({ type: LOGIN_PAGE_UNLOADED })
});

// import "node_modules/video-react/dist/video-react.css";

class Test extends Component {
    constructor() {
        super()
        this.state = {
            allValues: [],
            opacity: true,
            Enquiry: false,
            header: false,

            videoURL: 'http://www.sample-videos.com/video/mp4/720/big_buck_bunny_720p_1mb.mp4'

        }
    }

    listenToScroll = () => {
        var theposition = window.pageYOffset
        console.log("value of scroll===>" + theposition);
        if (theposition >= 480) {
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
        Axios.get('http://dummy.restapiexample.com/api/v1/employees').then((success) => {
            console.log("response of json " + JSON.stringify(success));
            this.setState({
                allValues: success.data.splice(0, 6)
            })
        }).catch((err) => {
            console.log("error");

        })
        setTimeout(() => {
            this.handleOpacity()
        }, 2000)

    }
    handleOpacity() {
        this.setState({
            opacity: false
        })
    }
    openCategory(item) {
        this.props.onSubmit(item)
        this.props.history.push('/category')
    }
    scrollFnction() {
        var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        var scrolled = (winScroll / height) * 100;


        console.log(" srolled" + scrolled + "%");
        var scrolledValue = scrolled + "%"
        document.getElementById("myBar").style.width = scrolled + "%";
    }
    handleEnquiry() {
        this.setState({
            Enquiry: !this.state.Enquiry
        })
    }
    render() {
        window.onscroll = () => this.scrollFnction()
        const allEmployee = this.state.allValues.map((item) => {
            console.log("emmm" + item.employee_name);

            return (<div className='tours' onClick={() => this.openCategory(item)}>
                <img src={require('./assets/norway.webp')} className="tourImages" />
                <div className='overlay'>
                    <div className='tourText'>
                        {item.employee_name}

                    </div>
                </div>
                <div>
                    Title:{item.employee_name}
                </div>
            </div>
            )
        })
        console.log("this.state.header===>" + this.state.header);


        // var effect = this.state.header ? 
        return (
            <div>
                <div>
                    <img src={require('./assets/background.jpg')} style={{ height: 500, width: '100%' }} />
                </div>
                <div className={this.state.header ? "headerDivAfter" : "headerDiv"}>
                    {/* <AppBar className={this.state.header?"headerDivAfter" : "headerDiv"} position='fixed'> */}
                    <Toolbar className='toolBar' >
                        <div style={{ color: "#ffffff" }}>
                            Title Here
                        </div>
                        <div className='newHeader'>
                            <div>
                                <div
                                    className='Home'
                                >Places</div>
                                <div className='homeBottom'>

                                </div>
                            </div>
                            <div>
                                <div
                                    className='Home'
                                >Home
                                 
                                        
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        <span></span>

                                    
                                </div>
                                <div className='homeBottom'>

                                </div>
                            </div>
                            <div>
                                <div
                                    className='contact'
                                >Contact us</div>
                                <div className='homeBottom'>

                                </div>
                            </div>
                            <div>
                                <div
                                    className='Blogs'
                                >Blogs</div>
                                <div className='homeBottom'>

                                </div>
                            </div>

                        </div>
                    </Toolbar>
                    <div class="progress-container">
                        <div class="progress-bar" id="myBar"></div>
                    </div>
                </div>
                {/* </AppBar> */}
                {/* <Carousel swipeable={true} showThumbs={false}
                    dynamicHeight={true}
                > */}
                {/* <div>
                    <img src={require('../src/assets/kerla.webp')}
                    />
                    
                </div> */}
                {/* <div>
                    <img src={require('../src/assets/pataya.webp')} />
                
                </div> */}

                {/* </Carousel> */}
                <button onClick={askForPermissioToReceiveNotifications} >
                    firebase
    </button>
                {/* <video id="background-video"  autoPlay loop muted>
                    <source src={this.state.videoURL} type="video/mp4" />
                    <source src={this.state.videoURL} type="video/ogg" />
                    Your browser does not support the video tag.
            </video> */}
                <div className='mainDiv'>
                    <div className='exploreDiv'>
                        <div className='exploreBlock'>
                            <div>
                                <img src={require('./assets/adventure.jpg')} style={{ height: 80, width: 120, borderRadius: 5 }} />
                            </div>
                            <div style={{ marginLeft: 5 }}>
                                Adventure
                            </div>
                        </div>
                        <div className='exploreBlock'>
                            <div>
                                <img src={require('./assets/adventure.jpg')} style={{ height: 75, width: 100, borderRadius: 5 }} />
                            </div>
                            <div style={{ marginLeft: 5 }}>
                                Adventure
                            </div>
                        </div>
                        {/* <div className='exploreBlock'>
                            <div>
                                <img src={require('./assets/adventure.jpg')} style={{ height: 75, width: 100, borderRadius: 5 }} />
                            </div>
                            <div style={{ marginLeft: 5 }}>
                                Adventure
                            </div> */}
                    </div>
                </div>
                <div>
<div className='chooseDiv'>
    <div className='whyHeader'>
    Why Choose Us
   
    </div>
    <div className='whySummary'>
    Lighting Fast, Collaborative,Suppotive Team...
    </div>
    <div className='expanionImage'>
        <div >
        <ExpansionPanel>
        <ExpansionPanelSummary
       
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className='whyHeader' > 1. Value For money</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography  className='whySummary'>
          Enjoy More,pay Less with 0% EMI OPTIONS.

          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel>
        <ExpansionPanelSummary
         
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography  className='whyHeader'>2. Fast Booking</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography  className='whySummary'>
          Book Fast ,enjoy more with hassel free cancelations.


          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel>
        <ExpansionPanelSummary
         
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
 <Typography className='whyHeader'>3. Diverse Destinations
</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
        <Typography  className='whySummary'>
          Bored with same place,choose us for something different..



          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel>
        <ExpansionPanelSummary
         
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
 <Typography className='whyHeader' >4. Affordable Journeys
</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
        <Typography  className='whySummary'>
        We strive to make the world accessible for each and every one!


          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
     
        </div>
        <div>
           <img src={require('./assets/team.jpg')} className="teamImage"/> 
        </div>
    </div>
  
</div>
                    
                </div>
                <div>
                    <div className='tourScroll'>
                        {
                            allEmployee
                        }




                    </div>
                     </div>






                {/* <Masonry>
                        <img src={require('../src/assets/manali.jpg')}


                            className={effect} />
                        <img src={require('../src/assets/kerla.webp')} className={effect} style={{ height: 250 }} />

                        <img src={require('../src/assets/pataya.webp')} className={effect} />

                        <img src={require('../src/assets/madhya.webp')} className={effect} />
                        <img src={require('../src/assets/rajasthan.jpg')} className={effect} />

                        <img src={require('../src/assets/thailand.jpg')} className={effect} />


                    </Masonry> */}
                {this.state.Enquiry ?
                    <div className='formDiv'>
                        <div className='formHeader'>  Quick Enquiry details </div>
                        <div className='form'>

                            <TextField
                                variant='outlined'
                                label="Name"
                                placeholder='Enter name'
                                fullWidth={true}
                            />






                            <TextField
                                variant='outlined'
                                label="Email id"
                                placeholder='Enter Email id'
                                fullWidth={true}
                            />


                            <TextField
                                rows={5}
                                rowsMax={5}
                                variant='outlined'
                                fullWidth={true}
                                placeholder='Enter Message here'
                                multiline={true}

                            >

                            </TextField>
                            <div className='submitButton'>
                                Submit
                        </div>
                        </div>
                    </div>
                    :
                    null
                }

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

                {!this.state.Enquiry ?
                    <div onClick={() => this.handleEnquiry()} className='enquiryDiv'>
                        <img src={require('./assets/enqiry.png')} style={{ height: 20, width: 20 }} />
                        <div className='enquiryText'>Quick Enquiry</div>
                    </div>
                    :
                    <div onClick={() => this.handleEnquiry()} className='closeDiv'>
                        <img src={require('./assets/close.png')} className='closeIcon' />
                    </div>
                }


            </div >
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Test);