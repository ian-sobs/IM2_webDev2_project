export async function GET(request) {
    const apiKey = 'b10d40bc52a44eea92d31b411f777c16'
    const site = new URL(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}`)
    const food = await fetch(site, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
    const foodToDisplay = await food.json()
    console.log("food", request)
    return Response.json({foodToDisplay})
}

//route handlers are just creating an API endpoint where you can send requests and expect a response. 
// A possible way to use route.js is to have the code inside it query the database and return the query result as a response object. In your client side code / client components(i.e. page.js) you can fetch the queried data from your route handler.
// This method WILL NOT INCREASE the bundle size of client side code