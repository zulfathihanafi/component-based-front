import axios from 'axios';
/*
*
* NEED TO REWORK
* 
* Add request to back end.
*/

export const removeUser = async (user_id) => {

    

    return axios.put(process.env.REACT_APP_HOST+"products/remove/"+user_id) //template request
    .then(data => {
        return data.data
    })
    .catch(error => {
        alert(error.message)
    });
    

}