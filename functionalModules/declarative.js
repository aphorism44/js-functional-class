//module 3
import User from './models/User.js';

const declarative = {

  testDeclarativeModule() { console.log("in declarative module"); }
  //basic list functions
  , testArrayFunctions() {
    let users = [
      new User("jesse", 557)
      , new User("sutton", 982)
      , new User("burns", 323)
    ];
    let u1 = users.find(u => { return u.id === 323; });
    console.log(u1.name);
    let allGreater900 = users.every(u => { return u.id > 900; });
    console.log(allGreater900);
    let oneGreater900 = users.some(u => { return u.id > 900; });
    console.log(oneGreater900);
    let greater400 = users.filter(u => { return u.id > 400 });
    console.log(greater400);
    let changedName = users.map((u) => { return u.name + "-san" });
    console.log(changedName);
    let sum = users.reduce((accumulator, u) => { return accumulator + u.id;  }, 0);
    console.log(sum);
    //chaining functions
    let numbers = [2, 4, 6, 10, 16];
    //subtract 1 from each, and if it's divisible by 3, sum it
    let weirdSum = numbers.map((n) => { return n - 1; })
      .filter((n) => { return n % 3 === 0; })
      .reduce((accumulator, n) => { return accumulator + n;  }, 0);
    console.log(weirdSum);
  }



}

export default declarative;
