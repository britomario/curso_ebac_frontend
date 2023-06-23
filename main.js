document.addEventListener('DOMContentLoaded', function(){
    const avatar = document.querySelector('.profile-avatar');
    const name = document.querySelector('.profile-name');
    const username = document.querySelector('#profile-username');
    const repositories = document.querySelector('#number-repositories');
    const followers = document.querySelector('#number-followers');
    const following = document.querySelector('#number-following')
    const link_githuh = document.querySelector('.profile-link');

    fetch('https://api.github.com/users/britomario')
    .then(response => {
        return response.json();
    })
    .then(data => {
        console.log(data)
        avatar.src = data.avatar_url
        name.innerText = data.name
        username.innerText = data.login
        repositories.innerText = data.public_repos;
        followers.innerText = data.followers;
        following.innerText = data.following
        link_githuh.href = data.html_url
    })
})