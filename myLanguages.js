// https://www.codewars.com/kata/5b16490986b6d336c900007d/train/javascript

function myLanguages(results){
    let arrLang = []

    for(let lang in results){
        if(results[lang] >= 60){
            arrLang.push(lang)
        }
    }
    return arrLang.sort((a,b)=> results[b] - results[a])
}


//  or

function myLangs(results){
  return Object.keys(results)
            .filter(l => l >= 60)
            .sort((a,b)=> results[b] - results[a])
}