import axios from 'axios';
/*
*
* NEED TO REWORK
* 
* Add request to back end.
*/

export const removeUser = async (user_id) => {

    
//TODO not the get, should be the axios.put, 我把 GetMapping改成PutMapping
    return axios.put(process.env.REACT_APP_HOST+"doctors/remove/"+user_id) //template request
    .then(data => {
        return data.data
    })
    .catch(error => {
        alert(error.message)
    });
    

}