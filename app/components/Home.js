// @flow
import React, { Component } from 'react'
import BookCard from './BookCard'
import SearchInput, { createFilter } from 'react-search-input'

const KEYS_TO_FILTERS = ['title']

export default class Home extends Component {
  props: {
    books: ObservableArray<any>
  }

  state: {
    searchTerm: string
  }

  state = {
    searchTerm: ''
  }

  searchUpdated(term) {
    this.setState({ searchTerm: term })
  }

  render() {
    const books = this.props.books || [];
    const filteredBooks = books.filter(createFilter(this.state.searchTerm, KEYS_TO_FILTERS))

    return (
      <div className="overflow-y-auto h-100 ph3">
        <header className="tc pv4 pv5-ns">
          <h1 className="f2">Kintrospect</h1>
          <SearchInput className="search-input center mw-100 f4" style={{ width: 700 }} onChange={(term) => this.searchUpdated(term)} />
        </header>
        <div>
          <BookCard books={filteredBooks} />
        </div>
      </div>
    );
  }
}
