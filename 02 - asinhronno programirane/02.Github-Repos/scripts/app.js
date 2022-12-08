function loadRepos() {
	let username = document.getElementById("username")
	fetch(`https://api.github.com/users/${username}/repos`)
		.then(handleResponse)
		.then(result)
		.catch(err)
		
}
function handleResponse(response) {
	if (response.ok === false) {
		throw new Error (`Error ${response.status} ${response.statusText}`)
	}
	return response.json();
}

function result (data) {
	let ul = document.getElementById("repos")
	let items = data.map(repo => {
			
		let li = document.createElement("li")
		let a = document.createElement('a');
		a.href = repo.html_url;
		a.textContent = repo.full_name
		li.appendChild(a);
		//ul.appendChild(li) 
		return li
	})
	ul.replaceChildren(...items)
}

