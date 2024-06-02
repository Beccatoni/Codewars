for(var i = 1; i <= 4; i++){
    setTimeout(function(){
        console.log(`After ${i} ${i>1? 'Seconds':'Second'}: ${i}`)
    }, i * 1000);
}
// to solve the excution problem to stop displaying the same message use the let keyword or use the IIFE

