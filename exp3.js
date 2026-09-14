/*200 ok
201 status created
400 bad request
401 unauthorized
403 forbidden
404 not found
500 internal server error
501 not implemented
502 bad gateway
503 service unavailable
*/

//objective: Create a basic HTTP server using http.createServer(), Respond with “Hello World” and return headers + status code
import http from 'http';
//or use const http=require('http');
const server=http.createServer((req,res)=>{
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World');
});
server.listen(3005, ()=>{
    console.log('Server is running on port 3005');
});
