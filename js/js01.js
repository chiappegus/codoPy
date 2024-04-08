console.log("hola");


// map 
//     numeros =[1,2,3,4]
//  multiplicacionde =numeros.map(nun => console.log(nun * nun))


//foreach

// let suma=0 
//  numeros.forEach(element => {
//     suma +=element
    
// });

// console.log(suma)
// console.log(numeros)


//filter
// const numbers =[1,2,3,4,5,6,7,8,9,10]
// const evenNumbers = numbers.filter(number=>
//     number%2===0)

// console.log(numbers)
// console.log(evenNumbers)


//reduce

const numbersReduce = [1,2,3,4,5]
const suma =  numbersReduce.reduce((previousValue , currentvalue)=> previousValue + currentvalue , 0) // el cero es inicial value

console.log(numbersReduce)
console.log(suma)

//reduce cuenta duplicados. //** ojo con recurrencias!!
 


const word =['apple' , 'banana', 'bytes', 'hello','banana', 'bytes']
const wordReduce = word.reduce((accumulator , currentvalue)=>{

    if(accumulator[currentvalue]){
        accumulator[currentvalue]++

    }
    else{

        accumulator[currentvalue]=1

    }
    return accumulator
},{})

console.log(wordReduce)



const grades=[85,92,60,78,95,66,88,50,94]
const passingGrades=grades.filter(grade=>grade>=70)
const averagePassingGrade=passingGrades.reduce((sum,grade)=>sum+grade,0)/passingGrades.length
console.log('Original Grades: ',grades)
console.log('Passing Grades: ',passingGrades)
console.log('Average Passing Grade: ',averagePassingGrade)


