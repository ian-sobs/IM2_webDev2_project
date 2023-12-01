export async function POST(request) {
    const data = await request.json()
    console.log('postObj', data)
   
    return Response.json(data)
}