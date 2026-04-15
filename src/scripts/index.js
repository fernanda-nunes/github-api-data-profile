import { getUser } from './services/user.js'
import { getRepositories } from './services/repositories.js'


import { user } from './objects/user.js'
import { screen } from './objects/screen.js'


document.getElementById('btn-search').addEventListener('click', () => {
    const userNameImput = document.getElementById('input-search').value
   if (validateEnptyImput(userNameImput)) return
    getUserData(userNameImput);
})

document.getElementById('input-search').addEventListener('keyup', (e) => {
    const userNameImput = e.target.value
    const key = e.which || e.keyCode
    const isEnterKeyPressed = key === 13
    
    if(isEnterKeyPressed){
        if (validateEnptyImput(userNameImput)) return
        getUserData(userNameImput);
    }
})

function validateEnptyImput(userNameImput) {
     if(userNameImput.length === 0){
        alert('Preencha o campo com o nome de usuário do GitHub.')
        return true
    }
}

async function getUserData(userName) {
    
    const userResponse = await getUser(userName)

    if(userResponse.message === "Not Found"){
        screen.renderUserFound()
        return
    }

    const repositoriesResponse = await getRepositories(userName)
   

    user.setInfo(userResponse)
    user.setRepositories(repositoriesResponse)
    

    screen.renderUser(user)

    console.log(repositoriesResponse)
}


