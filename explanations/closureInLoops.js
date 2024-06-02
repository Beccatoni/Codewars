for(var i = 1; i <= 4; i++){
    setTimeout(function(){
        console.log(`After ${i} ${i>1? 'Seconds':'Second'}: ${i}`)
    }, i * 1000);
}
