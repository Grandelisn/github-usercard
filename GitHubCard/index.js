/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/

/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/


/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

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
import axios from 'axios';
const cards = document.querySelector('.cards');
const arr = ['grandelisn', 'tetondan', 'dustinmyers','justsml','luishrd','bigknell'];

let cardConst = obj => {
  const card = document.createElement("div");
  const profileImg = document.createElement("img");
  const info = document.createElement("div");
  const name = document.createElement("h3");
  const userName = document.createElement("p");
  const loc = document.createElement("p");
  const profile = document.createElement("p");
  const anchor = document.createElement("a");
  const followers = document.createElement("p");
  const following = document.createElement("p");
  const bio = document.createElement("p");
  profileImg.src = obj.data.avatar_url;
  name.textContent = obj.data.name
  userName.textContent = `Username: ${obj.data.login}`
  loc.textContent = `Location: ${obj.data.location}`
  profile.textContent = "Profile:"
  anchor.href = `${obj.data.html_url}`
  anchor.textContent = `${obj.data.html_url}`
  followers.textContent = `${obj.data.followers}`
  following.textContent = `${obj.data.following}`
  bio.textContent = `Bio: ${obj.data.bio}`
  card.classList.add("card");
  info.classList.add("card-info");
  name.classList.add("name");
  userName.classList.add("username");
  card.appendChild(profileImg);
  card.appendChild(info);
  info.appendChild(name);
  info.appendChild(userName);
  info.appendChild(loc);
  info.appendChild(profile);
  profile.appendChild(anchor);
  info.appendChild(followers);
  info.appendChild(following);
  info.appendChild(bio);
  console.log(card);
  return card;
  }

  arr.forEach((elem) =>{
     axios.get(`https://api.github.com/users/${elem}`)
    .then(res => {
      const cardHolder = cardConst(res);
      cards.appendChild(cardHolder)
    })
    .catch(err => console.log(err))
  })
  