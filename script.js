const DATABASE_API="https://jsonplaceholder.typicode.com/users"

async function getAllUsers() {
    const response= await fetch(DATABASE_API)
    const dataList= await response.json()
    const listContainer=document.querySelector(".list-group")
    dataList.forEach(element => {
        const listItem=`
        <li class="list-group-item col-sm-6 col-md-3">
            <div class="name">
                name: <br>${element.name}
            </div>
            <div class="username">
                username: <br>${element.username}
            </div>
            <div class="email">
                email: <br>${element.email}
            </div>
        </li>
        `
        listContainer.innerHTML+=listItem
    });
}

getAllUsers()


function buttonChoise(event){
    const button=event.target;
    const choise=button.innerText.toLowerCase()
    const saveChoise=choise
    localStorage.setItem("choise", saveChoise)
}

const form=document.querySelector("form")
form.addEventListener("submit", function(event){
    event.preventDefault()
    const button=event.submitter
    const buttonParent=button.closest("form")
    const searchValue=buttonParent.querySelector("input").value.toLowerCase()
    const filteredChoise=localStorage.getItem("choise")
    let choiseNumber=0
    if(filteredChoise==="name"){
        choiseNumber=0
    }else if(filteredChoise==="username"){
        choiseNumber=1
    }else if(filteredChoise==="email"){
        choiseNumber=2
    }
    const profileContainer=document.querySelector(".list-group")
    const profile=profileContainer.querySelectorAll("li")
    let filteredArray=[]
    profile.forEach(element =>{
        if(element.children[choiseNumber].innerText.toLowerCase().includes(searchValue)){
            filteredArray.push(element)
            element.remove()
        }else{
            element.remove()
        }
    })
    filteredArray.forEach(element=>{
        profileContainer.appendChild(element)
    })
})