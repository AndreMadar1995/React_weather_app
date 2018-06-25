import React, {Component} from 'react';

export default class GoogleMap extends Component{
// gets called right after component is created
  componentDidMount(){
    // creating an embeded map
    new google.maps.Map(this.refs.map,{
      zoom: 12,
      center: {
        lat:this.props.lat,
        lng:this.props.lon
      }
    })
  }
   render(){
     return(
       // this.refs.map anywhere in this component
       <div ref="map" />
     );
   }
}
