import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay'
import Spinner from './Spinner';

class App extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {latitude: null, longitude: null, errorMessage: ''};
    // }
    state = {latitude: null, longitude: null, errorMessage: ''};
    componentDidMount(){
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({latitude: position.coords.latitude, longitude:  position.coords.longitude})
            , err => 
                this.setState({errorMessage: err.message})
        );
    }

    renderContent() {
        if (this.state.errorMessage &&!this.state.latitude ){ 
            return <div> Error: {this.state.errorMessage} </div>
        }

        if(!this.state.errorMessage && this.state.latitude ){
            return (
            <SeasonDisplay latitude={this.state.latitude} longitude= {this.state.longitude}/>
            );
        }

        return (
            <Spinner />
            
        );
      
    }

    render() {
      
        return (
            <div className="border red">
            {this.renderContent()}
            </div>
        );
            
        
    }
}

ReactDOM.render(
    <App/>, document.querySelector('#root')
);
