//module 5
import Immutable from 'seamless-immutable';
import R from 'ramda';
import Item from './models/Item.js';

const immutability = {

  testImmutability() {
    //native JS has _no_ immutable structures
    //const = read-only, not immutable
    //will use "seamless-immutable" library, which uses native JS objects
    let arrayImm = Immutable([3, 5, 1, 2, 4]);
    //arrayImm.sort(); - this will throw an error; must use a pure function
    const diff = (a, b) => { return a - b; };
    arrayImm = R.sort(diff, arrayImm);
    console.log(arrayImm);
    //can copy it into mutable version - NOT WORKING
    //let arrayNormal = arrayImm.Immutable.asMutable();
    //arrayNormal.push(6);
    //console.log(arrayNormal);
    let i1 = Immutable(new Item("hammer", true));
    console.log(i1);
    //can use Immutable methods to change it
    let i2 = i1.set('active', false);
    console.log(i2);

  }



}

export default immutability;
