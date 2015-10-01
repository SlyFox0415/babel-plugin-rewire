'use strict';

var out = _outOrig;
let __$Getters__ = [];
let __$Setters__ = [];
let __$Resetters__ = [];

function __GetDependency__(name) {
  return __$Getters__[name]();
}

function __Rewire__(name, value) {
  __$Setters__[name](value);
}

function __ResetDependency__(name) {
  __$Resetters__[name]();
}

let __RewireAPI__ = {
  '__GetDependency__': __GetDependency__,
  '__get__': __GetDependency__,
  '__Rewire__': __Rewire__,
  '__set__': __Rewire__,
  '__ResetDependency__': __ResetDependency__
};
var MyModule = require('MyModule');

var _MyModule = MyModule;

__$Getters__['MyModule'] = function () {
  return MyModule;
};

__$Setters__['MyModule'] = function (value) {
  MyModule = value;
};

__$Resetters__['MyModule'] = function () {
  MyModule = _MyModule;
};

function _outOrig(todo) {
  return MyModule.something(todo);
}

var _out = out;

__$Getters__['out'] = function () {
  return out;
};

__$Setters__['out'] = function (value) {
  out = value;
};

__$Resetters__['out'] = function () {
  out = _out;
};

module.exports.out = out;
module.exports.other = 'Foo';

if (typeof module.exports === 'object' || typeof module.exports === 'function') {
  Object.defineProperty(module.exports, '__Rewire__', {
    'value': __Rewire__,
    'enumerable': false,
    'configurable': true
  });
  Object.defineProperty(module.exports, '__set__', {
    'value': __Rewire__,
    'enumerable': false,
    'configurable': true
  });
  Object.defineProperty(module.exports, '__ResetDependency__', {
    'value': __ResetDependency__,
    'enumerable': false,
    'configurable': true
  });
  Object.defineProperty(module.exports, '__GetDependency__', {
    'value': __GetDependency__,
    'enumerable': false,
    'configurable': true
  });
  Object.defineProperty(module.exports, '__get__', {
    'value': __GetDependency__,
    'enumerable': false,
    'configurable': true
  });
  Object.defineProperty(module.exports, '__RewireAPI__', {
    'value': __RewireAPI__,
    'enumerable': false,
    'configurable': true
  });
}