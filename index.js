

// Task 59
// Berilgan massivdan n - chi eng kichik elementni toping.

function nthSmallest(arr, n) {
    let result = []
    arr.sort((a, b) => a - b)
    for (let i = 0; i < n; i++) {
        result.push(arr[i])

    }
    result.sort((a, b) => b - a);
    return result[0]
}

// console.log(nthSmallest([7, 10, 4, 3, 20, 15], 3)); // Output: 7


// Task 60
// Berilgan sonli massivda eng ko'p takrorlangan elementni toping.

function mostFrequent(arr) {
    let max_count = 0
    for (let i = 0; i < arr.length; i++) {
        let count = 0;
        for (let g = 0; g < i; g++) {
            if (arr[i] === arr[g]) {
                count++
            }
        }
        if (count > max_count) {
            max_count = arr[i]
        }

    }
    return max_count
}

// console.log(mostFrequent([1, 3, 1, 3, 2, 1])); // Output: 1
// console.log(mostFrequent([3, 3, 3, 2, 2, 1])); // Output: 3


// Task 61
// Berilgan harflar qatorida eng ko'p takrorlangan harfni toping.

function mostFrequentChar(str) {
    let arr = str.split("")
    let max_count = 0
    let res = 0
    for (let i = 0; i < arr.length; i++) {
        let count = 0;
        for (let g = 0; g < arr.length; g++) {
            if (arr[i] === arr[g]) {
                count++
            }
        }
        if (count > max_count) {
            max_count = count
            res = arr[i]
        }

    }
    return res

}
// console.log(mostFrequentChar("aabbbcccc")); // Output: "c"
// console.log(mostFrequentChar("abcdabcdabcd")); // Output: "a"


// TAsk 62
// Berilgan sonli massivdagi eng kichik musbat sonni toping.

function firstMissingPositive(nums) {
    let result = nums.filter(item => item > 0)
    result.sort((a, b) => a - b)
    return result[0]
}
// console.log(firstMissingPositive([3, 4, -1, 1])); // Output: 1
// console.log(firstMissingPositive([1, 2, 0])); // Output: 1


// TAsk 63
// Berilgan stringdagi barcha harflarni bir qatorga chop eting.

function printCharsInLine(s) {
    let result = s.split("").join(" ")
    return result
}

// console.log(printCharsInLine("hello")); // Output: "h e l l o"




// Task 64
// Berilgan stringlar massivida eng uzun o'xshash prefiksni toping.

function commonCharacters(str1, str2) {
    let newArr = [];
    for (let i = 0; i < str1.length; i++) {
        if (str2.includes(str1[i]) && !newArr.includes(str1[i])) {
            newArr.push(str1[i]);
        }
    }
    return (newArr.join(''))
}

// console.log(commonCharacters("hello", "world")); // "lo"


function longestCommonPrefix(arr) {
    let prefix = []
    for (let i = 1; i < arr.length - 1; i++) {
        for (let g = 0; g < arr.length - 1; g++) {
            if (arr[i].includes(arr[i][g])) {
                prefix.push(arr[i][g])
            }
        }

    }
    return prefix
}
// console.log(longestCommonPrefix(["flower", "flow", "flight"])); // Output: "fl"
// console.log(longestCommonPrefix(["dog", "racecar", "car"])); // Output: ""

// Task 65
// Berilgan qator ichidagi arrayda ichidagi sonlar yi’g’indisi yuqori bo’lgan array ni qaytaring

function maxSumSubmatrix(matrix) {
    let result = []
    let sum_index = 0;
    let max_sum = 0
    for (const item of matrix) {
        result.push(item.reduce((a, b) => (a + b)))
    }
    result.forEach((item, index) => {
        if (item > max_sum) {
            max_sum = item
            sum_index = index
        }
    });
    return matrix[sum_index]
}
// console.log(maxSumSubmatrix([
//     [10, 2, 3],
//     [4, 11, 6],
//     [7, 8, 9]
// ])); // [7, 8, 9]

// Task 66

function intersection(nums1, nums2) {
    let result = []
    for (const item of nums1) {
        if (nums2.includes(item)) {
            result.push(item)
        }
    }
    return result
}
// console.log(intersection([1, 2, 2, 1], [2, 2])); // Output: [2]
// console.log(intersection([4, 9, 5], [9, 4, 9, 8, 4])); // Output: [4, 9]

// Task 67
// Berilgan sonlar qatorida berilgan yig'indini topuvchi barcha ikkilik juftliklarni toping.

function twoSumPairs(nums, target) {
    let result = []
    for (let i = 0; i < nums.length; i++) {
        for (let g = 0; g < i; g++) {
            if (nums[i] + nums[g] === target) {
                result.push(nums[i], nums[g])
            }

        }
    }
    return result

}
// console.log(twoSumPairs([2, 7, 11, 15], 9)); // Output: [[2, 7]]
// console.log(twoSumPairs([3, 2, 4, 9], 6)); // Output: [[2, 4]]

// Task 68
// Berilgan stringda har bir belgini qanchalik ko'p uchraganini hisoblang.

function charFrequency(str) {
    let obj = {}
    for (let i = 0; i < str.length; i++) {
        let count = 1
        for (let g = 0; g < str.length; g++) {
            if (str[i] == str[g]) {
                obj[str[i]] = count
                count++
            }
        }
    }
    return obj
}

// console.log(charFrequency("aabbcc")); // Output: { a: 2, b: 2, c: 2 }
// console.log(charFrequency("hello")); // Output: { h: 1, e: 1, l: 2, o: 1 }


// Task 69
// Berilgan objectda eng chuqur joylashgan qiymatni toping.

function deepestValue(obj) {
 
}

const obj = {
    a: 1,
    b: {
        c: 2,
        d: {
            e: 3,
            f: {
                g: 4
            }
        }
    }
};
console.log(deepestValue(obj)); // Output: 4



