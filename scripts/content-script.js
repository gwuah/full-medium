
document.addEventListener("load", function(e) {
	const fullMedium = {};
	let active = true;

	const spacer = $(".metabar--spacer");
	const metabar = $(".metabar");
	const parent = $(".screenContent");
	const footer = $(".js-stickyFooter");

	fullMedium["meta_markup"] = metabar;
	fullMedium["footer_markup"] = footer;
	fullMedium["parent"] = parent;
	fullMedium["spacer"] = spacer;

	const remove = function() {
		parent.removeChild(metabar);
		parent.removeChild(spacer);
		parent.removeChild(footer);
		active = false;
	}

	const reset = function() {
		parent.appendChild(metabar);
		parent.appendChild(spacer);
		parent.appendChild(footer);
		active = true;
	}

	const insertToggler = function() {
		var button = document.createElement("button");
	    button.innerText = "Full-Medium";
	    button.id = "full-md-btn";
	    button.style.boxShadow = "0px 0px 10px black";
	    button.style.fontFamily = "monospace";
	    button.style.fontSize = "22px";
	    button.style.padding = "6px";
	    button.style.borderRadius = "5px";
	    button.style.position = "fixed";
	    button.style.bottom = "560px";
	    button.style.left = "1130px";
	    button.style.zIndex = "50000000000";

	    button.addEventListener("click", function(e) {
	    	active ? remove() : reset()
	    })
    
		document.body.appendChild(button)
	}

	insertToggler();
	
	chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        if (request.greeting == "hello")
            sendResponse({message: "hi"});
 });

})