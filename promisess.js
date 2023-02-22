const fs=require('fs');
const superagent=require('superagent');
fs.readFile(`${__dirname}/dog_name.txt`,(err,data) => {
    if(err) return  console.log(err);
    console.log(`Breed : ${data}`);
    superagent
    .get(`https://dog.ceo/api/breed/${data}/images/random`)
    .then(res =>{
        console.log(err.body.message);
        fs.writeFile('dog_name.txt',res.body.message,err =>{
            if(err) return console.log(err.message);
              console.log('Random Image Saved');
        });
    })
    .catch(err =>{
        console.log(err.message);
    });
});