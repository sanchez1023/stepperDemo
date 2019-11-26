import React, { Component } from 'react';
import { AppBar } from '@material-ui/core';
import Toolbar from '@material-ui/core/Toolbar';
import Axios from 'axios';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Masonry from 'react-masonry-component';
import Image from 'react-shimmer';
import notification from '../src/notification'
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

                <AppBar style={{ backgroundColor: "white" }} position='sticky'>
                    <Toolbar className='toolBar' >
                        <div style={{ color: "#000000" }}>
                            Title Here
                        </div>
                        <div className='newHeader'>
                            <div
                                className='Home'
                            >Home</div>
                            <div
                                className='contact'
                            >Contact us</div>
                            <div
                                className='Blogs'
                            >Blogs</div>

                        </div>
                    </Toolbar>
                </AppBar>
                <Carousel swipeable={true} showThumbs={false}
                    dynamicHeight={true}
                >
                    <div>
                        <img src={require('../src/assets/kerla.webp')}
                        />
                        {/* <p className="legend">Legend 1</p> */}
                    </div>
                    <div>
                        <img src={require('../src/assets/pataya.webp')} />
                        {/* <p className="legend">Legend 2</p> */}
                    </div>

                </Carousel>
                <button onClick={askForPermissioToReceiveNotifications} >
                    firebase
    </button>
                {/* <video id="background-video"  autoPlay loop muted>
                    <source src={this.state.videoURL} type="video/mp4" />
                    <source src={this.state.videoURL} type="video/ogg" />
                    Your browser does not support the video tag.
            </video> */}
                <div className='mainDiv'>
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
            </div>
        );
    }
}

export default Test;