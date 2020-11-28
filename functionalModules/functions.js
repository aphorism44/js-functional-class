//module 4
import Item from './models/Item.js';
import User from './models/User.js';

const functions = {

  testFunctions() {

    let itemList = [
      new Item("wrench", true)
      , new Item("hammer", false)
      , new Item("plane", true)
      , new Item("saw", false)
      , new Item("screwdriver", true)
    ];
    const isActive = (item) => { return item.active; };
    let activeList = itemList.filter(isActive);
    console.log(activeList);

    let users = [
      new User("jesse", 557)
      , new User("sutton", 982)
      , new User("burns", 323)
    ];
    //returning functions; currying; Ramda has a "curry" function
    const byId = (id) => {
      return (item) => {
        return item.id === id;
      }
    };
    let jesseUser = users.find(byId(557));
    console.log(jesseUser);

    //pure functions
    let users2 = users.concat(new User("lanoue", 392));
    console.log(users);
    console.log(users2);

    //function composition - R.pipe is extremely good for this
    const difference = (a, b) => { return a - b; };
    const abs = (a) => { return a > 0 ? a : 0 - a; };
    const absDiff = (a,b) => { return abs(difference(a, b));};
    console.log(absDiff(1, 2));
  }



}

export default functions;
