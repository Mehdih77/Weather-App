export const initialState = {
    oneWeather: [],
    allWeather: []
}

export function reducer(state,action) {
    switch (action.type) {
        case "GET_ONEWEATHER":
            return {
                ...state,
                oneWeather: action.payload
            }
        case "GET_ALLWEATHER":
            return {
                ...state,
                allWeather: action.payload
            }
        default: return state
    }
}