import React from "react"
import BooksList from "../book-list";




const HomePage = () => {
    return (
        <BooksList books={[
            {id: 1,
                title: 'Prodaction-Ready Microservices',
                author: 'Susan J. Fowler'},
            {id: 2,
                title: 'Realise It',
                author: 'Michael T. Ni'}
        ]}/>
    )

}

export default HomePage