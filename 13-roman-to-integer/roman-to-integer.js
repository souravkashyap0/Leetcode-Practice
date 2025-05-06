/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    
    let result=0;
    
    let numericVal = new Map();
    numericVal.set('I',1);
    numericVal.set('V',5);
    numericVal.set('X',10);
    numericVal.set('L',50);
    numericVal.set('C',100);
    numericVal.set('D',500);
    numericVal.set('M',1000);

    for(let i=0;i<s.length;i++){
        if(numericVal.get(s.charAt(i)) < numericVal.get(s.charAt(i+1))){
            result -= numericVal.get(s.charAt(i));
        }
        else{
            result += numericVal.get(s.charAt(i));
        }
    }
    console.log('result',result);
    return result;
};