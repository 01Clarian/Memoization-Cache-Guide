

### CONSTRUCTION FUNCTION: MEMOIZATION AND CACHE

Runs the index.html in the browser<br />


### `Example Set Up

Build a function with a provided relatable context, memoize the function and then compare and contrast our results. This relatable analogy function of Memoization will be referenced as The Construction Function.

### Construction Company Example Set Up

In the following function, you are the boss of a construction company which references an Application. First up, create a function named Building (representing the site you are constructing) with the first parameter tasks (representing the work to do on the building). 
Next, send an employee, as a  string named Bob, to complete the tasks at the building. 
As well, in this hypothetical we let Bob know that there are broken pipes at the building site. Bob must go to the site and see what he needs to fix the pipes and then dispatch to a depot and bring back the necessary tools.

### Building Function
Building Function demonstrates memoization by only executing the dispatch log one time, storing the results the cache and sending those return values for the 2nd and 3rd log.

### BuildingTwo Function
BuildingTwo Function returns the same task logs with reoccuring inputs like Building Function except it has not cache store and so instead returns the dispatch console 3 times. 

### Replace Bob with Susan
Replace Bob with Susan and how the cache results alter in the browser log. 
