import React, {Component} from "react"
import BookListItem from "../book-list-item"
import './book-list.css'
import {connect} from 'react-redux'
import withBookstoreService from "../hoc"
import {booksLoaded, booksRequested, booksError} from "../../actions"
import compose from "../../utils";
import Spinner from "../spinner";
import ErrorIndicator from "../error-indicator";


class BooksList extends Component {

    componentDidMount() {
        const {
            bookstoreService,
            booksLoaded,
            booksRequested,
            booksError} = this.props

        booksRequested()
        bookstoreService.getBooks()
            .then((data) => booksLoaded(data))
            .catch((err) => booksError(err))

    }

    render() {
        const {books, loading, error} = this.props

        if (loading) {
           return <Spinner/>
        }

        if (error) {
            return <ErrorIndicator/>
        }

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
    booksLoaded,
    booksRequested,
    booksError
}

const mapStateToProps = ({books, loading, error}) => {
    return {books, loading, error}
}

export default compose(
    withBookstoreService(),
    connect(mapStateToProps, mapDispatchToProps)
)(BooksList)
