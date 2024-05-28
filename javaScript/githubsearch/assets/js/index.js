let imageUrl=''
let portfolio=''
let url=''
let bio=''
let repoCount=0
let uname=''
let ltn=''



const userDom=document.querySelector('.user')





const header={
    'Content-Type': 'application/json',
    'authorization':'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'


}


    async function searchUsers(event) {
        event.preventDefault();
        const baseUrl = 'https://api.github.com/users/';
        const name = document.querySelector('#input').value;
    
        async function gitUserdetails() {
            const newUrl = baseUrl + `${name}`;
            try {
                const response = await fetch(newUrl, header);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            } catch (error) {
                console.error('An error occurred:', error);
                throw error;
            }
        }
    
        try {
            const dta = await gitUserdetails();
            const apiData=dta
            console.log(dta);
            imageUrl=apiData['avatar_url']
            bio=apiData['bio']
            ltn=apiData['location']
            url=apiData['url']
            uname=apiData['twitter_username']
            repoCount=apiData['public_repos']
            
            const imageDom=document.createElement("img")
            imageDom.classList.add("userImage")
            imageDom.src=imageUrl
            userDom.appendChild(imageDom)

            const repo=document.createElement("p")
            repo.classList.add("poetsen-one-regular")
            repo.textContent=repoCount
            userDom.appendChild(repo)

            const loc=document.createElement("p")
            loc.classList.add("poetsen-one-regular")
            loc.textContent=ltn
            userDom.appendChild(loc)


            const bioDom=document.createElement("p")
            bioDom.textContent=bio
            userDom.appendChild(bioDom)


        } catch (error) {
            console.error(error);
        }
    }
    