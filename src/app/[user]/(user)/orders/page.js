import OrderPage from "@/components/orderPage/orderDisplay";
import adminPageStyle from "@/app/admin/adminPageStyle";

export default function page(){
    const jwt = require('jsonwebtoken')

    if(!cookies().has('usrToken')) redirect('/login')

    const usrToken = cookies().get('usrToken')
    console.log("usrTokenInMidware", usrToken)

    try {
        var decoded = jwt.verify(usrToken.value, process.env.JWT_SECRET);
    } catch(err) {
        console.log("jwtErr", err)
        redirect('/login')
    }
    
    const styleArr = Object.keys(adminPageStyle)
    let classStyle = ''
    for (const classnameStyle of styleArr){
        classStyle = classStyle + adminPageStyle[classnameStyle] + ' '
    }


    return( 
    <>
        <section className={classStyle}>
            <OrderPage></OrderPage>
        </section>
        
    </>
   )
}