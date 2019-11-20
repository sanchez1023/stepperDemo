import React, { Component } from 'react';
import { AppBar } from '@material-ui/core';
import Toolbar from '@material-ui/core/Toolbar';
import Axios from 'axios';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Masonry from 'react-masonry-component';
import Image from 'react-shimmer';
import Spinner from './Spinner'
class Test extends Component {
    constructor() {
        super()
        this.state = {
            allValues: [],
            opacity: true
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
            this.setState({
                opacity: false
            }, 2000)
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

                <AppBar style={{ backgroundColor: "white" }} position='fixed'>
                    <Toolbar >
                        <div style={{ color: "#000000" }}>
                            Title Here
                        </div>
                        <div>
                            <div  style={{ color: "#000000" }}>Home</div>
                            <div  style={{ color: "#000000" }}>contact us</div>
                            <div  style={{ color: "#000000" }}>Blogs</div>

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
                <div className='mainDiv'>
                    <Masonry>
                        <Image src={require('../src/assets/manali.jpg')}


                            className={effect} style={{ height: 250 }} />
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