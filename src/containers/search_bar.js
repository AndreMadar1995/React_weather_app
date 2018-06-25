import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchWeather} from '../actions/index';

class SearchBar extends Component{
  constructor(props){
    super(props);

    this.state = {term: ''};

    // Binding context of onInputChange
    // second this refers to searchbar, has a function called onInputChange
    // Bind that function to this(SearchBar)
    // Replace onInputChange with this new bound instance of this function
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  // All dom event handlers take an event object
  onInputChange(event){
    this.setState({
      term: event.target.value
    });
  }

  onFormSubmit(event) {
    event.preventDefault();
    this.props.fetchWeather(this.state.term);
    this.setState({term: ''});

  }

  render(){
    return(
      // Controlled field, is a form element where the value of the input
      // is set by the state of our component
      <form onSubmit={this.onFormSubmit} className = "input-group">
          <input placeholder = "Get a five-day forcast in your favorite cities"
           className ="form-control"
           // What makes it a controlled component
           // first assign the value
           value ={this.state.term}
           // then whenever it changes call function
           onChange = {this.onInputChange}
           />
          <span className = "input-group-btn">
              <button type ="submit" className ="btn btn-secondary">Submit</button>
          </span>
      </form>
    );
  }
}

function mapDispatchToProps(dispatch){
  // Whenever an action is called/created (fetchWeather) it flows to reducers
  // and middleware
  return bindActionCreators({fetchWeather},dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);
