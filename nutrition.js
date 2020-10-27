messages = document.getElementById('messages')
input = document.getElementById('input')
left = document.getElementById('left')
right = document.getElementById('right')

index = 0

products = {
"apple":{cost:320,vitamins:"A=0,005"},
"orange":{cost:100,vitamins:"B1=0,02"},
"pineapple":{cost:200,vitamins:"B2=0,01"},
"blackberry":{cost:220,vitamins:"B6=0,05"},
"banana":{cost:30,vitamins:"C=5000"},
"grapes":{cost:150,vitamins:"FLATE=0,003"},
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
	if(result.includes("price")){
		return recentproduct.price
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