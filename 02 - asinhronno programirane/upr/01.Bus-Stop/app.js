async function getInfo() {
    console.log("TODO...");

    const stopId = document.getElementById("stopId");
    const stopIdValue = stopId.value;
    const url = `http://localhost:3030/jsonstore/bus/businfo/${stopIdValue}`
    const stopBusesName = document.getElementById("stopName");
    const ulBuses = document.getElementById("buses");
    ulBuses.innerHTML = ""
    stopId.value = "";
    
    try {
        const response = await fetch(url);
        const data = await response.json();
        stopBusesName.textContent = data.name
        Object.entries(data.buses).forEach(([busNum, time]) => {
            const li = document.createElement("li");
            li.textContent =`Bus ${busNum} arrives in ${time} minutes`
            ulBuses.appendChild(li)
        })

    } catch (error) {
        stopBusesName.textContent = "Error"

    }
    
}