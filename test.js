const server=require('http');
const path_name=require('url'); 

server.createServer((req,res)=>{
    const path_url=req.url;
    if(path_url === '/' || path_url === '/dashboard'){
        res.writeHead(200,{'contect-type':'text/html','new_value':'result'});
        res.end("<h1>This is a home/dashboard page</h1>");
    }
    else if(path_url === '/courses'){
        res.end("This is a course list page");
    }
    else{
        res.writeHead(404);
        res.end("page not found");
    }
}).listen(8000,'127.0.0.1',()=>{
    console.log('Listening to port 8000');
});