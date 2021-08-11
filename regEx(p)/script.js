// let s = "color 123 Seo 12"
// let reg = /c/g;//pntrum e "c tar@"
// let reg = /\w/g //pntrum e a-z, A-Z, 0-9
// let reg = /\W/g //poqratari chgtacnerna gtnum
// let reg = /\d/g //pntrum e 0-9 tver@
// let reg = /\D/g // amen inch,baci tveric
// let reg = /\s/g // vercnum e menak prabelner@, s-space
// let reg = /\S/g // vercnum eamen inch,baci prabelneric
// let reg = /\w+/g // Aarrayi tesqov veradardznum e yur. andam
// let reg = /\w*/g // Aarrayi tesqov veradardznum e yur. andam + prabelner@
// let reg = /./g //veradrdznum e amen inch
// let reg = /.+/g //veradrdznum e amen inch
// let reg = /.*/g //veradrdznum e amen inch
// let reg = /[a-d0-2]/g
// let reg = /[col]/g
// let reg = /^c.*2$/g //stugum e ete string@ sksvum e "c" tarov, verjanum "2"-ov,tpuma et string@
// let reg = /\d{3,}/g //minimum eranish tver@
// let reg = /\d{2}/g //veradardznum e tver@ 2-2
// let reg = /s/gi //kap shuni mecatar te poqratar s


// console.log(reg.test(s)); //test-ov true kam false e veradardznum
// console.log(s.match(reg));


// orinak

// function hexColor(str){
    // let reg = /^#[0-9a-fA-f]{3}|[0-9a-fA-F]{6}/
//     if(reg.test(str)){
//         return true
//     }else{
//         return false
//     }
// }
// console.log(hexColor("#333"));


//Arajadranq


// function capital(str){
//     let reg = /^[A-Z]/
//     if(reg.test(str)){
//         return true
//     }else{
//         return false
//     }
// }
// console.log(capital("Solve the above task to continue on to the next problem"));



// let items = ['goal', 'new', 'user', 'sit', 'eat', 'dinner']
// let result = items.filter(i => ! i.match(/e/));
// console.log(result);


// let ip = 'They ate 5 apples and 5 oranges'
// let reg = /5/
// console.log(ip.replace(reg, "five"));


// let items = ['lovely', 'fgdentist', '2 lonely', 'eden', 'flyn', 'dent']
// let result = items.filter(i => i.match(/^den|ly$/));
// console.log(result);


// let str=" Grigor ` (077)00-01-02, Mariam `(098)02-01-00,Armen`(077)01-02-00";
// let reg = /\d+/g
// console.log(str.match(reg));


// let str="www,site,com   www,bigsite,org  www,supersite,net";
// let reg = /,/
// let arr  = str.split("")
// let result = arr.map(i => i.replace(reg, "."))
// let str1 = result.join("")
// console.log(str1);






