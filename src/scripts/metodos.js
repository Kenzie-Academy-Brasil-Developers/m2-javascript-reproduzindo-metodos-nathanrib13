/*Adicione seu codigo abaixo */
const arr = [1,2,3,4,5]


// MAP()

//FUNCAO CALLBACK
    function myCallback(index){
    return index + 10
    }

//FUNCAO COM O USO DO MAP
    function usaMap (arr, callback) {
    const add10 = arr.map(index => callback(index))
    return add10
    }
   console.log(usaMap(arr, myCallback))


 //FUNCAO SEM O USO DO MAP
    function withouMap(arr,callback){
    const newarr = []
    for(let i = 0; i<arr.length; i++){
        newarr.push(callback(arr[i]))
    }
    return newarr
    }
   console.log(withouMap(arr,myCallback))






// FILTER()

//FUNCAO CALLBACK
    function isOdd(index){
        return index % 2 !== 0
         
    }

//USO DO FILTER
    function filtraImpar(arr, callback) {
        return arr.filter(callback)
    }
  console.log(filtraImpar(arr, isOdd))


//SEM USO DO FILTER
    function filtaImparComFor (arr, callback){
        const OddNumbers = []
        for(let i = 0; i<arr.length; i++){
            if(callback(arr[i]) == true){ 
            OddNumbers.push(arr[i])
            }
        }
        return OddNumbers
    }
   console.log(filtaImparComFor(arr,isOdd))





// FIND()

//FUNCAO CALLBACK
    function callbackNumber(element){
        return element > 2
    }

//USO DO FIND
    function numberGreaterThan2 (arr, callback){ 
        return arr.find(callback)
    }      
    console.log(numberGreaterThan2(arr,callbackNumber))

// SEM USO DO FIND
    function numberGreaterThan2WithouFind (arr, callback){
        for (let i = 0; i<arr.length; i++){
            if(callback(arr[i]) === true){ 
             return arr[i] 
            }
        }
    }
    console.log(numberGreaterThan2WithouFind(arr, callbackNumber))





// REDUCE()

//FUNCAO CALLBACK
    function sumAll (previousValue, currentValue){
        return previousValue + currentValue
    }

//USANDO REDUCE
    function reduceArr(arr, callback){
        return (arr.reduce(callback))
    }
   console.log(reduceArr(arr, sumAll))

//SEM O REDUCE
    function reduceWhitoutMethod (arr, callback){
        let newArr = 0
        for (let i = 0; i<arr.length; i++){
            newArr = (callback(arr[i],newArr))
        }
        return newArr
    }

     console.log(reduceWhitoutMethod(arr,sumAll))





// includes()

//FUNCAO COM INCLUDES
    function retornaArr (arr, value){ 
        return arr.includes(value)
    }
   console.log(retornaArr(arr, 2))


//FUNCAO SEM O INCLUDES
    function verificaValue(arr, value){
    for(let i =0; i<arr.length; i++){
        if(arr[i] == value){
            return true
        }
    }
    }
    console.log(verificaValue(arr,2))





// indexOf()

//FUNCAO COM O INDEXOF
    function verificaIndex(arr, value){
        return arr.indexOf(value)
    }
    console.log(verificaIndex(arr,3))

//FUNCAO SEM O INDEXOF 
    function verificaIndexWhitouIndexOF (arr, value){
        for(let i =0; i<arr.length; i++){
            if(arr[i] === value){
                return i
            }
        }
    }
    console.log(verificaIndexWhitouIndexOF(arr,3))