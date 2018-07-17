var todo =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _typeof = typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; };\n\nvar Names = [];\n// document.querySelector('tr').style.background = '';\n// document.getElementById('name').value = '';\n// document.getElementById('description').value = '';\n// new Date(document.getElementById('date').value = '');\n//dae.toUTCString();\n\nmodule.exports = {\n\tdata: {\n\t\ttodos: []\n\t},\n\tcreateTodo: function createTodo(that) {\n\t\t//console.log(that.attributes['class'].value)description   \"0\" + d.getDate()).slice(-2)\n\t\tvar name = document.getElementById('name').value;\n\t\tvar description = document.getElementById('description').value;\n\t\tvar dae = new Date(document.getElementById('date').value);\n\t\tvar addOneToMonth = dae.getMonth() + 1;\n\t\t// console.log(addOneToMonth)\n\t\tvar date = dae.getFullYear() + '-' + ('0' + addOneToMonth).slice(-2) + '-' + dae.getDate();\n\t\t//  dae.toLocaleDateString();\n\t\tvar tie = document.getElementById('time').value;\n\t\t// let position = me.indexOf(':')\n\t\t//let time = me.replace(':', '-')\n\t\t// console.log(typeof dae.getMonth())\n\t\t// console.log(trimmingMe);\n\t\tconsole.log(document.getElementById('date').value);\n\t\tvar todo = { name: name, description: description, date: date, tie: tie };\n\t\t//let our = Object.assign({}, todo);\n\t\tthis.data.todos.push(todo);\n\t\tthis.displayTodos();\n\t\t// console.log(this.data.todos);\n\t\t//Names.push(todo)\n\t\t// console.log(document.getElementsByClassName('todoName')[1].className)// for(let myTodo of this.data.todos)// {\t// document.getElementById('todoName').innerHTML = myTodo.name;\t// let row = document.createElement('tr');\t// let column = document.createElement('td');\t// let textIn = document.createTextNode(todo.name);\t// row.appendChild(column).appendChild(textIn);\t// let place = document.getElementById('tableBody');\t// place.appendChild(row);\n\t\t// let column1 = document.createElement('td');\t// let textIn1 = document.createTextNode(todo.description);\t// row.appendChild(column1).appendChild(textIn1);\t// place.appendChild(row);\n\t\t// let column2 = document.createElement('td');\t// let textIn2 = document.createTextNode(todo.date);\t// row.appendChild(column2).appendChild(textIn2);\t// // let place2 = document.getElementsById('tableBody');\t// place.appendChild(row);\t\t// todos[];\n\t\t// +'<br>'\n\t\t// }\n\t},\n\tdisplayTodos: function displayTodos() {\n\t\tvar todos = this.data.todos;\n\t\tdocument.getElementById('tableBody').innerHTML = '';\n\t\tvar _iteratorNormalCompletion = true;\n\t\tvar _didIteratorError = false;\n\t\tvar _iteratorError = undefined;\n\n\t\ttry {\n\t\t\tfor (var _iterator = todos[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {\n\t\t\t\tvar todo = _step.value;\n\n\t\t\t\t// document.getElementById('todoName').innerHTML = myTodo.name;\n\t\t\t\tvar row = document.createElement('tr');\n\t\t\t\trow.className = \"todoundone\";\n\n\t\t\t\tvar column = document.createElement('td');\n\t\t\t\tvar textIn = document.createTextNode(todo.name);\n\t\t\t\trow.appendChild(column).appendChild(textIn);\n\t\t\t\tvar place = document.getElementById('tableBody');\n\t\t\t\tplace.appendChild(row);\n\n\t\t\t\tvar column1 = document.createElement('td');\n\t\t\t\tvar textIn1 = document.createTextNode(todo.description);\n\t\t\t\trow.appendChild(column1).appendChild(textIn1);\n\t\t\t\tplace.appendChild(row);\n\n\t\t\t\tvar column2 = document.createElement('td');\n\t\t\t\tvar textIn2 = document.createTextNode(todo.date);\n\t\t\t\trow.appendChild(column2).appendChild(textIn2);\n\n\t\t\t\tvar column3 = document.createElement('td');\n\n\t\t\t\tvar delbutton = document.createElement(\"button\");\n\t\t\t\tvar textInDel = document.createTextNode('Delete'); // '<buttton class=\"btn btn-danger\" data-index=\"\">Delete</button>'\n\t\t\t\tdelbutton.className = \"btn btn-danger\";\n\t\t\t\tdelbutton.setAttribute('data-index', todos.indexOf(todo));\n\t\t\t\tdelbutton.setAttribute('onclick', \"todo.deleteTodo(this)\");\n\n\t\t\t\tvar readbutton = document.createElement('button');\n\t\t\t\tvar textInRead = document.createTextNode(\"Done\");\n\t\t\t\treadbutton.className = \"btn btn-info\";\n\t\t\t\treadbutton.setAttribute('onclick', 'todo.doneTodo(this)');\n\t\t\t\treadbutton.setAttribute('data-index', todos.indexOf(todo));\n\n\t\t\t\t// readbutton.setAttribute('data-index', 'block')\n\n\t\t\t\tvar renamebutton = document.createElement('button');\n\t\t\t\tvar textInRename = document.createTextNode(\"Edit\");\n\t\t\t\trenamebutton.className = \"btn btn-primary rename\";\n\t\t\t\trenamebutton.setAttribute('onclick', 'todo.editTodo(this)');\n\t\t\t\trenamebutton.setAttribute('data-index', todos.indexOf(todo));\n\n\t\t\t\t//console.log(todos.indexOf(todo))\n\t\t\t\trow.appendChild(column3).appendChild(delbutton).appendChild(textInDel);\n\t\t\t\tcolumn3.appendChild(readbutton).appendChild(textInRead);\n\t\t\t\tcolumn3.appendChild(renamebutton).appendChild(textInRename);\n\t\t\t\t// row.appendChild(column3)\n\t\t\t\t// let place2 = document.getElementsById('tableBody');\n\t\t\t\tplace.appendChild(row);\n\n\t\t\t\t// todos[];\n\n\t\t\t\t// +'<br>'\n\t\t\t}\n\t\t} catch (err) {\n\t\t\t_didIteratorError = true;\n\t\t\t_iteratorError = err;\n\t\t} finally {\n\t\t\ttry {\n\t\t\t\tif (!_iteratorNormalCompletion && _iterator.return) {\n\t\t\t\t\t_iterator.return();\n\t\t\t\t}\n\t\t\t} finally {\n\t\t\t\tif (_didIteratorError) {\n\t\t\t\t\tthrow _iteratorError;\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t},\n\n\tdeleteTodo: function deleteTodo(here) {\n\t\tvar todos = this.data.todos;\n\t\tvar location = parseInt(here.attributes['data-index'].value);\n\t\tconsole.log(typeof location === 'undefined' ? 'undefined' : _typeof(location));\n\t\ttodos.splice(location, 1);\n\t\tthis.displayTodos();\n\t},\n\tdelayBefore: function delayBefore() {\n\t\tsetTimeout(deleteAfterDone, 3000);\n\t},\n\tdeleteAfterDone: function deleteAfterDone(take) {\n\t\tvar todos = this.data.todos;\n\t\tconsole.log(todos);\n\t\ttodos.splice(take, 1);\n\t\tthis.displayTodos();\n\t},\n\tdoneTodo: function doneTodo(here) {\n\t\t//here.className = \"tododone\";\n\t\tvar todos = this.data.todos;\n\t\tvar valueHere = parseInt(here.attributes['data-index'].value);\n\t\tconsole.log(valueHere);\n\t\tvar ff = here.parentElement;\n\t\tvar fff = ff.parentElement;\n\t\tfff.className = \"tododone\";\n\t\t// this.deleteAfterDone(valueHere);\n\t\t//this.delayBefore();\n\t\t// setInterval(this.deleteAfterDone, 2000, valueHere)\n\t\tsetTimeout(function (todos) {\n\t\t\tconsole.log(todos);\n\t\t\t//todos.splice(take, 1)\n\t\t\tthis.displayTodos();\n\t\t}, 2000);\n\t},\n\tupdateTodo: function updateTodo(edited) {\n\t\tvar vv = parseInt(edited.attributes['data-index'].value);\n\t\tconsole.log(vv);\n\t\t// let name = document.getElementById('name').value;\n\t\t// let description = document.getElementById('description').value;\n\t\t// let dae = new Date(document.getElementById('date').value);\n\t\t// let addOneToMonth = dae.getMonth() + 1;\n\t\t// let date = `${dae.getFullYear()}-${('0' + addOneToMonth).slice(-2)}-${dae.getDate()}`\n\t\t// //  dae.toLocaleDateString();\n\t\t// let tie = document.getElementById('time').value\n\t\t// console.log(document.getElementById('date').value)\n\t\t// let todo = {name,description,date,tie};\n\t\t// //let our = Object.assign({}, todo);\n\t\t// this.data.todos.push(todo);\n\t\t// this.displayTodos();\n\n\t},\n\teditTodo: function editTodo(here) {\n\t\tvar location = parseInt(here.attributes['data-index'].value);\n\t\tdocument.querySelector('#h2Create').innerHTML = \"Editing Todo...\";\n\t\tvar updateButton = document.getElementById(\"myTodo\");\n\t\tupdateButton.innerHTML = \"Update\";\n\t\tupdateButton.attributes['onclick'].value = 'todo.updateTodo(this)';\n\t\tupdateButton.setAttribute('data-index', location);\n\t\tvar todos = this.data.todos;\n\t\tvar todo = todos[location];\n\n\t\tdocument.querySelector(\"#name\").value = todo.name;\n\t\tdocument.querySelector(\"#description\").value = todo.description;\n\t\tdocument.getElementById('date').value = todo.date;\n\t\t// console.log(date)\n\t\tdocument.getElementById(\"time\").value = todo.tie;\n\t\t//var name, description, date = ''\n\n\t}\n\n\t// deleteTodo()\n\t// alert(namess);\n\t//console.log(namess);\n\t//let todos = [{name: 'hhello', email: 'yes'}, {name: 'JEPWJEW', email: 'nd'}, {name: 'JSDFNJNSD', email: 'yes'}];\n\n\n\t// createTodo();\n\n};\n\n//# sourceURL=webpack://todo/./src/app.js?");

/***/ })

/******/ });