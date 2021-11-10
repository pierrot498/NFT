
const faker = require('faker');


  
const fs = require("fs");
const glob = require("glob");
var cid=['QmTnHEZKqmGqXRo6GRTsDSxiQYCdrZYJsKXHVRBA67xWkF','QmVPNZHcJHByfuCm2TWRMohixxkiKHziKDJsH3AHs5wLC5',
'QmTZKzUxBXJhYF41kxkc2D26pqT6BFVvWGVn4Gvqipi7cK','QmRBzE8mBAfXazZjpSxxN4ds1QNCch7zury8mrqKxZrkkV',
'QmYTpB6f2ZJ27xNHRQVygFBfWPtpc3FtQkRHT38zVkkE32','QmVngf5yWmEBmPviFfvvpZ3Zom9YntAy4BuXe3euwrfQSv',
'QmXkwDzUNiw6vNhaR2SWmkK9d81cvREyLimQPnuyKfw2TX'];
var number=[999,1999,2999,3999,4999,5999,6998]
function sleep(delay) {
  var start = new Date().getTime();
  while (new Date().getTime() < start + delay);
}
var getDirectories = function (src, callback) {
  glob(src + '/**/*', callback);
};



//after metadata have been made, use this function to have only 1 file
masterMetadata = async function () {
  var metadatas=[]
  getDirectories('./metadata',async function (err, res) {
if (err) {
  console.log('Error', err);
} else {
  for(let i=0; i < res.length ; i++) {
 
    var text = await fs.readFileSync(res[i],'utf8');
    var num=parseInt(res[i].substring(11,res[i].length).replace(".json",""))
    var json=JSON.parse(text)
    var numberOfTroopertotal=6998;
    json.name="Trooper "+(num)
    var image = json.image
    console.log(json.name)

   for(let j=number.length-1; j >=0 ; j--) {
      numberOfPng=numberOfTroopertotal-number[j]
      
      if(num<=number[j]){
        json.image="ipfs://"+cid[j]+"/"+image
        
      }
    }
    //await sleep(10)
    metadatas.push(json);
  fs.writeFileSync(`./metadatasClean/${num}`, JSON.stringify(json));
  }

  }


});





};

masterMetadata()
















