const API_KEY = `dc4b7ce12cea7246521c45aa28638804`;

const loadTemparature = () => {
    const inputt = document.getElementById('input-field');
    const city = inputt.value;
    inputt.value = ""
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayTemparature(data))
}
const setInnerText = (id, text) => {
    document.getElementById(id).innerText = text;
}
const displayTemparature = temparature => {
    setInnerText('city', temparature.name);
    setInnerText('temp', temparature.main.temp)
    setInnerText('condition', temparature.weather[0].main);
    // img set korte icon ta url er maddome set korte hobe ei api er jonnow.
    const url = `http://openweathermap.org/img/wn/${temparature.weather[0].icon}@2x.png`

    const img = document.getElementById('img-id');
    img.setAttribute('src', url);
}