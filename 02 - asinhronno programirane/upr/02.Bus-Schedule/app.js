function solve() {
    const divInfo = document.getElementById("info")
    let nextId = "Depot"
    let curStop = ""
    let url = `http://localhost:3030/jsonstore/bus/schedule/`
   async function depart() {
        console.log('Depart TODO...');
        document.getElementById("depart").disabled = true;
        document.getElementById("arrive").disabled = false;
        const response = await fetch(url + `${curStop}`)
        const data = await response.json()
        divInfo.textContent = `Next stop ${nextId}`
        const info = data.find(x => x.next === "pesho")
        //nextId = data.name;
        //curStop = data.next
        
    }

    async function arrive() {
        console.log('Arrive TODO...');
        document.getElementById("depart").disabled = false;
        document.getElementById("arrive").disabled = true;
    }

    return {
        depart,
        arrive
    };
}

let result = solve();