import React,{Component} from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import { withRouter } from 'react-router-dom';
 class Header extends React.PureComponent
{
    openaboutus(){
        this.props.props.history.push('/aboutus')
    }
    openCategory() {
        // this.props.onSubmit(item)
        this.props.props.history.push('/category')
    }
    openBlogs(){
        this.props.props.history.push('/blogs')
    }
    openHome(){
        this.props.props.history.push('/')
    }
render(){
console.log("props in header"+this.props.visible);
console.log(this.props);


return(
    

<div className={this.props.visible ? "headerDivAfter" : "headerDiv"}>
{/* <AppBar className={this.state.header?"headerDivAfter" : "headerDiv"} position='fixed'> */}
<Toolbar className='toolBar' >
    <div style={{ color: "#ffffff" }}>
        Title Here
    </div>
    <div className='newHeader'>
        <div>
            <div onClick={()=>this.openCategory()}
                className='Home'
            >Places</div>
            <div className='homeBottom'>

            </div>
        </div>
        <div>
            <div onClick={()=>this.openHome()}
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
            <div onClick={()=>this.openaboutus()}
                className='contact'
            >About us</div>
            <div className='homeBottom'>

            </div>
        </div>
        <div>
            <div onClick={()=>this.openBlogs()}
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

) 
}
}
export default Header