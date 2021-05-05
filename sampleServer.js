
const { identifier } = require('@babel/types');
var fs = require('fs');

function loadJSON(filename=''){
return JSON.parse(
    fs.existsSync(filename)
    ?fs.readFileSync(filename).toString()
    :'null'
)
}

var fromDB=loadJSON('fromDB.json');
var userVersion=loadJSON('userVersion.json');

// var links_user = userVersion.links
// var links_fromDB = fromDB.links
var nodes_user = userVersion.nodes
var nodes_fromDB = fromDB.nodes

// var json1 =  nodes_fromDB

// var json2 = nodes_user

var deepDiffLog = function () {
  return {
      VALUE_CREATED: 'created',
      VALUE_UPDATED: 'updated',
      VALUE_DELETED: 'deleted',
      VALUE_UNCHANGED: '---',
      map: function (obj1, obj2) {
          if (this.isFunction(obj1) || this.isFunction(obj2)) {
              throw 'Invalid argument. Function given, object expected.';
          }
          if (this.isValue(obj1) || this.isValue(obj2)) {
              let returnObj = {
                  type: this.compareValues(obj1, obj2),
                  
                  updated: obj2,
              };
              if (returnObj.type != this.VALUE_UNCHANGED) {
                  return returnObj;
                  
              }
              return undefined;
          }

          var diff = {};
          let foundKeys = {};
          for (var key in obj1) {
              if (this.isFunction(obj1[key])) {
                  continue;

              }

              var value2 = undefined;
              if (obj2[key] !== undefined) {
                  value2 = obj2[key];
              }

              let mapValue = this.map(obj1[key], value2);
              foundKeys[key] = true;
              if (mapValue) {
                  diff[key] = mapValue;
              }
          }
          for (var key in obj2) {
              if (this.isFunction(obj2[key]) || foundKeys[key] !== undefined) {
                  continue;
              }

              let mapValue = this.map(undefined, obj2[key]);
              if (mapValue) {
                  diff[key] = mapValue;
              }
          }

          
          if (Object.keys(diff).length > 0) {
              return diff;
             
          }
          return undefined;
      },
      compareValues: function (value1, value2) {
          if (value1 === value2) {
              return this.VALUE_UNCHANGED;
          }
          if (this.isDate(value1) && this.isDate(value2) && value1.getTime() === value2.getTime()) {
              return this.VALUE_UNCHANGED;
          }
          if (value1 === undefined) {
              return this.VALUE_CREATED;
          }
          if (value2 === undefined) {
              return this.VALUE_DELETED;
          }
          return this.VALUE_UPDATED;
      },
      isFunction: function (x) {
          return Object.prototype.toString.call(x) === '[object Function]';
      },
      isArray: function (x) {
          return Object.prototype.toString.call(x) === '[object Array]';
      },
      isDate: function (x) {
          return Object.prototype.toString.call(x) === '[object Date]';
      },
      isObject: function (x) {
          return Object.prototype.toString.call(x) === '[object Object]';
      },
      isValue: function (x) {
          return !this.isObject(x) && !this.isArray(x);
      }
  }
}();
// var fnodefrom =fromDB.nodes
// var fnodeto=userVersion.nodes
var resultLog = deepDiffLog.map(fromDB,userVersion);

// console.log(JSON.stringify(resultLog));
fs.writeFile ("log.json", JSON.stringify(resultLog,null, 1), function(err) {
  if (err) throw err;
     console.log('complete');
  }
);
    
var deepDiff = function () {
  return {
   
    map: function(obj1, obj2) {
      if (this.isFunction(obj1) || this.isFunction(obj2)) {
        throw 'Invalid argument. Function given, object expected.';
      }
      if (this.isValue(obj1) || this.isValue(obj2)) {
        return obj1 === undefined ? obj2 : obj1
      }
   
      var diff = {};
      for (var key in obj1) {
        if (this.isFunction(obj1[key])) {
          continue;
        }

        var value2 = undefined;
        if (obj2[key] !== undefined) {
          value2 = obj2[key];
        }

        diff[key] = this.map(obj1[key], value2);
      }
      for (var key in obj2) {
        if (this.isFunction(obj2[key]) || diff[key] !== undefined) {
          continue;
        }

        diff[key] = this.map(undefined, obj2[key]);
      }

      return diff;

    },
   
    isFunction: function (x) {
      return Object.prototype.toString.call(x) === '[object Function]';
    },
    isArray: function (x) {
      return Object.prototype.toString.call(x) === '[object Array]';
    },
    isDate: function (x) {
      return Object.prototype.toString.call(x) === '[object Date]';
    },
    isObject: function (x) {
      return Object.prototype.toString.call(x) === '[object Object]';
    },
    isValue: function (x) {
      return !this.isObject(x) && !this.isArray(x);
    }
  }
}();

var finalResultnodes =[];
 for(i = 0;i <userVersion.nodes.length; i++){
    
  var nodes_user = userVersion.nodes[i]
  var nodes_fromDB = fromDB.nodes[i]
  var result_nodes = deepDiff.map(nodes_user,nodes_fromDB);
  // console.log(JSON.stringify(result_nodes));
   finalResultnodes.push(result_nodes);
}

var finalResultLinks =[];
 for(i = 0;i <userVersion.links.length; i++){
    
  var links_user = userVersion.links[i]
  var links_fromDB = fromDB.links[i]
  var result_links = deepDiff.map(links_user,links_fromDB);
 
   finalResultLinks.push(result_links);
}

fs.writeFile ("input.json", JSON.stringify({"nodes":finalResultnodes,"links":finalResultLinks},null, 1), function(err) {
  if (err) throw err;
     console.log('complete');
  }
);