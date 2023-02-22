const fs= require('fs');

const get_text=fs.readFileSync('./text.txt','utf-8');
console.log(get_text);

const put_text='This is  NEW INFO ${get_text}.\n me can also run js inside ${Date,now()}';
fs.writeFileSync('./text.txt',put_text);

console.log("File written");