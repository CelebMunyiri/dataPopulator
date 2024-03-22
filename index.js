const fs=require('fs');
const pdfParse=require('pdf-parse');

const pdfFile=fs.readFileSync('./UserLocation setup.pdf');

//getting the pdf details

pdfParse(pdfFile).then(function(data){
    console.log(data.numpages);
    //console.log(data.text);
    console.log(data.info);
})