import {
    ADD_SERVICE,
    REMOVE_SERVICE,
    EDIT_SERVICE,
    CHECK_SERVICE
} from './actionTypes'


let serviceCount = 0;

export const addService = (service) => ({
    type: ADD_SERVICE,
    id: serviceCount++,
    service: service
});

export const removeService = (id) => ({
    type: REMOVE_SERVICE,
    id: id,
});

export const editService = (id) => ({
    type: EDIT_SERVICE,
    id: id,
});

export const checkService = (id) => ({
    type: CHECK_SERVICE,
    id: id
});