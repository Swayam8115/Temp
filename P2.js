// console.log("Hello")

// var a=5;
// console.log(a+5);
// console.log(typeof(a));

// function varerror(){
//     var a=25;
// }
// varerror();
// console.log(a)//error

//let --> block scoped({}--> iske andar hai toh bus andar hio acces hoga..) **Mostly Used..

// let b=1;
// switch(b){
//     case 1 :
//         console.log("HI");
//         break;
//     case 2:
//         console.log("Hello");
//         break;
//     default:
//         console.log("BYE");
//         break;
// }

//Arrowfunctions **Mostly used

// const name=(first,last)=>{
//     return first+" "+last;
// }
// console.log(name("Swayam","Patel"));


//function
// const name=function(first,last){
//     return first+" "+last;
// }
// console.log(name("Swayam","Patel"));


//arrays

// let ar=[1,2,20,5,10];
// let mp=ar.map((number)=>{
//     return number**2;
// })
// let fl=ar.filter((number)=>{
//     return number%2==0;
// })
// let rd=ar.reduce((ac,cv)=>{
//     return ac*cv;
// },1)
// console.log(mp);
// console.log(fl);
// console.log(rd);

// ar.sort((a,b)=>a-b);//Ascending
// console.log(ar);
// ar.sort((a,b)=>b-a);//Descending
// console.log(ar);


//object

// let obj={
//     Name:"Swayam",
//     Age:19,
//     Gender:"Male"
// }
// console.log(obj)



// class car{
//     #cmp="BMW";//private
//     model="M5 CS";
//     colour="Matte BLACK";

//     details(){
//         console.log("Car Company is : ",this.#cmp);
//     }
//     moredetails(){
//         console.log("Model: ",this.model,"  Colour: ",this.colour);
//     }
// }
// let obj = new car;
// obj.details();
// obj.moredetails();

//try and catch

// try{
//     console.log("TRY BLOCK");
//     console.log(x);//error line ke baad wali line run nahi hogi wo sidha yaha se catch block....
//     console.log("TRY ENDS");
// }catch(e){
//     console.log("CATCH BLOCK");
//     console.log("Error is : ",e);
// }

//custom error using throw....

try{
    console.log("TRY BLOCK");
    console.log(x);//error line ke baad wali line run nahi hogi wo sidha yaha se catch block....
    console.log("TRY ENDS");
}catch(e){
    throw new Error("NOT DECLARED VARIABLE X");//custom error
}