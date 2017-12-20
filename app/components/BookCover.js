// @flow
import React from 'react';
import { observer } from 'mobx-react'

// http://stackoverflow.com/questions/33886418/how-to-get-book-cover-image-url-using-isbn
// http://images.amazon.com/images/P/PASTE_ISBN_NUMBER_HERE.01.20TRZZZZ.jpg
// http://helpful.knobs-dials.com/index.php/Amazon_notes#General

import { Book } from '../stores/Book'

@observer
export default class BookCover extends React.Component {

  state: {
    isSelected: boolean
  }

  state = {
    isSelected: false
  }
  
  props: {
    book: Book,
    onBookSelection: (book) => void,
    onBookDeselection: (book) => void
  }

  clickedCover() {
    const { onBookSelection, onBookDeselection, book } = this.props
    this.setState({
      isSelected: !this.state.isSelected
    }, () => {
      if (this.state.isSelected) {
        onBookSelection(book)
      } else {
        onBookDeselection(book)
      }
    })
  }

  isSelected() {
    return this.state.isSelected
  }

  render() {
    const { book } = this.props
    const { title, isKindleBook, asin } = book
    const { isSelected } = this.state

    let cover
    if (isKindleBook) {
      cover = (
        <img alt="book cover" className="img db w-100 aspect-ratio--object" src={`http://images.amazon.com/images/P/${asin}`} />)
    } else {
      cover = (
        <h1 className="f5 fw4 gray mt0">
          {title}
        </h1>)
    }

    return (
      <div key={asin} className="w-20-l w-third-m w-500 pa3-ns pb3 f5 v-top flex">
        <div className={`bg-white flex flex-column shadow-1 w-100 ${(isSelected) ? 'ba bw1 blue' : ''}`}>
          <button className="aspect-ratio aspect-ratio--5x8" onClick={() => this.clickedCover()}>
            {cover}
          </button>
        </div>
      </div>
    )
  }
}
