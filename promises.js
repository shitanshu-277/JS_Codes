function fetchData(url){
    return new Promise(function (resolve,reject){
        console.log("starting downloading from",url);
        setTimeout(function processDownloading(){
            let data="Dummy Data";
            console.log("Download Completed");
            resolve(data);
            // resolve(sanket);  it will never will be exceuted as promise is fullfilled only once
            // resolve(12345);
        },7000);
    });
}
function writeData(data){
    return new Promise(function(resolve,reject){
        console.log("Started writing ",data,"in a file");
        setTimeout(function processWriting(){
            let filename="result.txt";
            console.log("file written successfully");
            resolve(filename);
        },3000);
    });
}

function uploadData(data,url){
    return new Promise(function(resolve,reject){
        console.log("Upload started on url",url,"filename is ",file);
        setTimeout(function processUpload(){
            let result="SUCCESS";
            console.log("Uploading done");
            console.log(result);
        },5000);
    });
} 

let data = fetchData("www.datadrive.com");
let filename=writeFile(data);
let response=uploadData(filename,"www.drive.google.com");

let downloadPromise=fetchData("www.datadrive.com");
downloadPromise
 .then(function processDownload(value){
    console.log("Download promise fulfilled");
    console.log(value);
    // let writePromise =writeFile(value);
    // writePromise.then(function processsWrite(value){
    //     console.log("writing of file completed");
    //     console.log(value);
    // })
})