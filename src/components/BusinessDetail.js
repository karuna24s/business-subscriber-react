import React from 'react';

const BusinessDetail = (props) => {

  function handleClick(e, url) {
    let url = 'https://young-temple-44207.herokuapp.com/businesses/' + {props.business.id} + '/subscribers?token=617604678'
    e.preventDefault();
    {this.url}
  }
  return (

    <div>
      // let url = 'https://young-temple-44207.herokuapp.com/businesses/:business_id/subscribers?token=617604678'
      <a onClick={this.handleClick} >{props.business.name} </a>
    </div>
  )
}

export default BusinessDetail
