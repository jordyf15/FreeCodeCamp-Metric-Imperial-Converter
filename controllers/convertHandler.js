/*
*
*
*       Complete the handler logic below
*       
*       
*/

function ConvertHandler() {
  
  function rounder(num){//function to round to 5 decimals
    num*=100000;
    num=Math.round(num)
    num/=100000;
    return num;
  }

  function fractionCount(num){//2 fractions and more are not allowed
    var count=0;
    for(let i =0;i<num.length;i++){
      if(num[i]=='/'){
        count++;
      }
    }
    return count;
  }

  this.getNum = function(input,initUnit) {//get the number from the input
    input=input.toLowerCase();
    var result=input.split(/g|L|l|k|m/,1);
    result=result.join();
    if(result=='' && initUnit!=null){
      result=1;
    }else if(result.includes('/')){
        if(fractionCount(input)>1){
          return result=NaN;
        }
        result=result.split('/')
        result=parseFloat(result[0])/parseFloat(result[1])
    }
    result=parseFloat(result);
    return rounder(result);
  };
  
  this.getUnit = function(input) {//get the unit of the input
    input=input.toLowerCase();
    var result=input.split(/(g|L|l|k|m)/);
    result.shift();
     result=result.join('');
     result=result.toLowerCase();
     if(result!='gal' && result!='l' && result!='lbs' && result!='kg' && result!='km' && result!='mi'){
       result=null;
     }
     return result;
  };
  
  this.getReturnUnit = function(initUnit) {//get return unit or the converted one
    var result;
    if(initUnit=='gal'){
      result='l';
    }else if(initUnit=='l'){
      result='gal';
    }else if(initUnit=='lbs'){
      result='kg';
    }else if(initUnit=='kg'){
      result='lbs';
    }else if(initUnit=='mi'){
      result='km';
    }else if(initUnit=='km'){
      result='mi';
    }
    return result;
  };

  this.spellOutUnit = function(unit) {//this function is to spell out the unit for the string later
    var result;
    if(unit=='gal'){
      result='gallons';
    }else if(unit=='l'){
      result='liters';
    }else if(unit=='lbs'){
      result='pounds';
    }else if(unit=='kg'){
      result='kilograms';
    }else if(unit=='mi'){
      result='miles'
    }else if(unit=='km'){
      result='kilometers'
    }
    return result;
  };
  
  this.convert = function(initNum, initUnit) {//this is where the converted between unit happens
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    var result;
    if(initUnit=='gal'){
      result=initNum*galToL;
    }else if(initUnit=='l'){
      result=initNum/galToL;
    }else if(initUnit=='lbs'){
      result=initNum*lbsToKg;
    }else if(initUnit=='kg'){
      result=initNum/lbsToKg;
    }else if(initUnit=='mi'){
      result=initNum*miToKm;
    }else if(initUnit=='km'){
      result=initNum/miToKm;
    }
    return rounder(result);
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {//this is where the string is written
    var result;
      result=initNum+' '+this.spellOutUnit(initUnit)+' converts to '+returnNum+' '+this.spellOutUnit(returnUnit);
    
    return result;
  };
  
}

module.exports = ConvertHandler;
