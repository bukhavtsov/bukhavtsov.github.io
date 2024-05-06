---
title: "The Incredible Two Pointers technique"
date: 2023-07-01T22:40:00+01:00
draft: false 
---
Hey there, fellow learners! I'm Artem, and today's lesson is all about the incredible Two Pointers technique.

## What is the benefit of two pointers technique?

Before we start digging into this technique, I want to tell you about the benefit. Two pointers technique can dramatically improve the performance of your solution. It allows you to move from `O(n^2)`, `O(n log n)` time complexity to `O(n)`

## What is two pointers technique?
To understand two pointers technique you should be familiar with the data structures like arrays and linked lists, and master Big O notation. If you feel like you may need to ramp up your knowledge in understanding big o notation, I recommend you to watch my video about it.

Two pointers basically mean that you have 2 variables, and their values point to addresses in memory. 

On the Figure 1, you can see how arrays look under the hood. Each element has own index, value and address. 
![Figure 1 - Array under the hood](/images/2ptrs-ex-01.png "Figure 1 - Array under the hood")

On the Figure 2, we've created two variables `left` and `right` and values of these variables are address 1000 and 1004. Basically it means that If element with address 1000 will be changed, then `left` variable will be changed as well. The same for 1004 address and `right` variable.
![Figure 2 - Pointers](/images/2prtrs-ex-02.png "Figure 2 - Pointers")
These pointers allow you to track the state of 2 elements at once, during iteration through collection. Collection usually is an array, linked list and this technique cannot be used directly with non-linear data structures. 

Usually, depending on the problem, these pointers have name right and left, or slow and fast. If you wondering why, stay tuned :).

## Example that shows the a performance difference

https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/

### Solution #1: Space: O(1) Time: O(n^2)

Here we're trying to check all possible sum combinations between 2 elements in the given array. But the problem is that it takes quite a long period of time for machine to process. Let's run a benchmark test.
```js
package main

import (
	"reflect"
	"testing"
	"fmt"
)

func twoSum(nums []int, target int) []int {
	n := len(nums)
	for i := 0; i < n-1; i++ {
		for j := i + 1; j < n; j++ {
			if nums[i]+nums[j] == target {
				return []int{i+1, j+1}
			}
		}
	}

	return []int{}
}

func TestTwoSum(t *testing.T) {
	numbers := []int{2, 7, 11, 15}
	target := 9
	expected := []int{1, 2}
	result := twoSum(numbers, target)
	if !reflect.DeepEqual(result, expected) {
		t.Errorf("Expected %v, but got %v", expected, result)
	}

	numbers = []int{2, 3, 4}
	target = 6
	expected = []int{1, 3}
	result = twoSum(numbers, target)
	if !reflect.DeepEqual(result, expected) {
		t.Errorf("Expected %v, but got %v", expected, result)
	}

	numbers = []int{-1, 0}
	target = -1
	expected = []int{1, 2}
	result = twoSum(numbers, target)
	if !reflect.DeepEqual(result, expected) {
		t.Errorf("Expected %v, but got %v", expected, result)
	}
}


func generateSortedNumbers(size int) []int {
	numbers := make([]int, size)
	for i := 0; i < size; i++ {
		numbers[i] = i + 1
	}
	return numbers
}

func BenchmarkTwoSum10(b *testing.B) {
	numbers := generateSortedNumbers(10)
	target := 9

	b.ResetTimer() // Reset the timer before starting the benchmark

	for i := 0; i < b.N; i++ {
		_ = twoSum(numbers, target)
	}
}

func BenchmarkTwoSum100(b *testing.B) {
	numbers := generateSortedNumbers(100)
	target := 99

	b.ResetTimer() // Reset the timer before starting the benchmark

	for i := 0; i < b.N; i++ {
		_ = twoSum(numbers, target)
	}
}

func BenchmarkTwoSum1000(b *testing.B) {
	numbers := generateSortedNumbers(1000)
	target := 999

	b.ResetTimer() // Reset the timer before starting the benchmark

	for i := 0; i < b.N; i++ {
		_ = twoSum(numbers, target)
	}
}

func BenchmarkTwoSum10000(b *testing.B) {
	numbers := generateSortedNumbers(10000)
	target := 9999

	b.ResetTimer() // Reset the timer before starting the benchmark

	for i := 0; i < b.N; i++ {
		_ = twoSum(numbers, target)
	}
}


func main() {
	// Run the benchmark tests
	benchmarkResult10 := testing.Benchmark(BenchmarkTwoSum10)
	fmt.Println("BenchmarkTwoSum10:", benchmarkResult10)

	benchmarkResult100 := testing.Benchmark(BenchmarkTwoSum100)
	fmt.Println("BenchmarkTwoSum100:", benchmarkResult100)

	benchmarkResult1000 := testing.Benchmark(BenchmarkTwoSum1000)
	fmt.Println("BenchmarkTwoSum1000:", benchmarkResult1000)

	benchmarkResult10000 := testing.Benchmark(BenchmarkTwoSum10000)
	fmt.Println("BenchmarkTwoSum10000:", benchmarkResult10000)
}
```

Benchmark results:
```bash
goos: darwin
goarch: amd64
pkg: github.com/bukhavtsov/youtube/two-pointers/two_sum_quadratic
cpu: Intel(R) Core(TM) i7-1068NG7 CPU @ 2.30GHz
BenchmarkTwoSum10-8      	52684279	        23.03 ns/op
BenchmarkTwoSum100-8     	16249501	        71.73 ns/op
BenchmarkTwoSum1000-8    	 2671320	       441.8 ns/op
BenchmarkTwoSum10000-8   	  269739	      4381 ns/op
PASS
ok  	github.com/bukhavtsov/youtube/two-pointers/two_sum_quadratic	5.691s
```

