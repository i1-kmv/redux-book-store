const initialState = {
    books: [

        {
            id: 1,
            title: 'Prodaction-Ready Microservices',
            author: 'Susan J. Fowler'
        },
        {
            id: 2,
            title: 'Realise It',
            author: 'Michael T. Ni'
        }
    ]
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'BOOKS_LOADED':
            return {
                books: action.payload
            }
        default:
            return state
    }

}

export default reducer