const DATABASE_API="https://jsonplaceholder.typicode.com/users"

async function getAllUsers() {
    const response= await fetch(DATABASE_API)
    const dataList= await response.json()
    console.log(dataList)
    const listContainer=document.querySelector(".list-group")
    dataList.forEach(element => {
        const listItem=`
        <li class="list-group-item col-sm-6 col-md-3">${element.name}</li>
        `
        listContainer.innerHTML+=listItem
    });
}

getAllUsers()

let saveChoise=""
function buttonChoise(event){
    const button=event.target;
    const choise=button.innerText.toLowerCase()
    console.log(choise)
    saveChoise=choise
    localStorage.setItem("choise", saveChoise)
}

const form=document.querySelector("form")
form.addEventListener("submit", function(event){
    event.preventDefault()
    const button=event.submitter
    const buttonParent=button.closest("form")
    const searchValue=buttonParent.querySelector("input").value.toLowerCase()
})