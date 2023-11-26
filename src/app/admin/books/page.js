import adminPageStyle from '../adminPageStyle'
import TableFull from '../components/tableFull'
import pool from '@/dbConn'

export default async function books(){
    // const adminPageStyle = {
    //     allWidth: "min-h-screen pt-[25px] bg-slate-100 pb-[20px] w-full ",
    //     mobile:" px-9 ",
    //     sm:" sm:px-11 ",
    //     md:" md:px-14 ",
    //     lg:" lg:px-20 ",
    //     xl:" xl:px-22 "
    // }
    const poolPromise = pool.promise()
    const conn = await poolPromise.getConnection()
    const [rows, fields] = await conn.execute("SELECT bk.bookID AS 'ID', bk.title AS 'Title', GROUP_CONCAT(gnr.name ORDER BY bk.bookID SEPARATOR ', ') AS 'Genre(s)', bk.description AS 'Description', bk.img AS 'Image source', bk.priceUSD AS 'Price (USD)', bk.avgRating AS 'Avrg. Rating', bk.author AS 'Author/s' FROM ((book bk LEFT JOIN book_genre_relation bgr ON bk.bookID = bgr.bookID) LEFT JOIN genre gnr ON gnr.genreID = bgr.genreID) GROUP BY bk.bookID")
    const colNames = Object.keys(rows[0])
    
    poolPromise.releaseConnection(conn)

    if(rows.length > 0){
        return(
            <>
                <section name="sectionGrid" className={`${adminPageStyle.allWidth} ${adminPageStyle.mobile} ${adminPageStyle.sm} ${adminPageStyle.md} ${adminPageStyle.lg} ${adminPageStyle.xl}`}>
                    <TableFull colNames={colNames} rowsData={rows}></TableFull>
                
                </section>
            </>
        )
    }

    return(
        <>
            
            <section name="sectionGrid" className={`flex flex-row justify-center items-center ${adminPageStyle.allWidth} ${adminPageStyle.mobile} ${adminPageStyle.sm} ${adminPageStyle.md} ${adminPageStyle.lg} ${adminPageStyle.xl}`}>
                    <div className='text-slate-300 text-4xl '>

                    <h1 >No books to show</h1>
                    </div>
                
            </section>
        </>
    )
}