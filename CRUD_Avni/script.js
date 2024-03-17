let url = "https://65e18828a8583365b316a2d9.mockapi.io/user"
//console.log("1")
const create = document.getElementById('create-btn')
const name = document.getElementById('input-name')
const email = document.getElementById('input-email')
function submitBtn() {
    console.log(name.value, email.value);
    createUser(name.value,email.value)
}
create.addEventListener('click',submitBtn)
async function createUser(name, email) {
    /*
    let newUser = {
        "name": name,
        "email": email
    }
    */
    let newUser = {name,email}
    let res = await fetch(url, {
        method: "POST",
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(newUser) // browser sends and accepts req in string
    })
    let data = await res.json()
    console.log(data)
    createTableRow(data.name,data.email)
  
}
let tbodyContainer = document.getElementById('tbodyContainer')
function createTableRow(val1, val2,id) {
    let tr = document.createElement('tr')
    let td1 = document.createElement('td')
    let td2 = document.createElement('td')
    let td3 = document.createElement('td')
    td1.innerHTML = val1
    td1.setAttribute('id', `name${id}`)
    td2.innerHTML = val2
    td2.setAttribute('id', `email${id}`)
    td3.innerHTML=`
    <button id="del${id}" class="btn btn-danger" onclick="deleteUser(${id})">Delete</button>
    <button data-toggle="modal" data-target=#exampleModal${id} id="edit${id}" class="btn btn-primary" onclick="editUser(${id})" >Edit</button>
    `
    tr.append(td1, td2,td3)
    tbodyContainer.append(tr)
    
}

async function editUser(id) {
    console.log("edit btn called")
    let res = await fetch(url+"/"+id);
    let data = await res.json();
    console.log(data)    
    let modal=document.createElement('span')
    modal.innerHTML=`
                    <div class="modal fade" id=exampleModal${id} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            ...
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary">Save changes</button>
                        </div>
                        </div>
                    </div>
                    </div>
    `
    document.body.append(modal)

}

async function getData() {
    let res = await fetch(url);
    let data = await res.json();
    //console.log(data)
    data.map(e => {
     
        createTableRow(e.name, e.email,e.id);
    })
}
getData()

    
async function deleteUser(userId) {
    console.log(userId)
    let res = await fetch(`${url}/${userId}`, { method: "DELETE" })
    let data = await res.json();
    console.log(data)
    tbodyContainer.innerHTML = ""
    getData()

}