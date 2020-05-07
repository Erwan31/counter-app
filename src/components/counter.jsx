import React, { Component } from "react";

class Counter extends Component {
 
 /*   componentDidUpdate(previousProps, prevState) {
        console.log( 'Prev Props', previousProps);
        console.log( 'Prev State', prevState);
        if(previousProps.counter.value !== this.props.counter.value){
            //Ajax call and get new Data from the server
        }
    }*/
 /*   state = {
        count: this.props.counter.value,
        id: this.props._id
    };
    */

/*     constructor() {
        super();
        this.handleIncrement = this.handleIncrement.bind(this);
    } */

    styles = {
        fontWeight: 'bold',
        fontSize: 50
    }

    // binding
    /*
    handleIncrement = (prdt) => {
   //     const { count } = this.state;
    //    count++;
        console.log(prdt, this);
        this.setState({ count: this.state.count +1 });
    }
    */

    render() { 
        //const prdt = 0;

       // console.log( this.props);

        return (
            <div className="row">
                <div className="col-1">
                    <span style = { {fontSizes: 30 }  } className={this.getBadgeClasses()}> {this.formatCount()} </span>
                </div>
                <div className="col">
                    <button onClick={ () => this.props.onIncrement(this.props.counter)} className="btn btn-secondary btn-sm"> + </button>

                    { this.formatCount() === 0 ? (<button className="btn btn-secondary btn-sm m-2" disabled> - </button>) 
                    : (<button onClick={ () => this.props.onDecrement(this.props.counter)} className="btn btn-secondary btn-sm m-2"> - </button>)}

                    <button onClick= { () => this.props.onDelete(this.props.counter.id)} className="btn btn-danger btn-sm m-2">Delete</button>
                </div>
            </div> 
        );
    }

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += this.props.counter.value === 0 ? "warning" : "primary";
        return classes;
    }

    formatCount() {
        const  count = this.props.counter.value;
        console.log(count);
        return count === 0 ? 0 : count;
    }
}



export default Counter;
