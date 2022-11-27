import React, {Component} from "react";
import Model from "./model";
// import Model_view from "./Pages/model";
// import img-name from "../assets/img-src" 
// do same thing for all

class Models extends Component{
    constructor(props){
        super(props);
        this.state={ };
    }
    render(){
        return(
        <>
        <div>
        <Model src="C:\Users\anves\OneDrive\Documents\GitHub\A-and-A-shopping\src\Components\3D_models\assets\dress1.glb"/>
        </div>
        </>
        )
    }
}

export default Models;