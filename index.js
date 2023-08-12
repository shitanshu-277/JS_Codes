const http = require('http');
const PORT=3000;
const server = http.createServer(function exec(request,response){
    console.log(request.method);
    if(request.url=='/home'){
        response.end("Welcome to home");
    }
    else if(request.url=='/faq'){
        response.end("List of FAQs")
    }
    else{
         response.end("Hello world");
    }
    //console.log(request.url);
});
server.listen(PORT,function process(){
    console.log("server started on port",PORT);
});