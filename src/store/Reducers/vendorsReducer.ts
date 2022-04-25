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
                data: action.payload.result,
                loading: false,
                page: action.payload.page + 1
            }

        case 'VENDORS_LOADING':
            return {
                ...state,
                loading: true
            }

        default:
            return {
                ...state
            };
    }
}