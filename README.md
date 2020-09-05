# FreeCodeCamp's Metric Imperial Converter
For the First project of FreeCodeCamp's Quality Assurance we have to make a Metric Imperial Converter and also its testing.

## User-Stories:
1. I will help prevent the client from trying to guess(sniff) the MIME type.
2. I will prevent cross-site scripting (XSS) attacks.
3. I can GET /api/convert with a single parameter containing an accepted number  
and unit and have it converted.
4. Hint: Split the input by looking for the index of the first character.
5. I can convert 'gal' to 'L' and vice versa. (1 gal to 3.78541 L)
6. I can convert 'lbs' to 'kg' and vice versa. (1 lbs to 0.453592 kg)
7. I can convert 'mi' to 'km' and vice versa. (1 mi to 1.60934 km)
8. If my unit of measurement is invalid, returned will be 'invalid unit'.
9. If my number is invalid, returned with will 'invalid number'.
10. If both are invalid, return will be 'invalid number and unit'.
11. I can use fractions, decimals or both in my parameter(ie. 5, 1/2, 2.5/6), but if  
nothing is provided it will default to 1.
12. My return will consist of the initNum, initUnit, returnNum, returnUnit, and string  
spelling out units in format {initNum} {initial_Units} converts to {returnNum}  
{return_Units} with the result rounded to 5 decimals.
13. All 16 unit tests are complete and passing.
14. All 5 functional tests are complete and passing.

## Live Demo on Repl
https://FreeCodeCamp-Metric-Imperial-Converter.jordyf15.repl.co

## Project Description
In this project there are 5 file we need to edit from the FreeCodeCamp's boiler plate:
1. **Api.js in the route folder:**  
In the Api.js all we need to do is give the respond in the ```/api/convert``` route.  
Here we also handle the conditional of the respond if any or both the unit and number are invalid.
2. **ConvertHandler.js in the controllers folder**  
Most of the logic of the converter are done here like seperating number and unit from the input and converting the units itself to its counterpart and also spelling out each unit. Below are the list of units that our converter must be able to convert to pass the test:
    - gal to l and vice versa (1 gal = 3.78541 l)
    - lbs to kg and vice versa (1 lbs = 0.453592 kg)
    - mi to km and vice versa (1 mi = 1.60934 km)
3. **1_unit-tests.js in tests folder**  
Here we need to fill all the test that is needed to make sure that our converter is working properly.
4. **2_functional-tests.js in tests folder**   
Here we need to fill all the test that is needed to make sure that our converter is working properly.
5. **server.js:**  
In the server.js we need to use a middle ware to prevent cross-site scripting attack and also client from sniffing the MIME type. this can be done with using helmet.js as our middle ware.
```
app.use(helmet());
```
### Intruction from the original README.md file
------
[![Run on Repl.it](https://repl.it/badge/github/freeCodeCamp/boilerplate-project-metricimpconverter)](https://repl.it/github/freeCodeCamp/boilerplate-project-metricimpconverter)  
1) SET NODE_ENV to `test` without quotes  
2) Most logic will need done in `controllers/convertHandler.js` but do complete `routes/api.js`  
3) You will add any security features to `server.js`  
4) You will create all of the functional/unit tests in `tests/2_functional-tests.js` and `tests/1_unit-tests.js`

## Example Usage:
There are 2 ways to use the Metric Imperial Converter:
1. With the front-end form  
Example:  
- input 2kg into the form  
- input 5.4/3lbs into the form  
2. Directly to the route with query: input
Example: 
- /api/convert?input=4gal
- /api/convert?input=5.4/3lbs

## Example Result:
The result will be a json data like the following example:
If both the unit and number is valid.  
```
{initNum: 3.1, 
initUnit: 'mi', 
returnNum: 5.0000008, 
returnUnit: 'km',
string: '3.1 miles converts to 5.00002 kilometers'}
```
If the unit is invalid
```
{"error":"invalid unit"}
```
If the number is invalid
```
{"error":"invalid number"}
```
If both the unit and number is invalid
```
{"error":"invalid number and unit"}
```
## Technology Used:
1. HTML
2. CSS
3. Javascript
4. Express version ^4.14.0
5. Cors version ^2.8.1
6. Body-Parser version ^1.15.2
7. Chai version ^3.5.0
8. Chai-http version ^3.0.0
9. Mocha  version ^3.2.0
10. Zombie version ^5.0.5
11. Helmet version ^3.1.0
12. Font awesome version 4.7.0

## Note
During the testing in freecodecamp the test no 7 may sometime failed or succeed even though it has already fulfilled the requirement.



