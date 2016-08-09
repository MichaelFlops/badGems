// using an ES6 transpiler, like babel
import { Router, Route, Link } from 'react-router'

import React from 'react'

export default React.createClass({
  render() {
    return (
      <div className="navBar">
        <Link to="/"><h3>All the broken Rubys</h3></Link>
        <ul>
          <li><Link to="/details"> Detailed view test</Link></li>
        </ul>
      </div>
    )
  }
})
