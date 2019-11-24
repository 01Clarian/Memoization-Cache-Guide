
// MEMOIZATION AND CACHING: THE CONSTRUCTION FUNCTION EXAMPLE

// In order to better our understanding of Memoization, we will write a function
// entitled 'Building' and apply various logged results to observe the behaviour
// of JavaScript. 

// ****Additional Notes****

// In this example, you are the boss of a construction company.
// The construction company will be a reference to your Application.
// Javascript execution commands will be traced by a reference to your Construction
// Companies employees: Bob and Susy. 

let cache = {};
function Building(tasks) {
    if(tasks in cache) {
        return cache[tasks]
    } else {
    console.log('Dispatch To Depot!')
    return cache[tasks] = tasks + ' The work is complete.'
}
}
console.log('Day 1: ', Building("Bob's log:"))
console.log('Day 2: ', Building("Bob's log:"))
//console.log('Day 2: ', Building("Susan's log:"))
console.log('Day 3: ', Building("Bob's log:"))



function BuildingTwo(tasks) {
    console.log('Dispatch To Depot!')
    return tasks + ' The work is complete.'
}
console.log('Day 1: ', BuildingTwo("Tom's log:"))
console.log('Day 2: ', BuildingTwo("Tom's log:"))
console.log('Day 3: ', BuildingTwo("Tom's log:"))







