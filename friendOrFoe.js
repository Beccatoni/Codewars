// https://www.codewars.com/kata/55b42574ff091733d900002f/train/javascript

function friend(freinds){
    return freinds? freinds.filter(trueFriend => trueFriend.length == 4) : [""]
}