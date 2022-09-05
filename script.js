// https://api.adviceslip.com/advice

const btn = document.querySelector(".btn")
const number = document.querySelector("#number")
const adviceText = document.querySelector(".advice_txt")


btn.addEventListener ('click', ()=>{
    console.log("click")
    fetchadvice();
})

const fetchadvice = async () =>{

try{
const response = await fetch("https://api.adviceslip.com/advice");
const info = await response.json()
const id = info.slip.id
const advice = info.slip.advice


number.innerHTML = `Advice # ${id}`
adviceText.innerHTML = `"${advice}"`
}
catch (error){
    console.log(error)
}
}
