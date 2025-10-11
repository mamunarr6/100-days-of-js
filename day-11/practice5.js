function favouriteBook(book=["Js Book"]){
    let books = [];
    for(const bk of book){
        books.push(bk)
    }
    return "My favourite book = " + books;
}
// console.log(favouriteBook(["Math","English","Bangla"]));