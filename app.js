const api = `fa09cdc229b6b7da6924bd6ef2c206cd`;
const searchTemp = ()=>{
    const city = document.getElementById("city").value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api}&units=metric`;
    fetch(url)
    .then(res=> res.json())
    .then(data => {
        console.log(data);
        document.getElementById('temp').innerText = data.main.temp;
        document.getElementById('cityN').innerText = data.name;
        document.getElementById('h1').style.display = 'block';
        document.getElementById('haze').innerText = data.weather[0].main
})
}
const ref = ()=>{
    location.reload();
}
