const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

let cont = document.getElementById("container")

let counter = 0
let likes = []
let hasLiked = []

for (let elements of posts) {
    cont.innerHTML += `
        <section class="post">
            <div class="subheader">
                <img src="${elements.avatar}" class="post-avatar">
                <div class="post-text">
                    <h1>${elements.name}</h1>
                    <h2>${elements.location}</h2>
                </div>
            </div>
            <img src="${elements.post}" class="post-img">
            <div class="icons">
                <img src="images/icon-heart.png" class="post-icons">
                <img src="images/icon-comment.png">
                <img src="images/icon-dm.png">
            </div>
            <h3 class="post-likes">${elements.likes} likes</h3>
            <h4>${elements.username} <span class="reg">${elements.comment}</span></h4>
        </section>`
    likes.push(elements.likes)
    hasLiked.push(false)
    counter++
}

const imgs = document.querySelectorAll('.post-img')
const icons = document.querySelectorAll('.post-icons')
const likesTexts = document.querySelectorAll('.post-likes')

for (let i = 0; i < imgs.length; i++) {
    imgs[i].addEventListener("dblclick", function () {  
        updateLikes(i)
    })
    icons[i].addEventListener("dblclick", function () {
        updateLikes(i)  
    })
  }

  function updateLikes(postNum){
    if (hasLiked[postNum]) {
        likes[postNum]--
        likesTexts[postNum].textContent = `${likes[postNum]} likes`
        icons[postNum].src="images/icon-heart.png"
        hasLiked[postNum] = !hasLiked[postNum]
    }
    else {
        likes[postNum]++
        likesTexts[postNum].textContent = `${likes[postNum]} likes`
        icons[postNum].src="images/icon-heart2.png"
        hasLiked[postNum] = !hasLiked[postNum]
    }
  }


