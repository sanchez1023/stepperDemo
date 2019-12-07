import React, { Component } from 'react';

import { connect } from 'react-redux';
const mapStateToProps = state => ({ selected: state.selectedTour });
const mapDispatchToProps = dispatch => ({

    // onUnload: () =>
    //     dispatch({ type: LOGIN_PAGE_UNLOADED })
});

class Information extends Component {
    scrollFnction() {
        var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        var scrolled = (winScroll / height) * 100;
        console.log(" srolled" + scrolled + "%");
        var scrolledValue = scrolled + "%"
         document.getElementById("myBar").style.width = scrolled + "%";
    }
    render() {
        window.onscroll = () => this.scrollFnction()
        console.log("value selected" + JSON.stringify(this.props.selected));

        return (
            <div>
                this is Information

                {this.props.selected.employee_name}
                <div class="progress-container">
                        <div class="progress-bar" id="myBar"></div>
                    </div>
                <div>

                    <div className='stickyDiv'>
                    <div className='leftDiv'>
                        <div className='stickyHeader'>
                            A
                        </div>
                        </div>
                        <div>
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
                        
                        I understood it pretty well how the things go when we want to 
                        render something in the same page using React-Route.
                        
                        My question is how does it work when a whole new pag
                                            </div>
                    </div>
                    <div className='stickyDiv'>
                    <div className='leftDiv'>
                        <div className='stickyHeader'>
                            B
                        </div>
                        </div>
                        <div>
                            
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
                            C
                        </div>
                        </div>
                        <div>
                            
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
                            D
                        </div>
                        </div>
                        <div>
                            
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
        )
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Information)