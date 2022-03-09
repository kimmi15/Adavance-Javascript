let getUser = async(n)=>{

    try{
let response= await fetch(`https://api.github.com/users/${n}`)
let data= await response.json()
return data
    }
    catch(e){
        console.log(e)
    }

}

export default getUser