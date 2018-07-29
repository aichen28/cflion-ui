import {
    ADD_SERVICE,
    REMOVE_SERVICE,
    EDIT_SERVICE,
    CHECK_SERVICE
} from './actionTypes'


export default (state = [], action) => {
    switch (action.type) {
        case ADD_SERVICE: {
            return [
                {
                    id: action.id,
                    service: action.service,
                },
                ...state
            ]
        }
        case REMOVE_SERVICE: {
            return state.filter((service) => {
                return service.id !== action.id
            })
        }
        case EDIT_SERVICE: {
            return state.map((ele) => {
                if (ele.id === action.id) {
                    return {
                        ...ele,
                        service: ele.service
                    }
                } else {
                    return ele;
                }
            })
        }
        case CHECK_SERVICE: {
            return state.filter((service) => {
                return service.id === action.id
            })
        }
        default: {
            return state;
        }
    }
}