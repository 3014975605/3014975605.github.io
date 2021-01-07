//单例模式
// 给我一个构造函数，我就让他变成单例模式
var getSingle = function (fn){//管理单例逻辑
    var instance;
    return function (){
      // if (instance) {
      //   return instance;
      // }
      // return instance = new fn();
      return instance || (instance = new fn());
    }
  };
  // 发布订阅模式，是一种处理一对多的关系
function Observe(){
  this.cacheList = {};// 缓存列表
  // {
  //   'houseTypeA': [fn1,fn2,fn3],
  //   'houseTypeB': [fn1,fn2,fn3,fn4],
  //   'houseTypeC': [fn1,fn2]
  // }
}
Observe.prototype = {
  constructor: Observe,
  // 发布:取出对应的消息类型，执行所有回调函数传入发布的消息
  publish: function (type,message){
    if (!this.cacheList[type]){
      return;
    }
    this.cacheList[type].forEach(function (cb){
      cb(message);
    });
  },
  // 订阅:往某个消息类型中添加回调函数
  subscribe: function (type,callback){
    // 判断对象是否有type此属性
    if (!this.cacheList[type]) {
      this.cacheList[type] = [];
    }
    // 往对应的消息类型插入回调函数
    this.cacheList[type].push(callback);
  },
  // 取消订阅
  unsubscribe: function (type,callback){
    if (!type) {// 直接调用，没有任何参数
      this.cacheList = {};
    } else if (type&&!callback) {// 删除某个消息类型的所有回调函数
      delete this.cacheList[type];
    } else {// 删除某个消息类型中的某个回调函数
      this.cacheList[type] = this.cacheList[type].filter(function (cb){
        return cb !== callback;
      })
    }
  }
}
// 函数防抖
function debounce(delay,fnName){
  var timer;
  return function (){
      clearTimeout(timer);
      timer = setTimeout(function (){
          fnName();
      },delay);
  }
}
const obs = new Observe();
  export {
      getSingle,
      obs,
      debounce
  }


