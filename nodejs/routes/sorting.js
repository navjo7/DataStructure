const express = require('express')
const router = express.Router();

//selection sort
router.get('/selection',(req,res,next)=>{
    let unsortedArray = [5, 3, 6, 8, 2, 1, 4, 5, 6]
    let testUnsortedArray = [...unsortedArray]
    for (let i = 0; i < testUnsortedArray.length; i++) {
        let minimumIndex = i
        for(let j = i+1; j<testUnsortedArray.length;j++){
            if(testUnsortedArray[j]<testUnsortedArray[minimumIndex]){
                minimumIndex = j
            }
        }
        let temp = testUnsortedArray[i]
        testUnsortedArray[i] = testUnsortedArray[minimumIndex]
        testUnsortedArray[minimumIndex] = temp
    }
    res.status(200).json({
        sorted: testUnsortedArray
    })
    console.log("sorted array: ", JSON.stringify(testUnsortedArray))
    console.log("Unsorted array: ", JSON.stringify(unsortedArray))
})
//bubble sort
router.get('/bubble',(req,res,next)=>{

})
//selection sort
router.get('/insertion', (req, res, next) => {

})

module.exports = router