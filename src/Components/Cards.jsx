import React, {Component} from "react";
import Card from "./CardUI";
// import img-name from "../assets/img-src" 
// do same thing for all

class Cards extends Component{
    constructor(props){
        super(props);
        this.state={ };
    }
    render(){
        return(
        <>
            <div className="container-fluid d-flex justify-content-center">
                <div className="col-md-4">
                    <Card title="Tops"/>
                </div>
                <div className="col-md-4">
                    <Card title="Bottoms"/>
                </div>
                <div className="col-md-4">
                    <Card title="Dresses"/>
                </div>
            </div>
            <div className="container-fluid d-flex justify-content-center">
                <div className="col-md-4">
                    <Card title="Accessories"/>
                </div>
                <div className="col-md-4">
                    <Card title="Kids"/>
                </div>
                <div className="col-md-4">
                    <Card title="Women"/>
                </div>
            </div>
        </>
        )
    }
}

export default Cards;