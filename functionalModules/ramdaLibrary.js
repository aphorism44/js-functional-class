//module 3
import R from 'ramda';
import User from './models/User.js';

const ramdaLibrary = {

  testRambda() {
    let arrayLetters = ['a','b','c','d','e'];
    let a1 = R.drop(2, arrayLetters);
    let a2 = R.dropLast(2, arrayLetters);
    console.log(a1);
    console.log(a2);

    let orders = [ [1.25], [5.00, 10.23], [2.00, [1.50, 2.75] ] ];
    let flatOrders = R.flatten(orders);
    console.log(flatOrders);

    let none1 = !arrayLetters.some((l) => {return l === 'z';});
    let none2 = R.none((l) => {return l === 'z'}, arrayLetters);
    console.log(none1);
    console.log(none2);

    let users = [
      new User("jesse", 557)
      , new User("sutton", 982)
      , new User("burns", 323)
    ];

    let nameList = R.pluck('name', users);
    console.log(nameList);

    let rejectList = R.reject((l) => { return l === 'a'; }, arrayLetters);
    console.log(rejectList);

    let testUser = new User("jesse", 557);
    let idLessUser1 = R.omit(['id'], testUser);
    let idLessUser2 = R.pick(['name'], testUser);
    console.log(idLessUser1);
    console.log(idLessUser2);

    //R.path is good for catching undefined

    //SQL equivalent - SELECT
    let idList = R.project(['id'], users);
    console.log(idList);

  }


}

export default ramdaLibrary;
