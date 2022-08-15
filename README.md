# Javascript Concepts

To go over some of the tougher to grasp concepts in JavaScript with as much examples as possible.

## this

---

### Object literal

> An object instantiated with prefined keys and values which can be changed later if needed.

- Object literal with normal method

```JavaScript
let objectLiteral = {
  name: "john",
  age: 35,
  getThis(){
    console.log("What is this? ", this) // shows where 'this' is pointing to
  }
}

objectLiteral.getThis() // [object Object] Returns object Literal
```

- Object literal with arrow method

```JavaScript
let objectLiteralArrow = {
  name: "john",
  age: 35,
  getThis: () => console.log("What is this? Arrow function", this), // this with arrow function
  getThisOuter(){ // arrow function wrapped in normal function
    const getThisInner = () => console.log("What is this? Arrow wrapped in normal function", this);
    getThisInner()
  }
}

objectLiteralArrow.getThis() // [object Window] - returns window object
objectLiteralArrow.getThisOuter() // [object Object] - returns object literal
```
