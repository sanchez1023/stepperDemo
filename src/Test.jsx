import React, { Component } from 'react';
import { AppBar } from '@material-ui/core';
import Toolbar from '@material-ui/core/Toolbar';
import Axios from 'axios';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Masonry from 'react-masonry-component';
import Image from 'react-shimmer';
import notification from '../src/notification'
import Iframe from 'react-iframe'
import { askForPermissioToReceiveNotifications } from './push-notification';

// import "node_modules/video-react/dist/video-react.css";
import { Player, PosterImage } from 'video-react';
class Test extends Component {
    constructor() {
        super()
        this.state = {
            allValues: [],
            opacity: true,

            videoURL: 'http://www.sample-videos.com/video/mp4/720/big_buck_bunny_720p_1mb.mp4'

        }
    }
    componentDidMount() {
        Axios.get('http://dummy.restapiexample.com/api/v1/employees').then((success) => {
            console.log("response of json " + JSON.stringify(success));
            this.setState({
                allValues: success.data
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
    render() {
        const allEmployee = this.state.allValues.map((item) => {
            return (
                <div>{item.employee_name}</div>
            )
        })
        var effect = this.state.opacity ? 'imagesOpacity' : 'images'
        return (
            <div>
                <div>
                    <img src={require('./assets/background.jpg')} style={{ height: 500, width: '100%' }} />
                </div>
                <AppBar style={{ backgroundColor: '#ffffff00', top: 0 }} position='fixed'>
                    <Toolbar className='toolBar' >
                        <div style={{ color: "#ffffff" }}>
                            Title Here
                        </div>
                        <div className='newHeader'>
                            <div>
                                <div
                                    className='Home'
                                >Home</div>
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
                </AppBar>
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
                    <div>
                        <div>

                        </div>

                    </div>
                    <Masonry>
                        <img src={require('../src/assets/manali.jpg')}


                            className={effect} />
                        <img src={require('../src/assets/kerla.webp')} className={effect} style={{ height: 250 }} />

                        <img src={require('../src/assets/pataya.webp')} className={effect} />

                        <img src={require('../src/assets/madhya.webp')} className={effect} />
                        <img src={require('../src/assets/rajasthan.jpg')} className={effect} />

                        <img src={require('../src/assets/thailand.jpg')} className={effect} />


                    </Masonry>

                </div>
                <div className='footer'>
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
                </div>
            </div>
        );
    }
}

export default Test;