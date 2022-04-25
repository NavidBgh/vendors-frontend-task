const initialState: any = {
    data: {},
    loading: true,
    page: 1
};

export const vendorsReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case 'VENDORS_GET':
            return {
                ...state,
                data: action.payload,
                loading: false
            }

        case 'VENDORS_LOADING':
            return {
                ...state,
                loading: true
            }

        case 'VENDORS_PAGINATION':
            return {
                ...state,
                page: state.page + 1
            }

        default:
            return {
                ...state
            };
    }
}