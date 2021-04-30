// const { identifier } = require('@babel/types');
// var fs = require('fs');

// function loadJSON(filename=''){
// return JSON.parse(
//     fs.existsSync(filename)
//     ?fs.readFileSync(filename).toString()
//     :'null'
// )
// }

//  var fromDB =loadJSON('fromDB.json');
//  var userVersion=loadJSON('userVersion.json');

// var links_user = userVersion.links
// var links_fromDB = fromDB.links



// // console.log(userLinks_source)
// //  var jsonString1 = '{"id":2,"name":"Singapore, officially the Republic of Singapore, is a sovereign island city-state in maritime Southeast Asia.","group":1}';
// //  var jsonString2 = '{"id":1,"name":" officially the Republic of Singapore, is a sovereign island city-state in maritime Southeast Asia.","group":1}';
 

// //  var jsonObject1 = JSON.parse(jsonString1);
// //  var jsonObject2 = JSON.parse(jsonString2);
 
// //  var keys = Object.keys(jsonObject1);
// //  for (var i = 0; i < keys.length; i++) {

// //    var key = keys[i];

// //    if (jsonObject1[key] != jsonObject2[key] && jsonObject1[key] < jsonObject2[key] ) {

// //      console.log(key + " value changed from '" + jsonObject1[key] + "'added to '" + jsonObject2[key] + "'");

// //    }else if(jsonObject1[key] != jsonObject2[key] && jsonObject1[key] > jsonObject2[key]){

// //     console.log(key + " value changed from '" + jsonObject1[key] + "'deleted from '" + jsonObject2[key] + "'");
// //    }else{
// //     console.log( " nochanges ");

// //    }
// //  }
// // var obj1 = {"id":1,"name":" officially the Republic of Singapore, is a sovereign island city-state in maritime Southeast Asia.","group":1};
// // var obj2 = {"id":2,"name":" officially the Republic of Singapore, is a sovereign island city-state in maritime Southeast Asia.","group":1};

// // var flag=true;

// // if(Object.keys(obj1).length==Object.keys(obj2).length){
// //     for(key in obj1) { 
// //         if(obj1[key] == obj2[key]) {
// //             console.log("is object equal"+flag);
// //         }else if(obj1[key] > obj2[key]){
// //             console.log("is object data added"+flag);
// //         }else if(obj1[key] < obj2[key]){
// //             console.log("is object data removed"+flag);
// //         }else if(obj1[key] !== obj2[key] && obj1[key] < obj2[key]){
// //             console.log("is object data modified"+flag);
// //         }


        
// //     }
// // }
// // else {
// //     flag=false;
// // }
// var deepDiff = function() {
//     return {
//         VALUE_CREATED: 'created',
//         VALUE_UPDATED: 'updated',
//         VALUE_DELETED: 'deleted',
//         VALUE_UNCHANGED: 'unchanged',
//         map: function(obj1, obj2) {
//             if (this.isFunction(obj1) || this.isFunction(obj2)) {
//                 throw 'Invalid argument. Function given, object expected.';
//             }
//             if (this.isValue(obj1) || this.isValue(obj2)) {
//                 return {type: this.compareValues(obj1, obj2), data: obj1};
//             }
            
//             var diff = {};
//             for (var key in obj1) {
//                 if (this.isFunction(obj1[key])) {
//                     continue;
//                 }
                
//                 var value2 = undefined;
//                 if ('undefined' != typeof(obj2[key])) {
//                     value2 = obj2[key];
//                 }
                
//                 diff[key] = this.map(obj1[key], value2);
//             }
//             for (var key in obj2) {
//                 if (this.isFunction(obj2[key]) || ('undefined' != typeof(diff[key]))) {
//                     continue;
//                 }
                
//                 diff[key] = this.map(undefined, obj2[key]);
//             }
            
//             return diff;
            
//         },
//         compareValues: function(value1, value2) {
//             if (value1 === value2) {
//                 return this.VALUE_UNCHANGED;
//             }
//             if ('undefined' == typeof(value1)) {
//                 return this.VALUE_CREATED;
//             }
//             if ('undefined' == typeof(value2)) {
//                 return this.VALUE_DELETED;
//             }
            
//             return this.VALUE_UPDATED;
//         },
//         isFunction: function(obj) {
//             return 'function' == typeof(obj);
//         },
//         isValue: function(obj) {
//             return ('object' != typeof(obj)) && ('array' != typeof(obj));
//         }
//     }
// }();


//   var result = deepDiff.map({
     
//         links:{"source":1,"target":30}
//   },
//   {
   
//         links:{"source":1,"target":2} 
  
//   });
// console.log(result);