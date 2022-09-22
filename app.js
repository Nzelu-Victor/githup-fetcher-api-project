const users = document.querySelector('.users')
const array = []
// const fetch1 = new Fetch()

// fetching data

const getUsers = async ()=> {
   const getApi = await fetch('https://api.github.com/users')
   const getData = await getApi.json()
   console.log(getData)

   users.innerHTML =''
    getData.forEach(e => {
        let li = document.createElement('li')
        array.push(li)
        console.log(array)
        li.innerHTML=`
        <img src=${e.avatar_url} alt="" class="img">
        <div>
            <h4>${e.login}</h4>
        <a href="${e.html_url}" class="link">Link</a>
        </div>
     `
        li.classList.add('images')

        users.appendChild(li)
    })
}

getUsers()

class Fetch{
    constructor(){
        this.url='https://api.github.com/users'
    }
}