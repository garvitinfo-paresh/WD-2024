
// function fun_one()
// {
//   console.log("Called fun_one");
//   return "return fun_one"
// } 
// console.log(fun_one())

// named function 
// let do_sum =  function(x,y)
// {
//     // console.log(x+y)
//     return x+y
// }
// console.log(do_sum(10,20));

// arrow function 
// let do_sum = (x,y)=>{
//     return x+y
// }
// let do_sum = (x,y)=> x+y

// console.log(do_sum(150,200));


// anonymous function

let fun_one = function(myfun)
{
    console.log(myfun(10,20))
}
let do_sum =  function(x,y)
{
    // console.log(x+y)
    return x+y
}

// fun_one(()=>{})
fun_one(do_sum)
// 
// console.log(typeof(()=>{}))

