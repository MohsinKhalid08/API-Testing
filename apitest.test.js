var supertest = require('supertest')
// var db = require('database')
// const bcrypt = require('bcrypt')
const request = supertest('http://localhost:3000/')  

describe('React Store Front Test Suite', () =>{

//     let auth = {};
    
//   beforeEach(async function() {
//   const hashedPassword = await bcrypt.hash("secret", 1);
//   await db.query(
//     `INSERT INTO users (username, password)
//         VALUES ('test', $1)`,
//     [hashedPassword]);
//   const response = await request
//     .post("/login")
//     .send({
//       username: "test",
//       password: "secret"
//     });
  
//   auth.token = response.body.token;
//   auth.curr_user_id = "test"
// });
    beforeAll(() => {
        console.log('Start Running Test Cases')


    });
    afterAll(() => {
        console.log('Fininished Running Test Cases')


    });
    //Api Test-01 ( Check the Color of the Product 4 )
    test.each(['Blue', 'Red', 'Green'])('Get the Color (%s) from Product 4 page ', async (color)=> {
        const response = await (await request.get('api/p/4?color=${color}'))
        console.log(response.body) 
        expect(response.status).toBe(200)
        
    
    });
    //Api Test-02 ( Check the Size of the Product 2 )
       test.each(['SM', 'MD', 'LG'])('Get the Size (%s) from Product 2 page ', async (size)=> {
        const response = await request.get('api/p/2?size=${size}') 
        console.log(response.body) 
        expect(response.status).toBe(200)
        
    
    });
     //Api Test-03 ( Check either the products are available )
     test.each([1,2,8])('Get- Either the Product (%s) is available', async (product)=> {
        const response = await request.get('api/p/${product}') 
        console.log(response.body) 
        expect(response.status).toBe(500)
        
    
    });

})
