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
    temp.bookData = bookData

    console.log("temp in admin books", temp)

    for (const fieldName of Object.keys(returnData)){
        if(!returnData[fieldName].isValid()){
            console.log("CANT INSERT A NEW BOOK")
            return Response.json(temp)
        }
    }

    const poolPromise = pool.promise()
    const conn = await poolPromise.getConnection({multipleStatements: true})

    let bookInsertedID

    const [result, fields] = await conn.execute('UPDATE table_name SET column1 = value1, column2 = value2, ...WHERE condition', [bookData["bookTitle"], bookData["bookDesc"], imgSrc, parseFloat(parseFloat(bookData["bookPrice"]).toFixed(2)), 0, bookData["bookAuthors"]])
    console.log(result)
    
    bookInsertedID = result.insertId

    //Instead of updating the genres associated with the book to edit, delete the genres associated with the
    //book and then iteratively insert the new genres

    //for loop below iteratively inserts the genres for the book
    for(const genreID of bookData["genreIDs"]){
        await conn.execute('INSERT INTO book_genre_relation (bookID, genreID) VALUES (?, ?)', [bookInsertedID, genreID])

        insertGenreID.push(result.insertId)
        insertGenreID.push(genreID)
    }

    poolPromise.releaseConnection(conn)

    return Response.json(temp)
}