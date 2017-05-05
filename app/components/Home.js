// @flow
import React, { Component } from 'react'
import BookCard from './BookCard'
import Crawler from './Crawler'

export default class Home extends Component {
  render() {
    return (
      <div>
        <header className="tc pv4 pv5-ns">
          <h1 className="f5 f4-ns fw6 mid-gray">Kintrospect</h1>
          <Crawler />
        </header>
        <BookCard />
      </div>
    );
  }
}
