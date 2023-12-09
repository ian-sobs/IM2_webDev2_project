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


    console.log("formdata", data)
    
    bookData['bookImgFile'] = data.get('bookImgFile')
    returnData['bookImgFile'] = new VldtMssg(-1, ['Enter a URL to the image or upload an image', 'Invalid filetype', 'Image must have an aspect ratio of...'])
    data.delete('bookImgFile')

    bookData['bookImgLink'] = data.get('bookImgLink')
    returnData['bookImgLink'] = new VldtMssg(-1, ['Enter a URL to the image or upload an image', 'URL is invalid'])
    data.delete('bookImgLink')


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
    const conn = await poolPromise.getConnection()

    const [accArr, accArrFields] = await conn.execute("SELECT * FROM genre")
    const [accomodations] = accArr

    Object.keys(bookData).forEach((key)=>console.log(`bookData[${key}]`, bookData[key]))

    console.log('bookData["bookTitle"]',bookData["bookTitle"])
    console.log('bookData["bookDesc"]',bookData["bookDesc"])
    console.log('imgSrc',imgSrc)
    console.log('bookData["bookAuthors"]',bookData["bookAuthors"])
    console.log('bookData["accommodation"]',bookData["accommodation"])
    console.log('bookData', bookData)


    const [slot, slotFields] = await conn.execute("SELECT slots FROM genre WHERE genreID=?", [bookData["accommodation"]])
    const [genreObj] = slot

    console.log('genreObj', genreObj)
    
    const [result, fields] = await conn.execute('INSERT INTO book (title, description, img, avgRating, author, slots, genreID) VALUES (?, ?, ?, ?, ?, ?, ?)', [bookData["bookTitle"], bookData["bookDesc"], imgSrc, 0, bookData["bookAuthors"], genreObj.slots, bookData["accommodation"]]);
    console.log(result)
    
    console.log("ResultOBJ", result)
    let bookInsertedID = result.insertId


    const [justInserted, fieldsNewlyInserted] = await conn.execute("SELECT bk.bookID AS 'DB Index', bk.title AS 'Dorm Room ID', bk.author AS 'Location', gnr.name AS 'Accomodation', bk.slots AS 'Slots left', bk.description AS 'Description', bk.img AS 'Image', bk.avgRating AS 'Avrg. Rating' FROM (book bk LEFT JOIN genre gnr ON gnr.genreID = bk.genreID) WHERE bk.bookID=?", [bookInsertedID])
    const [newlyInserted] = justInserted
    temp.bookDisplay = newlyInserted


    poolPromise.releaseConnection(conn)

    return Response.json(temp)
}