//  Comparison between two different data types
//  Results can be unpredictable

console.log("2"  > 1);
console.log("02" > 1);

//  In Javascript comparison and equality operator works differently 
//  Avoid these comparisons

//  Comparisons convert null to a number, treating it as 0
console.log(null  > 0);
console.log(null >= 0);

// equality operator
console.log(null == 0); 

console.log(undefined == 0);
console.log(undefined  > 0);
console.log(undefined <= 0);

//  Strict Check === {not only check values but also datatypes}

console.log("2" === 2); //  false
console.log("2" == 2);  //  true








