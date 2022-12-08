function attachEvents() {
   
    document.getElementById("submit").addEventListener("click", getWeather)

}
 
async function getWeather () {
    const submit = document.getElementById("location").value;
    const curentSection = document.getElementById("current");
    const upcomingContainer = document.getElementById("upcoming");
    const forecastContainer = document.getElementById("forecast");

try {
    const response = await fetch `http://localhost:3030/jsonstore/forecaster/locations`;
    const data = await response.json();
    forecastContainer.style.display = "block";
    const info = data.find(x => x.name === submit)

} catch (error) {
    forecastContainer.style.display = "none";
    document.querySelector(".label").textContent = "Error"
}
 
}

attachEvents();