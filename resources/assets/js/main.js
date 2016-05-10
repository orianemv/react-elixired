var marked = require('marked');
	marked.setOptions({
		renderer : new marked.Renderer(),
	});

console.log(marked('markdown héhé'));



var myCodeMirror = CodeMirror(document.body, {
  value: "hello, write here",
  mode:  "javascript"
});

// function debut(){
// // var myCodeMirror = CodeMirror(document.body);
// var entree = CodeMirror.fromTextArea(document.getElementById("#entree"), {
// 	lineNumbers: true,
// 	matchBrackets: true,
// 	autofocus: true
// });


// // myCodeMirror.on('change', update);


// function submit_html(){
// 	$("#entree").on('click', function(){
// 		var texte = entree.getValue();

// 	});
// // 	entree.save();
// // 	var texte = document.getElementById("#entree").value;
// // 	var data_url = "data:text/html;charset=utf-8;base64," + $.base64.encode(texte);
// // 	document.getElementById("texte-html").src = data;
// // }
// function debutTexte(){
// 	var texte = getElementById('texte-html');
// };
// };


