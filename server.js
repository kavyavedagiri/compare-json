// const { identifier } = require('@babel/types');
// var fs = require('fs');

// function loadJSON(filename=''){
// return JSON.parse(
//     fs.existsSync(filename)
//     ?fs.readFileSync(filename).toString()
//     :'null'
// )
// }





// // // console.log(userLinks_source)
// // //  var jsonString1 = '{"id":2,"name":"Singapore, officially the Republic of Singapore, is a sovereign island city-state in maritime Southeast Asia.","group":1}';
// // //  var jsonString2 = '{"id":1,"name":" officially the Republic of Singapore, is a sovereign island city-state in maritime Southeast Asia.","group":1}';
 

// // //  var jsonObject1 = JSON.parse(jsonString1);
// // //  var jsonObject2 = JSON.parse(jsonString2);
 
// // //  var keys = Object.keys(jsonObject1);
// // //  for (var i = 0; i < keys.length; i++) {

// // //    var key = keys[i];

// // //    if (jsonObject1[key] != jsonObject2[key] && jsonObject1[key] < jsonObject2[key] ) {

// // //      console.log(key + " value changed from '" + jsonObject1[key] + "'added to '" + jsonObject2[key] + "'");

// // //    }else if(jsonObject1[key] != jsonObject2[key] && jsonObject1[key] > jsonObject2[key]){

// // //     console.log(key + " value changed from '" + jsonObject1[key] + "'deleted from '" + jsonObject2[key] + "'");
// // //    }else{
// // //     console.log( " nochanges ");

// // //    }
// // //  }
// // // var obj1 = {"id":1,"name":" officially the Republic of Singapore, is a sovereign island city-state in maritime Southeast Asia.","group":1};
// // // var obj2 = {"id":2,"name":" officially the Republic of Singapore, is a sovereign island city-state in maritime Southeast Asia.","group":1};

// // // var flag=true;

// // // if(Object.keys(obj1).length==Object.keys(obj2).length){
// // //     for(key in obj1) { 
// // //         if(obj1[key] == obj2[key]) {
// // //             console.log("is object equal"+flag);
// // //         }else if(obj1[key] > obj2[key]){
// // //             console.log("is object data added"+flag);
// // //         }else if(obj1[key] < obj2[key]){
// // //             console.log("is object data removed"+flag);
// // //         }else if(obj1[key] !== obj2[key] && obj1[key] < obj2[key]){
// // //             console.log("is object data modified"+flag);
// // //         }


        
// // //     }
// // // }
// // // else {
// // //     flag=false;
// // // }
// var fromDB=loadJSON('fromDB.json');
// var userVersion=loadJSON('userVersion.json');

// var links_user = userVersion.links
// var links_fromDB = fromDB.links
// var nodes_user = userVersion.nodes
// var nodes_fromDB = fromDB.nodes
// var deepDiffLog = function () {
//   return {
//       VALUE_CREATED: 'created',
//       VALUE_UPDATED: 'updated',
//       VALUE_DELETED: 'deleted',
//       VALUE_UNCHANGED: '---',
//       map: function (obj1, obj2) {
//           if (this.isFunction(obj1) || this.isFunction(obj2)) {
//               throw 'Invalid argument. Function given, object expected.';
//           }
//           if (this.isValue(obj1) || this.isValue(obj2)) {
//               let returnObj = {
//                   type: this.compareValues(obj1, obj2),
//                   original: obj1,
//                   updated: obj2,
//               };
//               if (returnObj.type != this.VALUE_UNCHANGED) {
//                   return returnObj;
                  
//               }
//               return undefined;
//           }

//           var diff = {};
//           let foundKeys = {};
//           for (var key in obj1) {
//               if (this.isFunction(obj1[key])) {
//                   continue;

//               }

//               var value2 = undefined;
//               if (obj2[key] !== undefined) {
//                   value2 = obj2[key];
//               }

//               let mapValue = this.map(obj1[key], value2);
//               foundKeys[key] = true;
//               if (mapValue) {
//                   diff[key] = mapValue;
//               }
//           }
//           for (var key in obj2) {
//               if (this.isFunction(obj2[key]) || foundKeys[key] !== undefined) {
//                   continue;
//               }

//               let mapValue = this.map(undefined, obj2[key]);
//               if (mapValue) {
//                   diff[key] = mapValue;
//               }
//           }

          
//           if (Object.keys(diff).length > 0) {
//               return diff;
             
//           }
//           return undefined;
//       },
//       compareValues: function (value1, value2) {
//           if (value1 === value2) {
//               return this.VALUE_UNCHANGED;
//           }
//           if (this.isDate(value1) && this.isDate(value2) && value1.getTime() === value2.getTime()) {
//               return this.VALUE_UNCHANGED;
//           }
//           if (value1 === undefined) {
//               return this.VALUE_CREATED;
//           }
//           if (value2 === undefined) {
//               return this.VALUE_DELETED;
//           }
//           return this.VALUE_UPDATED;
//       },
//       isFunction: function (x) {
//           return Object.prototype.toString.call(x) === '[object Function]';
//       },
//       isArray: function (x) {
//           return Object.prototype.toString.call(x) === '[object Array]';
//       },
//       isDate: function (x) {
//           return Object.prototype.toString.call(x) === '[object Date]';
//       },
//       isObject: function (x) {
//           return Object.prototype.toString.call(x) === '[object Object]';
//       },
//       isValue: function (x) {
//           return !this.isObject(x) && !this.isArray(x);
//       }
//   }
// }();

// // console.log(value2)



// var fnodefrom =fromDB.nodes[1]
// var fnodeto=userVersion.nodes[2]
// var result = deepDiff.map({nodes:fnodefrom},{nodes:fnodeto});
  
// //   var result1 = deepDiff.map({ 
// //     links: [{id:13,"name":"Majulah_Singapura","group":2,"uri":"bn:00460874n"}]
// //   },
// //   {
// //     links:[{id:1,"name":"Majulah_Singapura","group":2,"uri":"bn:00460874n"},{"id":13,"name":"Majulah_Singapura","group":2,"uri":"bn:00460874n"}]
// //   });

//  console.log( result);
// // fs.writeFile ("input.json", JSON.stringify(result), function(err) {
// //   if (err) throw err;
// //   console.log('complete');
// //   }
// // );
