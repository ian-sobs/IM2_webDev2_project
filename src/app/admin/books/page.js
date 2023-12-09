import adminPageStyle from '../adminPageStyle'
import TableFull from '../components/books/tableFull'
import pool from '@/dbConn'
import BookForm from '../components/books/bookForm'
import BookFormEmpty from '../components/books/bookForm_empty'

export default async function books(){

    const poolPromise = pool.promise()
    const conn = await poolPromise.getConnection()
    const [genres, dbFields] = await conn.execute("SELECT * FROM genre")
    const [rows, fields] = await conn.execute("SELECT bk.bookID AS 'DB Index', bk.title AS 'Dorm Room ID', bk.author AS 'Location', gnr.name AS 'Accomodation', bk.slots AS 'Slots left', bk.description AS 'Description', bk.img AS 'Image', bk.avgRating AS 'Avrg. Rating' FROM (book bk LEFT JOIN genre gnr ON gnr.genreID = bk.genreID)")
    
    let colNames
    
    if(rows.length > 0){
        colNames = Object.keys(rows[0])
    }

    console.log("genres", genres)
    const genreList = genres.map((genre)=>{
        return {
            name: genre.name,
            apiLink: `${genre.genreID}`,
            activeBgColor: 'bg-blue-500',
            activeTextColor: 'text-white'
        }
    })
    // const actions = [
    //    {
    //     name : 'All',
    //     apiLink :'Delete',
    //     activeBgColor: 'bg-rose-600',
    //     activeTextColor : 'text-white'
    //    },
    //    {
    //     name : 'Literature',
    //     apiLink :'Delete',
    //     activeBgColor: 'bg-rose-600',
    //     activeTextColor : 'text-white'
    //    }    
    // ]
    
    poolPromise.releaseConnection(conn)

    if(rows.length > 0){
        return(
            <>


                <section name="sectionGrid" className={`${adminPageStyle.allWidth} ${adminPageStyle.mobile} ${adminPageStyle.sm} ${adminPageStyle.md} ${adminPageStyle.lg} ${adminPageStyle.xl}`}>
                    
                    <TableFull genres={genres} genreList={genreList} caption='Table of all dorm rooms' colNames={colNames} rowsData={rows}></TableFull>
                    {/* <div className='bg-inherit h-20'></div>
                    {/* <button onClick={BookForm}></button> */}
                    {/*<BookForm genres={genres} className='text-slate-200 fixed bottom-7 left-14 bg-green-400 p-4 rounded-md font-semibold'> </BookForm>
                     */}
                </section>
            </>
        )
    }

    return(
        <>
            
            <section name="sectionGrid" className={`flex flex-row justify-center items-center ${adminPageStyle.allWidth} ${adminPageStyle.mobile} ${adminPageStyle.sm} ${adminPageStyle.md} ${adminPageStyle.lg} ${adminPageStyle.xl}`}>
                    <div className='text-slate-300 text-4xl '>

                    <h1 >No dorm rooms to show</h1>
                    </div>
                    <BookFormEmpty rowsData={rows} genres={genres} className='text-slate-200 fixed bottom-7 left-14 bg-green-400 p-4 rounded-md font-semibold'>Add a new book</BookFormEmpty>
            </section>
        </>
    )
}