// feetToMile
function feetToMile(feet){
    var mile = feet /5280;
    return mile;
}


// woodCalculator
function woodCalculator(chair, table, bed){
    var chairAmount = chair * 1;
    var tableAmount = table * 3;
    var bedAmount = bed * 5;
    var totalFurniture = chairAmount + tableAmount + bedAmount;
    return totalFurniture;
}

// brickCalculator
// tinyFriend
function tinyFriend( word1, word2, word3 ) {
    let words = [ word1, word2, word3];   
  
    for ( i = 0; i < words.length; i++ ){   
      let length = words[i].length;    
      let min = Math.min(length);   
      return min;   
    }
  }
  
 