### Solution #2: Space: O(1) Time: O(n)

```go
package main

import (
	"reflect"
	"testing"
	"fmt"
)

func twoSum(numbers []int, target int) []int {
	left, right := 0, len(numbers)-1

	for left < right {
		sum := numbers[left] + numbers[right]
		if sum == target {
			return []int{left + 1, right + 1} // Adding 1 to match the 1-indexing
		} else if sum < target {
			left++
		} else {
			right--
		}
	}

	return []int{-1, -1} // Return -1, -1 if no solution found
}

func TestTwoSum(t *testing.T) {
	numbers := []int{2, 7, 11, 15}
	target := 9
	expected := []int{1, 2}
	result := twoSum(numbers, target)
	if !reflect.DeepEqual(result, expected) {
		t.Errorf("Expected %v, but got %v", expected, result)
	}

	numbers = []int{2, 3, 4}
	target = 6
	expected = []int{1, 3}
	result = twoSum(numbers, target)
	if !reflect.DeepEqual(result, expected) {
		t.Errorf("Expected %v, but got %v", expected, result)
	}

	numbers = []int{-1, 0}
	target = -1
	expected = []int{1, 2}
	result = twoSum(numbers, target)
	if !reflect.DeepEqual(result, expected) {
		t.Errorf("Expected %v, but got %v", expected, result)
	}
}


func generateSortedNumbers(size int) []int {
	numbers := make([]int, size)
	for i := 0; i < size; i++ {
		numbers[i] = i + 1
	}
	return numbers
}

func BenchmarkTwoSum10(b *testing.B) {
	numbers := generateSortedNumbers(10)
	target := 9

	b.ResetTimer() // Reset the timer before starting the benchmark

	for i := 0; i < b.N; i++ {
		_ = twoSum(numbers, target)
	}
}

func BenchmarkTwoSum100(b *testing.B) {
	numbers := generateSortedNumbers(100)
	target := 99

	b.ResetTimer() // Reset the timer before starting the benchmark

	for i := 0; i < b.N; i++ {
		_ = twoSum(numbers, target)
	}
}

func BenchmarkTwoSum1000(b *testing.B) {
	numbers := generateSortedNumbers(1000)
	target := 999

	b.ResetTimer() // Reset the timer before starting the benchmark

	for i := 0; i < b.N; i++ {
		_ = twoSum(numbers, target)
	}
}

func BenchmarkTwoSum10000(b *testing.B) {
	numbers := generateSortedNumbers(10000)
	target := 9999

	b.ResetTimer() // Reset the timer before starting the benchmark

	for i := 0; i < b.N; i++ {
		_ = twoSum(numbers, target)
	}
}


func main() {
	// Run the benchmark tests
	benchmarkResult10 := testing.Benchmark(BenchmarkTwoSum10)
	fmt.Println("BenchmarkTwoSum10:", benchmarkResult10)

	benchmarkResult100 := testing.Benchmark(BenchmarkTwoSum100)
	fmt.Println("BenchmarkTwoSum100:", benchmarkResult100)

	benchmarkResult1000 := testing.Benchmark(BenchmarkTwoSum1000)
	fmt.Println("BenchmarkTwoSum1000:", benchmarkResult1000)

	benchmarkResult10000 := testing.Benchmark(BenchmarkTwoSum10000)
	fmt.Println("BenchmarkTwoSum10000:", benchmarkResult10000)
}
```

Benchmark results
```bash
goos: darwin
goarch: amd64
pkg: github.com/bukhavtsov/youtube/two-pointers/two_sum_linear
cpu: Intel(R) Core(TM) i7-1068NG7 CPU @ 2.30GHz
BenchmarkTwoSum10-8      	56371071	        21.93 ns/op
BenchmarkTwoSum100-8     	52781440	        20.58 ns/op
BenchmarkTwoSum1000-8    	58837300	        20.83 ns/op
BenchmarkTwoSum10000-8   	55983619	        21.22 ns/op
PASS
ok  	github.com/bukhavtsov/youtube/two-pointers/two_sum_linear	6.067s
```

### The details of two pointers solution.
With the Two Pointers technique we can avoid unnecessary iterations and speed up the process of finding the target sum.
Because we know that the array is sorted. So we'll create two pointers, the `left` pointer is an index of the smallest element and the `right` will be the index of largest element. We'll iterate through the array and on each iteration we'll check  the sum of `left` and `right` pointers. If the number is greater than target - we'll decrease the right pointer; if the value is smaller than target, we'll increase the left pointer. And in the end we'll obtain the correct pairs.

```go
func twoSum(nums []int, target int) []int {
    left := 0
    right := len(nums) - 1

    for left < right {
        currentSum := nums[left] + nums[right]
        if currentSum == target {
            return []int{nums[left], nums[right]}
        } else if currentSum < target {
            left++
        } else {
            right--
        }
    }

    return []int{}
}
```

### Takeaways
As you can see in benchmarks, the solution with two pointers technique has stable results. Number of iterations and Time per Iteration almost remains the same, and much better in comparison with nested loops solution. 


## Problem with fast & slow pointer (TODO: ADD Description).

FInd middle element of the array
https://leetcode.com/problems/middle-of-the-linked-list/


```go
func middleNode(head *ListNode) *ListNode {
    fast := head 
    slow := head
    for fast != nil && fast.Next != nil {
        fast = fast.Next
        fast = fast.Next
        slow = slow.Next
    }
    return slow
}
```

## Summary (TODO)
