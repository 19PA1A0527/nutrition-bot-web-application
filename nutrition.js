messages = document.getElementById('messages')
input = document.getElementById('input')
left = document.getElementById('left')
right = document.getElementById('right')

index = 0

products = {
"apple":{cost:"100 per dozen",vitamins:"A,B1,B2,B6,C"},
"orange":{cost:"50 per dozen",vitamins:"C"},
"pineapple":{cost:"300 per dozen",vitamins:"A,B6,E,K"},
"blackberry":{cost:"100 per dozen",vitamins:"C,K"},
"banana":{cost:"50 per dozen",vitamins:"B6,B12"},
"grapes":{cost:"70 per kilo",vitamins:"C"},
}



function taketheinput(event) {
	if(event.key === "Enter"){
		messages.innerHTML += right.outerHTML
		index += 1
		messages.lastChild.id = index
		messages.lastChild.childNodes[1].textContent = input.value
		processinput(input.value.toLowerCase())
		input.value = ""
	}
}

function processinput(input){

	if(input!=""){
		messages.innerHTML += left.outerHTML
		index += 1
		messages.lastChild.id = index
		messages.lastChild.childNodes[1].textContent = output(input)	
	}

}

function output(input) {
	result = input.match(/(how)|(\w+)/g)
	if(result.includes("cost")){
		return recentproduct.cost
	}
	if(result.includes("vitamins")){
		return recentproduct.vitamins
	}
	a="";
	result.forEach(function(product){
		if(products.hasOwnProperty(product)){
			a = "Yes we have " + product + "/kg"
			recentproduct = products[product]
		}
	})
	if(a){
		return a;
	}
    if (input === "hi") {
		return "HELLO THERE...!"
	}
	return "Sorry " + input + " is not designed!"
}
