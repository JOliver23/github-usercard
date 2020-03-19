/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/
const cardSection = document.querySelector('.cards')

axios.get("https://api.github.com/users/JOliver23")
/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/
/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/
.then(response => {
  const completeCard = gitCard(response.data)
  cardSection.prepend(completeCard)
})
.catch(err => {
  console.log('broken')
})


/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

const followersArray = ['tetondan', 'dustinmyers', 'justsml', 'luishrd', 'bigknell'];

followersArray.forEach(friend => {
  axios.get(`https://api.github.com/users/${friend}`)
  .then(response => {
    const guestCard = gitCard(response.data)
    cardSection.appendChild(guestCard)
  })
  .catch(err => {
    console.log('broke friends are no fun')
  })
})

/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/

const gitCard = (data) => {
  const card = document.createElement('div')
  const photo = document.createElement('img')
  const subCard = document.createElement('div')
  const user = document.createElement('h3')
  const gitName = document.createElement('p')
  const place = document.createElement('p')
  const gitProfile = document.createElement('p')
  const link = document.createElement('a')
  const gitFollows = document.createElement('p')
  const gitLead = document.createElement('p')
  const gitBio = document.createElement('p')

  card.appendChild(photo)
  card.appendChild(subCard)

  subCard.appendChild(user)
  subCard.appendChild(gitName)
  subCard.appendChild(place)
  subCard.appendChild(gitProfile)
  gitProfile.appendChild(link)
  subCard.appendChild(gitFollows)
  subCard.appendChild(gitLead)
  subCard.appendChild(gitBio)

  card.classList.add('card')
  subCard.classList.add('card-info')
  user.classList.add('name')
  gitName.classList.add('username')

  photo.src = data.avatar_url
  user.textContent = data.gitName
  gitName.textContent = data.login
  place.textContent = data.location
  gitProfile.textContent = `Profile: ${data.url}`
  link.href = data.url
  gitFollows.textContent = `Followers: ${data.followers}`
  gitLead.textContent = `Following: ${data.following}`
  gitBio.textContent = data.bio


  return card
}


/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
