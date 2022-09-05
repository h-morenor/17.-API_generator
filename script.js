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
let response = await fetch("https://api.adviceslip.com/advice");
let info = await response.json()
let id = info.slip.id
let advice = info.slip.advice


number.innerHTML = `Advice # ${id}`
adviceText.innerHTML = `"${advice}"`
}
catch (error){
    console.log(error)
}
}
