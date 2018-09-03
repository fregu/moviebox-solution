export const SEARCH = { type: 'SEARCH' }
export const SET_SEARCH_RESULT = { type: 'SET_SEARCH_RESULT' }

export const search = query => ({ ...SEARCH, query })
export const setSearchResults = data => ({ ...SET_SEARCH_RESULT, data })
