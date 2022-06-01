let r =[1,2,3,55,67,7,].reduce((acc,curr)=>{
                     if(curr>=4){

                        acc.crrTotal+=curr;
                        acc.result.push(acc.currTotal)
                     }
                     return acc
},{
 currTotal :0,
 result:[]
})
let o =5;
console.log(r)
console.log(r)
// {crrTotal:129,result:[55,122,129]}




