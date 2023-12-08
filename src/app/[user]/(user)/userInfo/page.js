export default function Page(){
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
    
    return <h1>Hello</h1>
}