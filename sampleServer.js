const fs = require('fs');
const rawToParsed1 = JSON.parse(fs.readFileSync('fromDB.json'));
const rawToParsed2 = JSON.parse(fs.readFileSync('userVersion.json'));


function arrayDiff(arr1, arr2) {
  const arrDiffCollection = [];
  for (var i = 0; i < arr1.length || i < arr2.length; i++) {
    const diff = computeDiff(arr1[i], arr2[i]);
    arrDiffCollection.push(diff);
  }
  return arrDiffCollection;
}

function objectDiff(object1, object2) {
  let diff = {};
  let differ = false;
  let keys = new Set(Object.keys(object1));

  for (let key in object2) {
    keys.add(key);
  }
  for (let key of keys) {
    let foundDiff = computeDiff(object1[key], object2[key]);
    if (foundDiff) {
      diff[key] = foundDiff;
      differ = true;
    }
  }
  if (differ) {
    return diff;
  }
}


function computeDiff(thing1, thing2) {
  if (typeof thing1 === 'object' && typeof thing2 === 'object') {
    if (Array.isArray(thing1) && Array.isArray(thing2)) {
      return arrayDiff(thing1, thing2);
    }
    return objectDiff(thing1, thing2);
  }
  if (thing1 !== thing2) {
      if(thing1 > thing2){
        return [thing1, thing2+"<---deleted"];
      }else if(thing1 < thing2){
        return [thing1, thing2+"<---added"];
      }
    
  }

  
}

console.log(
  'These arrays represent the elements that are different in the test JSON files. null represents missing elements:',
  JSON.stringify(computeDiff(rawToParsed1, rawToParsed2), null, 2)
);
