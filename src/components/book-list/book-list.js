import React, {Component} from "react"
import BookListItem from "../book-list-item"
import './book-list.css'
import {connect} from 'react-redux'
import withBookstoreService from "../hoc"
import {booksLoaded} from "../../actions"
import compose from "../../utils";
import Spinner from "../spinner";


class BooksList extends Component {

    componentDidMount() {
        const {bookstoreService, booksLoaded} = this.props
        bookstoreService.getBooks()
            .then((data) => booksLoaded(data))

    }

    render() {
        const {books, loading} = this.props

        if (loading) {
           return <Spinner/>
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
    booksLoaded
}

const mapStateToProps = ({books, loading}) => {
    return {books, loading}
}

export default compose(
    withBookstoreService(),
    connect(mapStateToProps, mapDispatchToProps)
)(BooksList)
