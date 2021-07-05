//Encapsulation

const Book = function(t,a){
    let title = t
    let author = a

    return {
        Summary:function(){
            console.log(`${title} written by ${author}`)
        }
    }
}
const book1 = new Book("hippie","Paul")
book1.Summary()

/**
 * title and the author are only visible inside the scope of the function Book and the method 
 * summary is visible to the caller of Book.
 * So the title and the author are encapsulated inside Book.
 */