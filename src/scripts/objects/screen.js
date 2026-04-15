const screen = {
  userProfile: document.querySelector('.profile-data'),
  renderUser(user){
    
    this.userProfile.innerHTML = `<div class="info">
                                   <img src="${user.avatarUrl}" alt="Foto do perfil usuário"/>
                                   <div class="data">
                                    <h1>${user.name ?? 'Não possuí nome cadastrado 😢'}</h1>
                                    <p>${user.bio ?? 'Não possuí bio cadastrada 😢'}</p>
                                    <span class="social">👥 ${user.followers} Followers - ${user.following} Following</span>  
                                   </div>             
                                  </div>`

      let repositoriesItems = ""
     
      user.repositories.forEach(repos =>repositoriesItems += 
                                                            `<li><a href="${repos.html_url}"target="_blank">
                                                                 ${repos.name} <br><br>
                                                              <div class="icons">
                                                                <p class="itens">🍴${repos.forks}</p>
                                                                <p class="itens">⭐${repos.stargazers_count}</p>
                                                                <p class="itens">👀${repos.watchers}</p>
                                                                <p class="itens">👨‍💻${repos.language ?? "Não possui linguagem"}</p>
                                                              </div>
                                                            </a></li>`)

      if(user.repositories.length > 0) {
        this.userProfile.innerHTML += `<div class="repositories section">
                                         <h2>Repositórios</h2>
                                         <ul>${repositoriesItems}</ul>
                                       </div>`
       }
},
    renderUserFound(){
        this.userProfile.innerHTML = "<h3>Usuário não encontrado</h3>"
    }
}

export { screen }
