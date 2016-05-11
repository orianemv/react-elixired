(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

$(document).ready(function () {

	// var marked = require('marked');
	// 	marked.setOptions({
	// 		renderer : new marked.Renderer(),
	// 	});

	console.log(marked('markdown'));

	// // var code = $("#entree")[0];
	// // var editor = CodeMirror.fromTextArea(code, {
	// // 	value: "write markdown",
	// // 	mode: "text/x-markdown",
	// // 	lineNumbers: true,
	// // 	matchBrackets: true,
	// // 	autofocus: true

	// // });

	// // alert(editor.getValue());

	// // function lireTexte(){
	// // 	var text = editor.getValue();
	// // 	alert(text);
	// // }

	// // var myCodeMirror = CodeMirror(document.body, {
	// //   value: "hello, write here",
	// //   mode:  "javascript"
	// // });

	// // var codem = entree.getCode();

	// function debut(){

	// var code = $("#entree")[0];
	// var textemd = CodeMirror.fromTextArea(code, {
	// 	value: "write markdown",
	// 	mode: "text/x-markdown",
	//  	lineNumbers: true,
	//  	matchBrackets: true,
	//  	autofocus: true
	// })
	// 	textemd.refresh();
	// 	getValue(textemd);
	// };
	// console.log("textemd");
	// function getHtml(debut){
	// 	$("#entree").on('click', function(){
	// 		var text = code.getValue();
	// 		markdownToHtml(text);
	// 	});
	// };
	// function ecrireTexte(){
	// 	$("#textemkd").html(text);
	// };
	// function markdownToHtml(text){
	//     var text = marked(text);
	//     setText(text);
	// };
	// // myCodeMirror.on('change', update);

	// // function debutTexte(){
	// // 	var texte = getElementById('#entree');
	// // };

	// debut();

	// });

	// $('#entree').focus();
	var editor = CodeMirror.fromTextArea(document.getElementById('entree'), {
		value: "write markdown",
		mode: "text/x-markdown",
		lineNumbers: true,
		matchBrackets: true,
		autofocus: true
	});
	console.log("editor");
	setInterval(function modifTexte() {
		var tex = editor.getValue();
		document.getElementById('textemkd').innerHtml = marked(tex);
	}, 1500);
	// setInterval();
});

},{}]},{},[1]);

//# sourceMappingURL=bundle.js.map
