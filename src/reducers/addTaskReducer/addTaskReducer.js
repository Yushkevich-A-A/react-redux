const initialState = {
    content: '', 
    price: '',
    id: '',
 }

function addTaskReducer( state = initialState, action) {
    switch (action.type) {
        case 'CHANGE_TASK': 
            const { content, price, id } = action.payload;
            return {...state, content: content, price: price, id: id};
        case 'RESET_TASK':
            return {...state, content: '', price: '', id: ''};
        default:
            return state;
    }
}

export default addTaskReducer;