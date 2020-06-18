// 1-1) this is O(1) because regardless of the size of the crowd it will only take 1 action to complete.
// 1-2) O(n), linear relationship. more people = proportionally longer time.

    function isEven(value) {
    if (value % 2 === 0) {
        return true;
    }
    else
        return false;
    }

// 2) O(1) constant time two constant time actions, mod division, and comparison. regardless of size of input.

    function areYouHere(arr1, arr2) {
        for (let i = 0; i < arr1.length; i++) {
            const el1 = arr1[i];
            for (let j = 0; j < arr2.length; j++) {
                const el2 = arr2[j];
                if (el1 === el2) return true;
            }
        }
        return false;
    }

// 3) O(n^2), polynomial, as a run involves at worst iterating fully over two arrays.

    function doubleArrayValues(array) {
        for (let i = 0; i < array.length; i++) {
            array[i] *= 2;
        }
        return array;
    }

// 4) O(n), because array iteration is O(n)

    function naiveSearch(array, item) {
        for (let i = 0; i < array.length; i++) {
            if (array[i] === item) {
                return i;
            }
        }
    }

// 5) O(n), array iteration. Other actions are O(1)

    function createPairs(arr) {
        for (let i = 0; i < arr.length; i++) {
            for(let j = i + 1; j < arr.length; j++) {
                console.log(arr[i] + ", " +  arr[j] );
            }
        }
    }

// 6) O(n^2), because 1 nested array iteration inside another array iteration.

    function compute(num) {
        let result = [];
        for (let i = 1; i <= num; i++) {

            if (i === 1) {
                result.push(0);
            } else if (i == 2) {
                result.push(1);
            } else {
                result.push(result[i - 2] + result[i - 3]);
            }
            return result;
        }
    }

// 7) despite appearances this is O(n). none of the comparisons, arithmetic, or access-es (array[x]) are more than O(1)
//      as such, the greatest contributor to time-complexity here is the iteration over num in the for loop.

    function efficientSearch(array, item) {
        let minIndex = 0;
        let maxIndex = array.length - 1;
        let currentIndex;
        let currentElement;

        while (minIndex <= maxIndex) {
            currentIndex = Math.floor((minIndex + maxIndex) / 2);
            currentElement = array[currentIndex];

            if (currentElement < item) {
                minIndex = currentIndex + 1;
            } else if (currentElement > item) {
                maxIndex = currentIndex - 1;
            } else {
                return currentIndex;
            }
        }
        return -1;
    }

// 8) O(Log(n)) - because on every iteration in the while() loop, the data set is divided by 2- on success,
//             the loop ends, and on failure, the loop is divided by two again.

    function findRandomElement(arr) {
        return arr[Math.floor(Math.random() * arr.length)];
    }

// 9) O(1) the Math.floor and Math.random(), as well as the arr.length property access, and the array index access
//          arr[idx] are all O(1) time complexity actions. As such, findRandomElement's time complexity is O(1).

    function isWhat(n) {
        if (n < 2 || n % 1 !== 0) {
            return false;
        }
        for (let i = 2; i < n; ++i) {
            if (n % i === 0) return false;
        }
        return true;
    }

// 10) the for loop has the highest time complexity of O(n). the if includes arithmetic and comparisons which are all
//      O(1). the if inside the for loop is more arithmetic (floor div.) and comparisons, therefore time complexity =
//      O(n).

    function TOH(n,s,temp,d) {
        if (n === 1) {
            print(s,d)
            return;
        }

        TOH(n-1,s,d,temp)
        print(s, d)
        TOH(n-1,temp,s, d)

    }

    function print(a,b) {
        console.log(`moving ${a} to ${b}`)
    }

    TOH(5, 'A', 'B', 'C')

// if only this made sense...

// for next seven, refer to https://github.com/meta-434/DSA-Recursion/tree/master/solutions
// iterCountingSheep => O(n), one loop, equality checking.

// iterPowerCalculator => O(n), one loop, arithmetic (O(1)) elsewhere

// iterFibonacci => O(n), due to for loop plus insert @ end of array ( O(1) )

// iterReverseString => O(n^2) for loop (o(n)) + non-end-of-array insert (o(n))

// iterFactorial => O(n) one for loop iteration, arithmetic otherwise.

// iterSplitString => O(n), one for loop over string, plus string char access ~~ array index access and end-of-array insert

// iterTriangularNumber => O(n). one for loop and arithmetic otherwise.