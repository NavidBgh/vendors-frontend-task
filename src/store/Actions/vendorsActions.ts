import { getVendorsAPI } from "../../utils/services/vendors"

export const getAllVendors = (query: string = '', page: number = 1) => async (dispatch: any) => {
    dispatch({ type: 'VENDORS_LOADING' });
    const result = await getVendorsAPI(query, page);
    dispatch({ type: 'VENDORS_GET', payload: result });
}

export const setSort = (sortValue: string = '') => (dispatch: any) => {
    dispatch({ type: 'SORT_SET', payload: sortValue });
}