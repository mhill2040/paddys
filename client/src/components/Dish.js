import React from 'react';
import axios from 'axios';

class Dish extends React.Component {
  state = { dish: {} }

  componentDidMount() {
    axios.get(`/api/menu/${this.props.match.params.id}`)
      .then( res => this.setState({ product: res.data }) )
  }

    render() {
      let { dish: { dish, description, pricet }} = this.state;
      return (
        <div>
          <h1>{dish}</h1>
          <h3>{description}</h3>
          <h3>${price}</h3>
        </div>
    )
  }
}

export default Dish;
