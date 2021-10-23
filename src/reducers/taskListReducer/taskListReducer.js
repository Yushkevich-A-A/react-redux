import { nanoid } from 'nanoid';

const initialState = [
    { id: nanoid(), content: 'Замена АКБ', price: 10000 },
    { id: nanoid(), content: 'Замена экрана', price: 20000 },
    { id: nanoid(), content: 'Замена ', price: 30000 },
]

function taskListReducer( state = initialState, action) {
    switch (action.type) {
        case 'ADD_TASK': 
            const { content, price, id } = action.payload;
            const existItem = initialState.findIndex( item => item.id === id)
            if (existItem !== -1) {
                const newState = [...state]
                newState[existItem] = {id: id, content: content, price: price};
                return newState;
            }
            return [...state, {id: nanoid(), content: content, price: price}];
        case 'REMOVE_TASK':
            const idItem  = action.payload;
            return state.filter( item => item.id !== idItem);
        default:
            return state;
    }
        
}

export default taskListReducer;

