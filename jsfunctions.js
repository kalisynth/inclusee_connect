function downloadJson(jsonString){
    var jString = JSON.stringify(jsonString);

    var fs = require('fs');
    fs.writeFile("aurouschat.json", jString, function(err, result) {
        if(err) console.log('error', err);
    });
}