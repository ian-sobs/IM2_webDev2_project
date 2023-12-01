export async function POST(request) {
    const data = await request.formData()
    console.log('postObj', data)
   
    return Response.json(data)
}