var arr=[[1,2,3],
         [4,5,6],
         [7,8,9]]

// glxavor ankyunagci nerqevi tver@
// for(i = 0; i < arr.length; i++){
//     for(j=0; j < i; j++){
//         console.log(arr[i][j]);
//     } 
// }


//erkrordayin ankyunagci verevi tver@
// for(i = 0; i < arr.length-1; i++){
//     for(j=0; j < arr.length-1-i; j++){
//         console.log(arr[i][j]);
//     } 
// }


// for(i = 0; i < arr.length-1; i++){
//     for(j=i+1; j < arr.length; j++){
//         console.log(arr[i][j]);
//     } 
// }

for(i = 1; i < arr.length; i++){
    for(j=arr.length-i; j < arr.length; j++){
        console.log(arr[i][j]);
    } 
} 