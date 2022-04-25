import { getVendorsAPI } from "../../utils/services/vendors"

export const getAllVendors = (query: string = '', page: number = 0) => async (dispatch: any) => {
    const result = await getVendorsAPI(query, page);
    dispatch({ type: 'VENDORS_GET', payload: { result, page } });
}

export const setSort = (sortValue: string = '') => (dispatch: any) => {
    dispatch({ type: 'SORT_SET', payload: sortValue });
    dispatch({ type: 'VENDORS_LOADING', payload: sortValue });
}