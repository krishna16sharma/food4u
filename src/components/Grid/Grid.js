import React from 'react';
import history from '../../history';
import './Grid.css';

class Grid extends React.Component{
    constructor(props){
        super(props);
        this.onCardClick=this.onCardClick.bind(this);
        this.state = {
            product:''
        }
    }

    onCardClick=(product)=>{
        //console.log(product)
        this.props.setProduct(product);
    }

    render(){
        return(
        <div className="zone red-bg grid-wrapper">
            <div className="box zone" onClick = {() => this.onCardClick('BC')}>
                <img src={require("./images/cereal1.png")} alt={"Breakfast & Cereal"}/>
                <div className="desc">Breakfast & Cereal</div>
            </div>
            <div className="box zone" onClick = {() => this.onCardClick('Canned')}>
                <img src={require("./images/canned.png")} alt={"Canned Food"}/>
                <div className="desc">Canned Food</div>
            </div>
            <div className="box zone" onClick = {() => this.onCardClick('Dairy')}>
                <img src={require("./images/dairy.png")} alt={"Dairy"}/>
                <div className="desc">Dairy</div>
            </div>
            <div className="box zone" onClick = {() => this.onCardClick('Frozen')}>
                <img src={require("./images/frozen.png")} alt="Frozen Food"/>
                <div className="desc">Frozen Food</div>
            </div>
            <div className="box zone" onClick = {() => this.onCardClick('Fruits')}>
                <img src={require("./images/fruits.png")} alt="Fruits"/>
                <div className="desc">Fruits</div>
            </div>
            <div className="box zone" onClick = {() => this.onCardClick('Grains')}>
                <img src={require("./images/grains.png")} alt="Grains"/>
                <div className="desc">Grains</div>
            </div>
            <div className="box zone" onClick = {() => this.onCardClick('Snacks')}>
                <img src={require("./images/Snacks.png")} alt="Snacks"/>
                <div className="desc">Snacks</div>
            </div>
            <div className="box zone" onClick = {() => this.onCardClick('Vegetable')}>
                <img src={require("./images/vegetable.png")} alt="Vegetables"/>
                <div className="desc">Vegetables</div>
            </div>
        </div>
    );}
}
export default Grid;
