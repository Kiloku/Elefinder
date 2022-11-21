function parseAcct(acct) {
	if (typeof acct === "string" || acct instanceof String){
		if (acct.charAt(0) == "@"){
			acct = acct.substr(1) 
		}

		return acct.split("@")
	}
	//error I guess
}

function search() {
	let acct = document.querySelector("#searchfield").value
	let parsed = parseAcct(acct)
	browser.storage.sync.get("mastodon_instance").then((result)=>{
		console.log(result)
		if (parsed.length == 2) {
			browser.tabs.getCurrent().then(() => {console.log("https://"+result+"/@"+parsed[0]+"@"+parsed[1])})
		}
		else {
			browser.tabs.getCurrent().then(() => {console.log("https://"+result+"/@"+parsed[0])})
		}
	})
}

function listen(){
	document.addEventListener('click', (e) => {
		search(document.getElementById('searchfield').value)
	})
}

document.querySelector('#searchbtn').addEventListener('click', search);