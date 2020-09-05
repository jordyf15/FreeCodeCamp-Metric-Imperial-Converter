/*
*
*
*       Complete the API routing below
*
*
*/

'use strict';

var expect = require('chai').expect;
var ConvertHandler = require('../controllers/convertHandler.js');

module.exports = function (app) {
  
  var convertHandler = new ConvertHandler();

  app.route('/api/convert')
    .get(function (req, res){
      var input = req.query.input;
      var initUnit = convertHandler.getUnit(input);
      var initNum = convertHandler.getNum(input,initUnit);
      var returnNum = convertHandler.convert(initNum, initUnit);
      var returnUnit = convertHandler.getReturnUnit(initUnit);
      var toString = convertHandler.getString(initNum, initUnit, returnNum, returnUnit);
      
      if(isNaN(initNum) && initUnit==null){
        res.json({
          error: 'invalid number and unit'
        })
      }else if(initUnit==null){
        res.json({
            error: 'invalid unit'
        })
      }else if(isNaN(initNum)){
        res.json({
          error: 'invalid number'
        })
      }else{
        res.json({
          initNum: initNum,
          initUnit: initUnit,
          returnNum: returnNum,
          returnUnit: returnUnit,
          string: toString
        })
      }
    });
    
};
