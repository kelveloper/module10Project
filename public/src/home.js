function getTotalBooksCount(books) {
  //console.log(books);
  let total = 0;
  books.forEach((book) => {
    total++;
  })
  return total;

}

function getTotalAccountsCount(accounts) {
  let total = 0;
  accounts.forEach((accout) => {
    total++;
  })
  return total;
}

function getBooksBorrowedCount(books) {
  return books.reduce((total,book) => {
    return book.borrows.filter(borrow => 
       !borrow.returned).length + total
   },0);
 }

function getMostCommonGenres(books) {
  const bookGenres = books.map((book) => book.genre);
  const result = [];

  bookGenres.map((genre) => {
    const genreLocation = result.findIndex((element) => element.name === genre);
    if (genreLocation >= 0) {
      result[genreLocation].count++;
    } 
    else {
      result.push({ name: genre, count: 1 });
    }
  });
 // console.log(result);
  
  //put sort before slice, or will fail case!
  return result.sort((a, b) => b.count - a.count).slice(0,5);
}

function getMostPopularBooks(books) {
  const result = books.map((book) => ({
    name: book.title,
    count: book.borrows.length, }));
   
   return result.sort((a, b) => b.count - a.count).slice(0,5);
    //console.log(result);

}

function getMostPopularAuthors(books, authors) {
  let result = []
  authors.forEach((author)=> {
    const {name} = author; 
    let trueAuthor = { 
      name: `${name.first} ${name.last}`,
      count: 0
    };
    books.map((book) => {
      if(book.authorId === author.id) { //not authours, 'author' cause inside authors' forEach method
        trueAuthor.count += book.borrows.length;  //many times borrowed
      }
    });
    result.push(trueAuthor);
    });
   // console.log(result);
  //console.log(author);
  return result.sort((a, b) => b.count - a.count).slice(0, 5);
  //const result = books.filter((book) => )
  //console.log(trueAuthor);
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
