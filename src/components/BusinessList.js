import React, { Component } from 'react';
import BusinessDetail from './BusinessDetail'
class BusinessList extends Component {
  state = {
    businesses: []
  }

  componentDidMount() {
    let url = 'https://young-temple-44207.herokuapp.com/businesses?token=617604678'
    fetch(url)
    .then(res => res.json())
    .then(data => {
      this.setState({businesses: data.businesses})
    })
  }

  renderBusinesses() {
    return this.state.businesses.map(business => {
      return <BusinessDetail business={business}/>
    })
  }
  render() {
    return(
      <div>
        {this.renderBusinesses()}
      </div>
    )
  }
}


export default BusinessList
