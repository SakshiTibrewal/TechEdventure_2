function compile() {
	var css = document.getElementById("codearea");
	var code = document.getElementById("preview-window").contentWindow.document;
  
	document.body.onkeyup = function() {
	  code.open();
	  code.writeln(
		  "<style>" +
		  css.value +
		  "</style>" 
	  );
	  code.close();
	};
  }
  
  compile();