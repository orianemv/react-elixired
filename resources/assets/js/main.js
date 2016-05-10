var marked = require('marked');
	marked.setOptions({
		renderer : new marked.Renderer(),
	});

console.log(marked('markdown héhé'));



var myCodeMirror = CodeMirror(document.body, {
  value: "hello, write here",
  mode:  "javascript"
});

function debut(){
var textemd = CodeMirror.fromTextArea(document.getElementById("#entree"), {
	value: "write markdown",
	mode: "text/x-markdown",
	lineNumbers: true,
	matchBrackets: true,
	autofocus: true
})
	textemd.refresh();
	getText(textemd);
};

// // myCodeMirror.on('change', update);


function submit_html(debut){
	$("#entree").on('click', function(){
		var text = textemd.getValue();
		markdownToHtml(text);
	});
};
function ecrireTexte{
	$("#entree").html(text);
};
function markdownToHtml(text){
    var text = marked(text);
    setText(text);
};

// // 	entree.save();
// // 	var texte = document.getElementById("#entree").value;
// // 	var data_url = "data:text/html;charset=utf-8;base64," + $.base64.encode(texte);
// // 	document.getElementById("texte-html").src = data;
// // }
// function debutTexte(){
// 	var texte = getElementById('texte-html');
// };
// };
debut();


