export function serviceAdd ( data ) {
    return {type: 'ADD_TASK', payload: data}
}

export function serviceRemove ( id ) {
    return {type: 'REMOVE_TASK', payload: id};
}

export function serviceReset () {
    return {type: 'RESET_TASK'}
}

export function serviceChange (data) {
    return {type: 'CHANGE_TASK', payload: data}
}