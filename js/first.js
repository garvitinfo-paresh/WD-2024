

// chrome -> inspect
// node filename.js
// code runner -> Arrow

// console.log("Hello")
// console.log("Hello")
// console.log("Hello")
// console.log("Hello")

// console.log(10+20/4*5-1)
// console.log(10+20/3*5-1)

// data type

// console.log(typeof "Hello") 
// console.log(typeof 'Hello') 
// console.log(typeof 'H') 
// console.log(typeof 123) 
// console.log(123) 
// console.log(typeof true) 
// a = 46456456456545765768564765756756756856756765756765756756765765756756n
// a = -1n 
// console.log(typeof 100n) 
// console.log(typeof a1) 
// console.log(typeof a)
// a 
// console.log(typeof undefined)
// console.log(typeof null)
// console.log(typeof []) 
// console.log(typeof {}) 
// console.log(typeof function(){} ) 
// console.log(typeof Symbol(100) ) 



// let str1 = "Hello ";
// let str2 = 'Hello ';
// let str3 = `Hello `;

// console.log(str1);
// console.log(str2);
// console.log(str3);

// console.log("Hello")
// console.log('Hello')
// console.log('Hello
//  world ');

// `` backtick
// console.log(`hello 

// new

// world`)

// var/ let /const
// var str1 = "we are learning javascript"
// var str2 = " for full stack development"
// var str3 = " in online mode"
// console.log(str1,str2,str3) 
// console.log((str1,str2,str3)) 
// console.log((str1+str2+str3)) 
// console.log(str2)

// var a = 10
// var b = 20
// console.log("a : ",a)
// console.log("b : ",b)
// console.log("a + b : ",a+b)
// true = 1
// false = 0

// console.log(true + 1)
// console.log(true + true + 1)
// console.log(true * 10)
// console.log(false * 10)
// console.log(10 - true)

// area of circle
// 6"   2 pizza 
// 9"   1 pizaa

// pi = 3.14
// r = 11
// aoc = pi*r*r
// console.log("Area of circle : ",aoc)

// 113.03999999999999 * 2 =227
//  254.34

// arithmatic operator

// console.log(10+20)
// console.log(10-20)
// console.log(10*20)
// console.log(10/3)
// console.log(10%3)


// if(1)
// {
//     console.log("True")
// }
// else
// {
//     console.log("false")
// }

// a=10,b=20
// if(a>b)
// {
//     console.log(" a is greater",a)
// }
// else
// {
//     console.log(" b is greater",b)
// }

// const prompt = require('prompt-sync')();
// var n = prompt("Enter n : ")
// console.log(n)

// null     undefine    NaN     empty


// 1 nan 2 null 3 null 4 empty 5 undefine

// console.log(typeof(null)) // object
// console.log(typeof(NaN)) // number
// console.log(typeof(undefined)) //undefine 

// NaN -> Not a Number
// let a=10
// let b='apple'
// console.log(typeof(a+b))

// // not a leagal number
// console.log(typeof(a-b))
// console.log(a-b)
// console.log(typeof(a*b))
// console.log(typeof(a/b))

// console.log(typeof( a))
// console.log(typeof( b))

// let a;
// console.log(typeof(a));
// console.log(a);


//array
//collection of  "Homogenious" "indexed" elements called as "array"
//[]
//index starts from "0"
//we can access array elements with "indexes"


// let arr = [10, 20, 30, 40, 50];
// console.log(arr[2])
// console.log(arr[-1])

// console.log(arr[0], arr[2], arr[4]);
// console.log(arr[5], arr[-1]);  

// let arr = [10, 20, 30, 40, 50];
// console.log(arr);
// console.log(arr.length);       
// arr.length = 3;
// console.log(arr);
// console.log(arr[0], arr[2], arr[3], arr[5], arr[100], arr[-100]);   


// let arr = [];
// console.log(arr.length);                                          
// arr[0] = 10;
// console.log(arr.length);                                          
// arr[100] = 1000;
// console.log(arr[5]);                                          
// console.log(arr.length);                                      




//insert  -- > //push()    //unshift()
//delete -- > //pop()     //shift()


// let arr = [20, 30, 40];
// console.log(arr.length);                 
// console.log(arr);                        
// arr.push(50);
// console.log(arr);                        
// arr.unshift(10);
// arr.unshift(0);
// console.log(arr);
// arr.pop();
// console.log(arr);                        
// arr.shift();
// console.log(arr);                        

//delete
//deletes an element at only a particular index
//delete property never releses the memory of deleted element
// let arr = [10, 20, 30, 40, 50];
// console.log(arr.length);                 
// console.log(arr);                      
// delete arr[0];
// delete arr[1];
// delete arr[2];
// console.log(arr);                      
// console.log(arr.length);                 
// console.log(arr);                      
// console.log(arr[0]);                   
// console.log(arr.length);               
// console.log(arr);                      
// delete arr[4];
// console.log(arr.length);               
// console.log(arr);                      
// delete arr
// console.log(arr)

// -5  -4  -3  -2  -1
// 10, 20, 30, 40, 50
// 0   1   2   3   4

// let arr = [10, 20, 30, 40, 50];
// The splice() method of Array instances changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.
// arr.splice(3)
// arr.splice(1)
// arr.splice(1,2)
// console.log(arr);
// console.log(arr.splice(1,2));
// arr.splice(-4,-1)
// arr.splice(2,2,100,200,300,400)
// console.log(arr);