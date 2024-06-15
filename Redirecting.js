let count = 1;

var timeout;

setInterval(() => {

    count++

    if(count > 5) location.replace("/index.html");
}, 1000);