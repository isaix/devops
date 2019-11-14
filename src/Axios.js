import Axios from "axios";
const path = {
    // api: "http://localhost:3030",
    api: "https://dtu-devops-backend.herokuapp.com/"
}

/**
 *
 * PROJECTS
 *
 */

export function createProject(project, callback) {
    Axios.post(path.api + '/projects', {project: project})
        .then(resp => {
            {
                callback && callback(resp.data)
            }
        })
        .catch(error => {
            console.log(error)
        })
}

export function getProjects(callback) {
    Axios.get(path.api + '/projects')
        .then(resp => {
            {
                callback && callback(resp.data, null)
            }
        })
        .catch(error => {
            console.log(error)
        })
}

export function getProject(id, callback) {
    Axios.get(path.api + '/projects/' + id)
        .then(resp => {
            {
                callback && callback(resp.data)
            }
        })
        .catch(error => {
            console.log(error)
        })
}

export function updateProject(opportunity, callback) {
    Axios.put(path.api + '/projects/' + opportunity._id, {opportunity})
        .then(resp => {
            {
                callback && callback(resp.data)
            }
        })
        .catch(error => {
            console.log(error)
        })
}


export function deleteProject(id, callback) {
    // noinspection JSCheckFunctionSignatures
    Axios.delete(path.api + '/projects/' + id, {id})
        .then(resp => {
            {
                callback && callback(resp.status)
            }
        })
        .catch(error => {
            console.log(error)
        })
}


// function handleError(error) {
//     if (!error.response) {
//         // network error
//         console.log("Error: ", "Network error")
//         // window.location.replace("/not-found")
//     } else if (error.response) {
//         // The request was made and the server responded with a status code
//         // that falls out of the range of 2xx
//         if (error.response.status === 503) {
//             // window.location.replace("/not-found")
//         }
//         if (error.response.status === 404) {
//             // window.location.replace("/not-found")
//         } else if (error.response.data.authenticated === false) {
//             console.log(window.location.pathname)
//             if (window.location.pathname.length) {
//                 window.location.replace("/login?redirect=" + window.location.pathname)
//             } else {
//                 window.location.replace("/login")
//             }
//         } else {
//             Store.dispatch(addMessage(error.response.data.errors[Object.keys(error.response.data.errors)[0]].message, "ERROR"))
//             // Store.dispatch(addError(error.response.data.message))
//         }
//         console.log("ERROR LOG")
//         console.log(error.response.data);
//         console.log(error.response.status);
//         console.log(error.response.headers);
//     } else if (error.request) {
//         // The request was made but no response was received
//         // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
//         // http.ClientRequest in node.js
//         console.log(error.request);
//         //window.location.replace("/not-found")
//     } else {
//         // Something happened in setting up the request that triggered an Error
//         console.log('Error', error.message);
//         //window.location.replace("/not-found")
//     }
//     //window.location.replace("/not-found")
//     console.log("Error: ", error.config);
// }