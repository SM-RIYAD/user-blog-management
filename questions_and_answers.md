<div align="center">
  <img height="60" src="https://edurev.gumlet.io/AllImages/original/ApplicationImages/CourseImages/944e5d47-8c55-4a89-91e5-22ab5f2798fc_CI.png">
  <h1>MCQ TEST</h1>
</div>

###### 1. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let greeting;
greetign = {};
console.log(greetign);
```

- A: `{}`
- B: `ReferenceError: greetign is not defined`
- C: `undefined`

<details><summary><b>Answer</b></summary>
<p>

#### Answer:B ReferenceError: greetign is not defined.
?

<i>
The correct answer is B: ReferenceError: greetign is not defined.

In the given code, there is a typographical error. The variable is declared as greeting but later accessed as greetign. JavaScript is case-sensitive, so greetign is not defined, resulting in a ReferenceError. Option B is the correct answer as it indicates that there is an issue with the variable name.</i>

</p>
</details>

###### 2. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sum(a, b) {
  return a + b;
}

sum(1, "2");
```

- A: `NaN`
- B: `TypeError`
- C: `"12"`
- D: `3`

<details><summary><b>Answer</b></summary>
<p>

#### Answer:C: "12" 

<i>In JavaScript, when you use the + operator with a string and a number, JavaScript converts the number to a string and performs string concatenation. In this case, the number 1 is implicitly converted to a string, and then it is concatenated with the string "2", resulting in the string "12".</i>

</p>
</details>

###### 3. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
const food = ["🍕", "🍫", "🥑", "🍔"];
const info = { favoriteFood: food[0] };

info.favoriteFood = "🍝";

console.log(food);
```

- A: `['🍕', '🍫', '🥑', '🍔']`
- B: `['🍝', '🍫', '🥑', '🍔']`
- C: `['🍝', '🍕', '🍫', '🥑', '🍔']`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: A: ['🍕', '🍫', '🥑', '🍔'].

<i>The info object holds a reference to the original array food, not a copy of it. When info.favoriteFood is changed to "🍝", it doesn't affect the original food array. Therefore, the console.log(food) statement will output the original array, which is ['🍕', '🍫', '🥑', '🍔'].</i>

</p>
</details>

###### 4. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sayHi(name) {
  return `Hi there, ${name}`;
}

console.log(sayHi());
```

- A: `Hi there,`
- B: `Hi there, undefined`
- C: `Hi there, null`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer:B: Hi there, undefined.

<i>In the sayHi function, there is a parameter name which is not given a default value. When you call sayHi() without passing any argument, the name parameter inside the function is undefined. Therefore, the function returns "Hi there, undefined".</i>

</p>
</details>

###### 5. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let count = 0;
const nums = [0, 1, 2, 3];

nums.forEach((num) => {
  if (num) count += 1;
});

console.log(count);
```

- A: 1
- B: 2
- C: 3
- D: 4

<details><summary><b>Answer</b></summary>
<p>

#### Answer:  B: 2.

<i>In the given code, the forEach method iterates over the nums array. The if (num) statement checks if the current number is truthy (non-zero). For the array elements [0, 1, 2, 3], the numbers 1, 2, and 3 are truthy, so the count variable is incremented for each of these values. Therefore, the final value of count after the forEach loop is 2.</i>

</p>
</details>
