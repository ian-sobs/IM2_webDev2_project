import adminPageStyle from '../adminPageStyle'
import pool from '@/dbConn'
import TableFull from '../components/users/tableFull'

export default async function books(){
    const poolPromise = pool.promise()
    const conn = await poolPromise.getConnection()
    const [result, fields] = await conn.execute('SELECT `user`.userID AS `ID`, `user`.email AS `Email`, `user`.username AS `Username`, CONCAT_WS(" ", firstName, midName, lastName) AS `Name`, `country`.name , `user`.address, `user`.birthdate FROM (`user` INNER JOIN `country` ON `country`.countryID=`user`.countryID)')
    
    if(result.length > 0){ 
        let colNames = Object.keys(result[0])
        return(
            <>
                <section name="sectionGrid" className={`${adminPageStyle.allWidth} ${adminPageStyle.mobile} ${adminPageStyle.sm} ${adminPageStyle.md} ${adminPageStyle.lg} ${adminPageStyle.xl}`}>
                
                    <TableFull colNames={colNames} rowsData={result} caption="Table of all users"></TableFull>
                        
                    

                </section>
            </>
        )
    }
}