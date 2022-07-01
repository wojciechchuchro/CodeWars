// Kata Task
// I have a cat and a dog.
//
//     I got them at the same time as kitten/puppy. That was humanYears years ago.
//
//     Return their respective ages now as [humanYears,catYears,dogYears]
//
// NOTES:
//
//     humanYears >= 1
// humanYears are whole numbers only
// Cat Years
// 15 cat years for first year
// +9 cat years for second year
// +4 cat years for each year after that
// Dog Years
// 15 dog years for first year
// +9 dog years for second year
// +5 dog years for each year after that

// //My solution

var humanYearsCatYearsDogYears = function(humanYears) {
    parseInt(humanYears);
    var array = [0,0,0];
    array[0] = humanYears;
    while(humanYears >= 1){
        if(array[1] === 0){
            array[1] = 15;
            array[2] = 15;
        }
        else if(array[1] === 15){
            array[1]=24;
            array[2]=24;
        }
        else if(array[1] >= 24 ){
            array[1]+=4
            array[2]+=5;
        }
        humanYears--;
    }

    return array;
}