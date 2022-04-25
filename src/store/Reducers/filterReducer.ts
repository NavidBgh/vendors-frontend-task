const initialState: any = {
    filter: [],
    sort: ''
};

export const filterReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case 'FILTER_UPDATE':
            return {
                ...state,
                filter: action.payload
            }

        case 'SORT_SET':
            return {
                ...state,
                sort: action.payload
            }

        default:
            return {
                ...state
            };
    }
}