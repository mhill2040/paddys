import React from 'react';
import { Redirect, Link } from 'react-router-dom';
import axios from 'axios';


class Menu extends React.Component {
  state = { menus: [] }
  componentDidMount() {
    axios.get('/api/menus')
    .then( res => this.setState({ menus: res.data }) )
  }

  render() {
    let { menus } = this.state;
      return (
        <ul>
          { menus.map( p =>
              <li key={p.id}>
                <Link to={`/menus/${p.id}`}>{p.dish}</Link>
              </li>
            )
          }
        </ul>
      )
  }
}

export default Menu;
