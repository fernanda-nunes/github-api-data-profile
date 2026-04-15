import { baseUrl, repositoriosQuanlity } from '../variables.js'

async function getRepositories(userName){
    const response = await fetch(`${baseUrl}/${userName}/repos?PER_PAGE=${repositoriosQuanlity}`)
    return await response.json();
} 

export { getRepositories }