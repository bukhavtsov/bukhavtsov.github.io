---
title: "Big O Notation Notes"
date: 2022-11-26T22:40:00+01:00
draft: false 
---
Hello everybody and welcome back. My name is Artem and in this blog post we're going to understand what does Big O notation mean and consider the time complexity. So, Let's get to it!

## Why it's essential to understand and master Big O?
- First, it allows you to determine the most efficient solution for task that you need to resolve.
- Secondly, it potentially could help you to optimise an existing solution that you have implemented already. 
- Finally, most likely that you'll not pass a coding interview without mastering this topic.


## Big O definition
**Big O time** is the language and metric that describes the efficiency of algorithms.
Or to be more precise **the way to describe how long algorithm performs as it's input size growth.**  


## Example with linear time complexity

```go
// The program finds the maximum element in the list
package main

import "fmt"

func main(){
	numbers := []int{1, 10, 13, 3, 20, 132, 123123}
	max, err := getMax(numbers)
	fmt.Println("max number in the slice is:", max)
	fmt.Println("err:", err)
}

func getMax(numbers []int) (int, error) {
	if len(numbers) == 0 {
		return 0, fmt.Errorf("received an empty slice")
	}
	max := numbers[0]
	for _, n := range numbers {
		if n > max {
			max = n
		}
	}
	return max, nil
}
```

On this example we can see the linear complexity



## Considerations

- When we have something which is not nested in the loop, then we summarise the complexity.
- When we calculate big o we usually remove all of the constants
- When we have something which is nested in the loop, then we multiply the complexity.
- Complexity for each input is calculated separately if they don't have the same length.
- Drop the less significant terms.

## Bonus
If you want to dig deeper to this topic, watch the video!
{{< youtube RWg_UOD98v0>}}
 
