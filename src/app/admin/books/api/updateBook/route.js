import pool from '@/dbConn'
import VldtMssg from '@/components/validMssg'

export async function POST(request) {
    const data = await request.formData()
    const fieldNames = data.keys()
    let baseImgPath = '/bookPhotos/'
    let imgSrc
    let bookData = {}
    let returnData = {}
    let temp = {}

    let insertStatement = ''
    let insertGenreID = []

    const bookID = parseInt(data.get('bookID'))
    
    bookData['bookImgFile'] = data.get('bookImgFile')
    returnData['bookImgFile'] = new VldtMssg(-1, ['Enter a URL to the image or upload an image', 'Invalid filetype', 'Image must have an aspect ratio of...'])
    data.delete('bookImgFile')

    bookData['bookImgLink'] = data.get('bookImgLink')
    returnData['bookImgLink'] = new VldtMssg(-1, ['Enter a URL to the image or upload an image', 'URL is invalid'])
    data.delete('bookImgLink')

    bookData['genreIDs'] = JSON.parse(data.get('genreIDs'))
    returnData['genreIDs'] = new VldtMssg(-1, ['Choose at least 1 genre'])
    data.delete('genreIDs')

    for(const fieldName of data.keys()){
        bookData[fieldName] = data.get(fieldName)
    }
    console.log('bookData', bookData)    

    if(bookData['bookImgFile'] == 'undefined' && !bookData['bookImgLink']){
        returnData['bookImgFile'].invalidField(0)
        returnData['bookImgLink'].invalidField(0)
    }
    else if(bookData['bookImgLink']){
        imgSrc = `${bookData['bookImgLink']}`
    }
    else{
        imgSrc = `${baseImgPath}${bookData['bookImgFile'].name}`
    }
    console.log("imgSrc", imgSrc)
    
    console.log("bookData['genreIDs'].length", bookData['genreIDs'].length)
    if(bookData['genreIDs'].length == 0){
        returnData['genreIDs'].invalidField(0)
    }

    for(const fieldName of data.keys()){
        returnData[fieldName] = new VldtMssg(-1, ['This field must not be empty'])  
    }

    for(const fieldName of data.keys()){
        if(bookData[fieldName] == ""){
            returnData[fieldName].invalidField(0)
        }
    }

    console.log('returnData', returnData)


    temp.vldtInfo = returnData
    temp.vldtInfo.display = false
    temp.bookData = bookData

    console.log("temp in admin books", temp)

    // for (const fieldName of Object.keys(returnData)){
    //     if(!returnData[fieldName].isValid()){
    //         console.log("CANT INSERT A NEW BOOK")
    //         return Response.json(temp)
    //     }
    // }

    const poolPromise = pool.promise()
    const conn = await poolPromise.getConnection({multipleStatements: true})

    let bookInsertedID

    const [result, fields] = await conn.execute('UPDATE book SET title = ?, description = ?, img=?, priceUSD=?, author=? WHERE bookID=?', [bookData["bookTitle"], bookData["bookDesc"], imgSrc, parseFloat(parseFloat(bookData["bookPrice"]).toFixed(2)), bookData["bookAuthors"], bookID])
    console.log(result)
    
    bookInsertedID = result.insertId

    //Instead of updating the genres associated with the book to edit, delete the genres associated with the
    //book and then iteratively insert the new genres
    await conn.execute('DELETE FROM book_genre_relation WHERE bookID=?', [bookID])
    //for loop below iteratively inserts the genres for the book
    for(const genreID of bookData["genreIDs"]){
        await conn.execute('INSERT INTO book_genre_relation (bookID, genreID) VALUES (?, ?)', [bookID, genreID])

        insertGenreID.push(result.insertId)
        insertGenreID.push(genreID)
    }

    const [newInfo, newInfoFields] = await conn.execute("SELECT bk.bookID AS 'ID', bk.title AS 'Title', GROUP_CONCAT(gnr.name ORDER BY bk.bookID SEPARATOR ', ') AS 'Genre(s)', bk.description AS 'Description', bk.img AS 'Image', bk.priceUSD AS 'Price (USD)', bk.avgRating AS 'Avrg. Rating', bk.author AS 'Author/s' FROM ((book bk LEFT JOIN book_genre_relation bgr ON bk.bookID = bgr.bookID) LEFT JOIN genre gnr ON gnr.genreID = bgr.genreID) WHERE bk.bookID=? GROUP BY bk.bookID", [bookID])
    const [bookDisplay] = newInfo

    temp.bookDisplay = bookDisplay
    temp.vldtInfo.display = true

    poolPromise.releaseConnection(conn)

    return Response.json(temp)
}