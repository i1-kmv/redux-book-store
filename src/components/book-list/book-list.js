import React, {Component} from "react"
import BookListItem from "../book-list-item"
import './book-list.css'
import {connect} from 'react-redux'
import withBookstoreService from "../hoc"
import {fetchBooks} from "../../actions"
import compose from "../../utils";
import Spinner from "../spinner";
import ErrorIndicator from "../error-indicator";


class BooksList extends Component {

    componentDidMount() {
       this.props.fetchBooks()
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

const mapDispatchToProps =  (dispatch,  {bookstoreService}) => {
    return {
        fetchBooks: fetchBooks(bookstoreService, dispatch)
    }
}

const mapStateToProps = ({books, loading, error}) => {
    return {books, loading, error}
}

export default compose(
    withBookstoreService(),
    connect(mapStateToProps, mapDispatchToProps)
)(BooksList)
