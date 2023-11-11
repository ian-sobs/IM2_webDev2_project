// import { cookies } from 'next/headers'
import Card from '@/components/listOfCards/card'
import user  from '@/components/getUsrCookie'
import CardsDisplay from '@/components/listOfCards/cardsDisplay';
// import cardsDisplay from '@/components/listOfCards/cardsDisplay';

export default function Page(){
    // const userCookie = cookies().get("userCredentials")
    // const user = JSON.parse(userCookie.value)
    // console.log("userCookie", user) 
    const userCookie = user()

    const sectionGridStyle = {
        allWidth: "min-h-screen  bg-white pt-[25px] pb-[20px] grid place-items-center gap-3",
        mobile:"grid-cols-2 px-9",
        sm:"sm:px-11 sm:grid-cols-2",
        md:"md:px-14 md:grid-cols-3",
        lg:"lg:px-20 lg:grid-cols-4 ",
        xl:"xl:px-22 xl:grid-cols-4"
    }

    // const books = [
    //     new Book("The Lord of the Rings", "J.R.R. Tolkien", 4.8, "https://cdn.kobo.com/book-images/4929af70-799a-4e4f-a274-9ed39580a532/353/569/90/False/the-lord-of-the-rings-the-fellowship-of-the-ring-the-two-towers-the-return-of-the-king.jpg", 799),
    //     new Book("The Hobbit", "J.R.R. Tolkien", 4.8, "https://m.media-amazon.com/images/I/710+HcoP38L._SY466_.jpg", 499),
    //     new Book("Mockingjay", "Suzanne Collins", 4.6, "https://cdn.kobo.com/book-images/0b5c9521-159f-4500-b937-c9688bbcbe3d/353/569/90/False/mockingjay-the-final-book-of-the-hunger-games.jpg", 499),
    //     new Book("Chainsaw Man vol. 1", "Tatsuki Fujimoto", 4.8, "https://cdn.kobo.com/book-images/9b90e481-4b79-47e1-a919-3d0a46752177/353/569/90/False/chainsaw-man-vol-1.jpg", 599),
    //     new Book("Do Androids Dream of Electric Sheep?", "Philip K. Dick", 4.7, "https://m.media-amazon.com/images/I/71uN5sUHXiL._SY466_.jpg", 399),
    //     new Book("The Lord of the Rings", "J.R.R. Tolkien", 4.8, "https://cdn.kobo.com/book-images/4929af70-799a-4e4f-a274-9ed39580a532/353/569/90/False/the-lord-of-the-rings-the-fellowship-of-the-ring-the-two-towers-the-return-of-the-king.jpg", 799),
    //     new Book("The Hobbit", "J.R.R. Tolkien", 4.8, "https://m.media-amazon.com/images/I/710+HcoP38L._SY466_.jpg", 499),
    //     new Book("Mockingjay", "Suzanne Collins", 4.6, "https://cdn.kobo.com/book-images/0b5c9521-159f-4500-b937-c9688bbcbe3d/353/569/90/False/mockingjay-the-final-book-of-the-hunger-games.jpg", 499),
    //     new Book("Chainsaw Man vol. 1", "Tatsuki Fujimoto", 4.8, "https://cdn.kobo.com/book-images/9b90e481-4b79-47e1-a919-3d0a46752177/353/569/90/False/chainsaw-man-vol-1.jpg", 599),
    //     new Book("Do Androids Dream of Electric Sheep?", "Philip K. Dick", 4.7, "https://m.media-amazon.com/images/I/71uN5sUHXiL._SY466_.jpg", 399),
    //     new Book("The Lord of the Rings", "J.R.R. Tolkien", 4.8, "https://cdn.kobo.com/book-images/4929af70-799a-4e4f-a274-9ed39580a532/353/569/90/False/the-lord-of-the-rings-the-fellowship-of-the-ring-the-two-towers-the-return-of-the-king.jpg", 799),
    //     new Book("The Hobbit", "J.R.R. Tolkien", 4.8, "https://m.media-amazon.com/images/I/710+HcoP38L._SY466_.jpg", 499),
    //     new Book("Mockingjay", "Suzanne Collins", 4.6, "https://cdn.kobo.com/book-images/0b5c9521-159f-4500-b937-c9688bbcbe3d/353/569/90/False/mockingjay-the-final-book-of-the-hunger-games.jpg", 499),
    //     new Book("Chainsaw Man vol. 1", "Tatsuki Fujimoto", 4.8, "https://cdn.kobo.com/book-images/9b90e481-4b79-47e1-a919-3d0a46752177/353/569/90/False/chainsaw-man-vol-1.jpg", 599),
    //     new Book("Do Androids Dream of Electric Sheep?", "Philip K. Dick", 4.7, "https://m.media-amazon.com/images/I/71uN5sUHXiL._SY466_.jpg", 399),
    //     new Book("The Lord of the Rings", "J.R.R. Tolkien", 4.8, "https://cdn.kobo.com/book-images/4929af70-799a-4e4f-a274-9ed39580a532/353/569/90/False/the-lord-of-the-rings-the-fellowship-of-the-ring-the-two-towers-the-return-of-the-king.jpg", 799),
    //     new Book("The Hobbit", "J.R.R. Tolkien", 4.8, "https://m.media-amazon.com/images/I/710+HcoP38L._SY466_.jpg", 499),
    //     new Book("Mockingjay", "Suzanne Collins", 4.6, "https://cdn.kobo.com/book-images/0b5c9521-159f-4500-b937-c9688bbcbe3d/353/569/90/False/mockingjay-the-final-book-of-the-hunger-games.jpg", 499),
    //     new Book("Chainsaw Man vol. 1", "Tatsuki Fujimoto", 4.8, "https://cdn.kobo.com/book-images/9b90e481-4b79-47e1-a919-3d0a46752177/353/569/90/False/chainsaw-man-vol-1.jpg", 599),
    //     new Book("Do Androids Dream of Electric Sheep?", "Philip K. Dick", 4.7, "/bookPhotos/lotr.jpeg", 399),
    // ]

    return (
    <>
    {/* space-x-9 space-y-9 */}
        <section name="sectionGrid" className={`${sectionGridStyle.allWidth} ${sectionGridStyle.mobile} ${sectionGridStyle.sm} ${sectionGridStyle.md} ${sectionGridStyle.lg} ${sectionGridStyle.xl}`}>
            
                    {/* {books.map((book, index)=><Card key={index} details={book}></Card>)} */}
                
            <CardsDisplay currency={userCookie["crrncyCode"]} tabStyles="col-span-2 md:col-span-3 lg:col-span-4"></CardsDisplay>

        </section>
    
    </>
    )
}