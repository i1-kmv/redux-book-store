import React, {Component} from "react"
import BookListItem from "../book-list-item"
import './book-list.css'
import {connect} from 'react-redux'
import withBookstoreService from "../hoc"
import {booksLoaded} from "../../actions"
import compose from "../../utils";


class BooksList extends Component {

    componentDidMount() {
        const {bookstoreService} = this.props
        const data = bookstoreService.getBooks()
        console.log(data)

        this.props.booksLoaded(data)
    }

    render() {
        const {books} = this.props
        return (
            <ul className="book-list">
                {
                    books.map((book) => {
                        return (
                            <li key={book.id}><BookListItem book={book}/></li>
                        )
                    })
                }
            </ul>

        )
    }
}

const mapDispatchToProps =  {
    booksLoaded
}

const mapStateToProps = ({books}) => {
    return {books}
}

export default compose(
    withBookstoreService(),
    connect(mapStateToProps, mapDispatchToProps)
)(BooksList)
