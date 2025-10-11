function favouriteBook(book=["Js Book"]){
    let books = [];
    for(const bk of book){
        books.push(bk)
    }
    return "My favourite book = " + books;
}
// console.log(favouriteBook(["Math","English","Bangla"]));
function pureSalary(salaryTax={salary:50000,tax:10}){
    const {salary,tax} = salaryTax;
    const taxAmount= (tax/100)*salary;
    const getSalary = salary - taxAmount;
    return getSalary;
}

const object = {salary:70000,tax:11};
// console.log(pureSalary());