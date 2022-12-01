const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here

let  totalBatteries = 0;
// use. reduce method to find total number of batteries 

totalBatteries = batteryBatches.reduce((total, batch) =>{
    return total + batch;
} , 0);

console.log(totalBatteries);

