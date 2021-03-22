//refactor
const filterOutOdds = (...nums) => nums.filter(num => num%2 === 0);

//findMin

function findMin(...nums){
    return nums.reduce((min, nextVal) => {
        return min < nextVal ? min : nextVal })
}; 

//mergeObjects 

function mergeObjects(obj1, obj2){
    return obj = {...obj1, ...obj2}
};

//doubleAndReturnArgs

function doubleAndReturnArgs(arr, ...vals){
    const doubleVals = vals.map(val => val *2)
    return [...arr, ...doubleVals]
};

//Slice and Dice 

const removeRandom = (...items) => {
    let randomNum = Math.floor(Math.random() * (items.length +1))
    return items.filter(value => value !== items[randomNum])
};

const extend = (arr1, arr2) => {
    return [...arr1, ...arr2];
};

const addKeyVal = (obj, key, val) => {
    return obj = {...obj, [key]:val}
}

const removeKey = (obj, key) => {
    let newObj = {...obj};
    delete newObj[key];
    return newObj; 
};


const update = (obj, key, val) => {
    return newObj = {...obj, [key]:val}
}
