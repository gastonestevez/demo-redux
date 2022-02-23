const initialState = {
    value: 0
}

const COUNTER_UP = 'COUNTER_UP'
const COUNTER_DOWN = 'COUNTER_DOWN'
const COUNTER_RESET = 'COUNTER_RESET'
const COUNTER_SET_VALUE = 'COUNTER_SET_VALUE'

export const counterUp = () => {
    return {
        type: COUNTER_UP
    }
}

export const counterDown = () => {
    return {
        type: COUNTER_DOWN
    }
}

export const counterReset = () => {
    return {
        type: COUNTER_RESET
    }
}

export const counterSetValue = (newCounterValue) => {
    return {
        type: COUNTER_SET_VALUE,
        payload: newCounterValue
    }
}

const reducer = (state = initialState, action) => {
    console.log({
        state,
        action
    })
    switch(action.type) {
        case COUNTER_UP: {
            return {
                ...state,
                value: state.value + 1
            }
        }
        case COUNTER_DOWN: {
            return {
                ...state,
                value: state.value - 1
            }
        }
        case COUNTER_RESET: {
            return {
                ...state,
                value: initialState.value
            }
        }
        case COUNTER_SET_VALUE: {
            return {
                ...state,
                value: action.payload
            }
        }
        default: {
            return state
        }
    }
}

export default reducer