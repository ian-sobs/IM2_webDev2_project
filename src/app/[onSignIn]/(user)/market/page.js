// import { cookies } from 'next/headers'
import Card from '@/components/listOfCards/card'
import user  from '@/components/getUsrCookie'
import cardsDisplay from '@/components/listOfCards/cardsDisplay';

export default function Page(){
    // const userCookie = cookies().get("userCredentials")
    // const user = JSON.parse(userCookie.value)
    // console.log("userCookie", user) 
    console.log("inMarket", user())
    class Book {
        constructor(title, author, ratings, imgSrc, price) {
          this.title = title;
          this.author = author;
          this.ratings = ratings;
          this.imgSrc = imgSrc;
          this.price = price;
        }
    }

    const books = [
        new Book("The Lord of the Rings", "J.R.R. Tolkien", 4.8, "https://cdn.kobo.com/book-images/4929af70-799a-4e4f-a274-9ed39580a532/353/569/90/False/the-lord-of-the-rings-the-fellowship-of-the-ring-the-two-towers-the-return-of-the-king.jpg", 799),
        new Book("The Hobbit", "J.R.R. Tolkien", 4.8, "https://m.media-amazon.com/images/I/710+HcoP38L._SY466_.jpg", 499),
        new Book("Mockingjay", "Suzanne Collins", 4.6, "https://cdn.kobo.com/book-images/0b5c9521-159f-4500-b937-c9688bbcbe3d/353/569/90/False/mockingjay-the-final-book-of-the-hunger-games.jpg", 499),
        new Book("Chainsaw Man vol. 1", "Tatsuki Fujimoto", 4.8, "https://cdn.kobo.com/book-images/9b90e481-4b79-47e1-a919-3d0a46752177/353/569/90/False/chainsaw-man-vol-1.jpg", 599),
    ]

    return (
    <>
    {/* space-x-9 space-y-9 */}
        <section className="min-h-screen bg-white pt-[25px] px-9 sm:px-11 md:px-14 lg:px-20">
            <div className="flex flex-wrap justify-center lg:justify-between alg:justify-center alg2:justify-between">
                
                {books.map((book, index)=><Card key={index} details={book}></Card>)}

                {/* <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card> */}
            </div>
        </section>
    
    </>
    )
}