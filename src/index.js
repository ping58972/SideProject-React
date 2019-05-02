import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {latitude: "null"};
        //Or this.state = {};
        

        window.navigator.geolocation.getCurrentPosition(
            position =>{ this.setState({latitude: position.coords.latitude, longitude:  position.coords.longitude})}
            , err => {
                this.setState({errorMessage: err.message});
            }
        );
    }
    render() {
      
        
            if (this.state.errorMessage &&!this.state.latitude ){ 
                return <div> Error: {this.state.errorMessage} </div>
            }
            if(!this.state.errorMessage && this.state.latitude && this.state.longitude){
                return (
                <div>
                <div> Latitude: {this.state.latitude}</div>
                <div>longitude: {this.state.longitude} </div>
                </div>
                );
            }
            return (
                <div>Loading...</div>
            );
          
        
    }
}

ReactDOM.render(
    <App/>, document.querySelector('#root')
);
