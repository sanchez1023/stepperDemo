import React, { Component } from 'react';
import { Carousel } from 'react-responsive-carousel';

import { connect } from 'react-redux';
import Header from './header';
import Footer from './footer';
import { Button } from '@material-ui/core';
const mapStateToProps = state => ({ selected: state.selectedTour });
const mapDispatchToProps = dispatch => ({

    // onUnload: () =>
    //     dispatch({ type: LOGIN_PAGE_UNLOADED })
});

class Information extends Component {
    constructor(){
        super()
        this.state={
            header:false
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

    scrollFnction() {
        var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        var scrolled = (winScroll / height) * 100;
        console.log(" srolled" + scrolled + "%");
        var scrolledValue = scrolled + "%"
         document.getElementById("myBar").style.width = scrolled + "%";
    }
    render() {
        window.addEventListener('scroll', this.listenToScroll)
        window.onscroll = () => this.scrollFnction()
        console.log("value selected" + JSON.stringify(this.props.selected));

        return (
            <div>
                 <Header visible={this.state.header} props={this.props}/>
                <div>
                      <Carousel swipeable={true}  autoPlay={true} showThumbs={false}
                    dynamicHeight={true}
                > 
                
                <div>
                    <img src={'http://4navigators.com/assets/images/9-2000x1333.jpg'} />
                
                </div>
                <div>
                    <img src={require('./assets/sikkim.jpg')} />
                
                </div>
                <div>
                    <img src={'http://4navigators.com/assets/images/2-2000x1417.jpg'} />
                
                </div>

 </Carousel>
                </div>


                {this.props.selected.employee_name}
                <div class="progress-container">
                        <div class="progress-bar" id="myBar"></div>
                    </div>
                <div>

                    <div className='stickyDiv'>
                    <div className='leftDiv'>
                        <div className='stickyHeader'>
                            Know about the place
                        </div>
                        </div>
                        <div className='rightDiv'>
                        <div className='informationDiv'>
            {                /**
             * dgdggjdjdfjdj
             * dfdf
             * dgf
             * dfd
             * f
             *
             */}
                            
                        {/* I have been all around internet about the dynamic routing of React.
                        But I couldn't find anything which explains how it works and how it is
                        different than static routing in every single sense. */}
                    Uttarakhand, also known as "Devbhumi" or the "Land Of God" with its scintillating 
                    natural beauty, fascinating snow-clad mountains, fresh and pure water and air,
                     and an aura of Godliness, attracts people from all over the world all though the year.

                                            </div>
                                            </div>
                    </div>
                    <div className='stickyDiv'>
                    <div className='leftDiv'>
                        <div className='stickyHeader'>
                            Your Itenary
                        </div>
                        </div>
                        <div className='rightDiv'>
                        <div className='informationDiv'>
                            
                        I have been all around internet about the dynamic routing of React.
                        But I couldn't find anything which explains how it works and how it is
                        different than static routing in every single sense.
                        
                        I understood it pretty well how the things go when we want to 
                        render something in the same page using React-Route.
                        
                        My question is how does it work when a whole new pageYOffset
                                                                  </div>
                        <div >
                        <Button className='getmoreDetails'
      href="https://drive.google.com/file/d/0B8Gd2efsq_8KR1p5MGZadld2X0hnQjlxSkxkVmZfQ3NYc1Jz/view"
      color="transparent"
      target="_blank"
      download>Get More Details
 </Button>
                        </div>
                                                                  </div>
                    </div>
                    <div className='stickyDiv'>
                        <div className='leftDiv'>
                        <div className='stickyHeader'>
                            What's include
                        </div>
                        </div>
                        <div className='informationDiv'>
                            
                        I have been all around internet about the dynamic routing of React.
                        But I couldn't find anything which explains how it works and how it is
                        different than static routing in every single sense.
                        
                        I understood it pretty well how the things go when we want to 
                        render something in the same page using React-Route.
                        
                        My question is how does it work when a whole new pag
                                            </div>
                    </div>
                    <div className='stickyDiv'>
                    <div className='leftDiv'>
                        <div className='stickyHeader'>
                            Not included
                        </div>
                        </div>
                        <div className='rightDiv'>
                        <div className='informationDiv'>
                            
                        I have been all around internet about the dynamic routing of React.
                        But I couldn't find anything which explains how it works and how it is
                        different than static routing in every single sense.
                        
                        I understood it pretty well how the things go when we want to 
                        render something in the same page using React-Route.
                        
                        My question is how does it work when a whole new pag
                                            </div>
                                            </div>
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Information)