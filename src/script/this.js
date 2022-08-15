/* Object literal */
let objectLiteral = {
  name: "john",
  age: 35,
  getThis(){
    console.log("What is this? ", this)
  }
}

let objectLiteralArrow = {
  name: "john",
  age: 35,
  getThis: () => console.log("What is this? ", this),
  getThisOuter(){
    const getThisInner = () => console.log("What is this? ", this);
    getThisInner()
  }
}

export {objectLiteral, objectLiteralArrow}