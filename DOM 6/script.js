//ERROR

// try{
//     alert("hi")
// }catch(err){
//     alert("catch is ignored")
// }

// try{
//     alert(hi)
// }catch(err){
//     alert("catch is ignored")
// }

// try {
//     setTimeout(function(){
//         noSurchVariable()
//     }, 1000)
// } catch (error) {
//     alert("don't work")
// }

// setTimeout(function(){
//     try {
//         noSuchVariable()
//     } catch (error) {
//         alert("Error")
//     }
// }, 1000)

        //         error
        //        /  |  \
        //       /   |   \
        //      /    |    \
        // name  message  stack

// try {
//     Lala
// } catch (err) {
//     alert(err.name)
//     alert(err.message)
//     alert(err.stack)
// }

//?????????????????????
// let json = '{"age": 30}'
// try {
//     let user = JSON.parse(json)
//     alert(user.name)
// } catch (error) {
//     alert("dousen't execute")
// }


// let error = new Error("my error")
// alert(error.name)
// alert(error.message)
// alert(error.stack)

// let json = '{"age": 30}'
// try {
//     let user = JSON.parse(json)
//     if(!user.name){
//         throw new Error("incompleted data")
//     }
//     alert(user.name)
// } catch (err) {
//     alert("JSON error " + err.message)
// }

// try {
//     user: {}
// } catch (err) {
//     if(err instanceof ReferenceError){
//         alert(Referance)
//     }
// }

// try{
//     alert("try")
//     if(confirm("Make an arror?"))BAD_CODE()
// } catch(err){
//     alert ("catch")
// }
// finally{
//     alert("finally")
// }

//arajadranq

// let x = prompt("Type hello")
// try {
//     if(x !== "hello"){
//         throw new Error("Oops, you didn't type hello")
//     }
// } catch (err) {
//     alert(err.message)
// }
// finally{
//     alert("'thanks for playing")
// }


// let err = []
// let arr = [1, 4, true, 8,"hello"]
// try {
//     for(let i = 0; i < arr.length; i++){
//         if(typeof arr[i] === "boolean" ){
//             err.push("Oops,this item is boolean")
//         }else if(typeof arr[i] === "string"){
//             err.push("Oops,this item is string")
//         }else{
//             err.push("Oops,this item is number")
//         }
//     }  
//     if(err[0]){
//         throw err
//     } 
// } catch (error) {
//     console.log(error);
// }


// let age = prompt(" Մուտքագրեք Ձեր տարիքը ")
// try {
//     if(age < 18){
//         throw new Error("Թույլատրելի մուտքը 18-ից բարձր")
//     }else{
//         alert("Ձեր մուտքը հաստատվել է")
//     }
// } catch (error) {
//     alert(error.message)
// }