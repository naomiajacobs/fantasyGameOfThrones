var fs = require('fs');
fs.readFile('characters.csv', 'utf-8',function(err, data){
  var datas = data.split("\n")
  datas = datas.map(function(d){
    return d.split(',')[3]
  });
  datas.forEach(function(url){
    fs.appendFile('urls.txt', url + '\n', function(err){
    }); 
  });
});
