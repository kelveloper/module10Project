function findAccountById(accounts, id) {
  // 'accounts' = an array of account objects
  // 'id' = string 
   return accounts.find((idName) => idName.id === id);
}

function sortAccountsByLastName(accounts) {
  //sort alphabetically by LAST name
return accounts.sort((lastNameA, lastNameB) => lastNameA.name.last > lastNameB.name.last ? 1 : -1);
}

function getTotalNumberOfBorrows(account, books) {
 //console.log(books);
 // console.log(account.id);
 let total = 0;
 //loop twice for another array inside the array
    books.forEach(book => book.borrows.forEach(bookId=> {
      if(bookId.id === account.id) total++;
    } ));
    return total;
}

function getBooksPossessedByAccount(account, books, authors) {
  //return an array of book objects AND author info, checked out from the givenUser
let result = [];
//search for account that checked in book
const bookMatched = books.forEach(book => book.borrows.map(borrow=> {
  if(borrow.returned === false && account.id === borrow.id) result.push(book);
})); 
//console.log(result);

//match book with authorId and return both to a new array
result.forEach(book => {
const authorMatch = authors.find(author => author.id === book.authorId);
 book['author'] = authorMatch;
});
//console.log(result);
return result;


}


module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
