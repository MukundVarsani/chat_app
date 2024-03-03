export const baseURL = 'http://localhost:4000/api';

export const postRequest = async(url , body)=>{

   let Data;
    fetch(url, {
        method : "POST",
        headers : {
            'Content-Type': 'application/json; charset=UTF-8',
        },
         body
    }).then((res)=>{
        console.log(res);
        return res.json();
    }).then((data)=>{
        Data = data;
        console.log(data);
    })
    .catch((err)=>{
        console.log(err);
    })

    return Data;
}