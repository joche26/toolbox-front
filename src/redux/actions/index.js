export const addPalindrome = data => ({
  type: 'ADD_PALINDROME',
  data
})

export const setVisibilityFilter = filter => ({
  type: 'SET_VISIBILITY_FILTER',
  filter
})

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_PALINDROME: 'SHOW_PALINDROME',
  SHOW_IS_NOT_PALINDROME: 'SHOW_IS_NOT_PALINDROME'
}