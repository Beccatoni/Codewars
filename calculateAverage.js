// https://www.codewars.com/kata/57a2013acf1fa5bfc4000921/solutions/javascript

function find_avaerage(array){
        return array.length === 0 ? 0 : array.reduce((a,b)=> a+b, 0)
}