function findAuthorById(authors, id) {
 return authors.find((author) => author.id === id);
}

function findBookById(books, id) {
  return books.find((book) => book.id === id);
}

function partitionBooksByBorrowedStatus(books){
  let returnedBooks = [];
  let checkedOutBooks = [];
  //loop over book array 
books.forEach((book) => { const possibleReturn = book.borrows[0].returned;
   if(possibleReturn === false) {
     checkedOutBooks.push(book); 
    //console.log(book);
   }
    else {
      //console.log(book);
      returnedBooks.push(book);
    }
});
  //combine both arrays
  return [checkedOutBooks,returnedBooks];
  
  

}

function getBorrowersForBook(book, accounts) {
  //book is an object, however, borrows is an array
  //deconstructe
  const { borrows } = book;
  //console.log(borrows);

  const borrowers = borrows.map(({ id, returned })=> {
    // find account that matches the borrower's ID
    const account = accounts.find(account => account.id === id);

    // return the matching account, along with the `returned` info
    return {
      ...account,
      returned,
    };
  });
//limit the list to ten borrowers
  return borrowers.slice(0, 10);
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
