const palindromeReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_PALINDROME':
      let listPalindrome = [...state];
      listPalindrome.unshift(action.data);
      return listPalindrome;
    default:
      return state;
  }
}

export default palindromeReducer;