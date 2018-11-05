export const SEARCH_INPUT = 'SEARCH_INPUT'
export const CLEAR_SEARCH = 'CLEAR_SEARCH'

export const searchInput = search => ({
  type: SEARCH_INPUT,
  search,
})

export const clearSearch = () => ({
  type: CLEAR_SEARCH,
})
