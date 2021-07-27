// let s = 'abc 75:BC 85z';
// console.log(s);
// console.log(s.length);
// console.log(s[0]);
// console.log(s[100]);
// console.log(s.charAt(2));
// console.log(s.charCodeAt(2));//ASC||table
// console.log(s.toUpperCase());//dardznum e mecatar
// console.log(s.toLowerCase());//dardznum e poqratar
// console.log(s.slice(0, 5)); //copy-a anum 0-ic 5 indexi tarrer@
// console.log(s.substring(0, 5)); //copy-a anum 0-ic 5 indexi tarrer@
// console.log(s.includes("a"));//stugum e ka nshvac tarr@?
// console.log(s.indexOf("b"));//harcnum e nshvac tarri index@
// console.log(s.indexOf("h"));//harcnum e nshvac tarri index@


// let str = '     hello       ';
// console.log(str);
// console.log(str.trim());//ajic, daxic hanum e prabelner@

// let arr = [1, 2, 3]
// console.log(arr.join(", "));//arr-n sarquma string



// let s = 'abc'
// console.log(s.split(""));//sarquma array
// console.log(s.split("b"))//nshvac tarr@ hanuma arrayic

// let c = s.split("")
// c[0] = 7
// console.log(c.join(""));

// s = s.split("")
// s.splice(0, 1, 7)
// console.log(s.join(""));

// var arm = "աԱֆՖ";
// console.log(arm.charCodeAt(0));
// console.log(arm.charCodeAt(1));
// console.log(arm.charCodeAt(2));
// console.log(arm.charCodeAt(3));

// var name = "Aնուշ"

// for(i = 0; i < name.length; i++){
//     if(name.charCodeAt(i) < 1329 || name.charCodeAt(i) > 1414){
//         console.log(name.charCodeAt(i) + "-n chi gtnvum");
//     }else{
//         console.log(name.charCodeAt(i) + "-n gtnvum e haykakan mijakayqum");
//     }
// }


// for(i = 0; i < name.length; i++){
//     if(name.charCodeAt(i) < 1329 || name.charCodeAt(i) > 1414){
//         console.log(name.charAt(i) + "-n chi gtnvum");
//     }else{
//         console.log(name.charAt(i) + "-n gtnvum e haykakan mijakayqum");
//     }
// }

////arajadranq

// let str = "Im anunn e Anna";
// str = str.split("n")
// console.log(str.join("xy"));


// let x = prompt("nermuce STRING")
// function simetric(y){
//     for(i = 0; i < y.length; i++){
//         if(y[i] === y[y.length-1-i]){
//             return "true";
//         }else{
//             return "false"
//         }
//     }
// }
// console.log(simetric(x));


// var anun = prompt("Mutqagreq dzer anun@")
// var surName = prompt("Mutqagreq dzer azganun@")
// var fatherName = prompt("Mutqagreq dzer azganun@")
// let fulName = (anun, surName, fatherName) => {
//     return anun + " "+surName +  " "+fatherName
// }
// alert(fulName(anun, surName, fatherName));




// var mount = (ararat) => {
//     var ararat = prompt("Haykakan lernashxtayi amenabardzr ler@").toLowerCase()
//     const answer = "ararat"
//     if(ararat===answer){
//        console.log("ճիշտ է");
//     }else{
//         console.log("ճիշտ չէ");
//     }
// }
// mount();

// var mount = (ararat) => {
//     var ararat = prompt("Haykakan lernashxtayi amenabardzr ler@")
//     const answer = "ararat"
//     if(ararat===answer){
//        console.log("ճիշտ է");
//     }else{
//         console.log("ճիշտ չէ");
//     }
//     return ararat.toLowerCase()       
// }
// console.log(mount());;



// var students = ["Տիգրան", "John", "Սամվել"];
// let hayeren = (a) => {
//     let x = ""
//     for(i = 0; i < a.length; i++){
//         for(j = 0; j < a[i].length; j++){
//             if(a[i].charCodeAt(j) < 1329 || a[i].charCodeAt(j) > 1414){
//                 x += (a[i][j] + " - " + a[i] + " "); 
//             }
//         }
//     }
//     return x
// }
// console.log(hayeren(students));


// var students = ["Տիգրան", "John", "Սամվել"];
// let hayeren = (a) => {
//     for(i = 0; i < a.length; i++){
//         for(j = 0; j < a[i].length; j++){
//             if(a[i][j].charCodeAt() < 1329 || a[i][j].charCodeAt() > 1414){
//                 console.log((a[i][j] + " - " + a[i] + " "));
//             }
//         }
//     }
// }
// hayeren(students);