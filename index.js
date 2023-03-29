const projects = [
    {
        title: "Tommat",
        link: {
            GitHub: "github.com",
            Demo: "youtube.com",
            "View Site": "youtube.com"
        },
        summary: "this was made very well and i like it a lot so please like it too",
        language: "React",
        pics: ["pictures/tommat-1.jpeg", "pictures/tommat-2.png"]
    },
    {
        title: "Good Citizen",
        link: {
            GitHub: "github.com",
            Demo: "youtube.com",
            "View Site": "youtube.com"
        },
        summary: "i like it a lot so please like it too",
        language: "React",
        pics: ["pictures/good-citizen-1.png", "pictures/good-citizen-2.png" ]
    }
]


// const left = document.querySelector('#main-container')
// console.log(projects[0].link)
const leftTitle = document.createElement('h1')
const description = document.createElement('p')
const linkDiv =  document.createElement('div')
const btnGroup = document.querySelector(".btn-group")
const carouselInner = document.querySelector(".carousel-inner")
console.log(carouselInner)
// let caroBtn = document.querySelector(".carousel-control-next")
// caroBtn.addEventListener('click', (e) => console.log("hello"))
// linkDiv.removeChild()
// console.log(linkDiv.childNodes)
// console.log(document.querySelector(".active"))


const rightBox = document.getElementById("display-right")
console.log(rightBox)

const leftBox = document.getElementById("display-left")
const leftTitleContainer = document.getElementById("display-left-title")
// console.log(leftBox.children[0].className)

function displayLeftWelcome(){
    leftTitle.textContent = "Welcome!"
    description.remove()

    // while loops through the nodes of carousel and removes it
    while(carouselInner.lastElementChild){
        carouselInner.removeChild(carouselInner.lastElementChild)
    }
    // linkDiv.childNodes.remove()
    leftTitleContainer.append(leftTitle)
}

displayLeftWelcome()

function displayList(arr){
    let title = document.createElement('a')
    title.rel = 'noopener'
    title.target = '_blank'
    title.href = "https://www.youtube.com/"
    title.textContent = arr.title
    title.classList.add("btn", "btn-primary")
    // title.href = arr.link
    title.addEventListener('click', (e) => displayLeft(e, arr))
    title.addEventListener('click', (e) => displayActiveLink(e,arr,title))

    // rightBox.append(title)
    btnGroup.append(title)
    // rightBox.append(document.createElement('br'))
}

function displayActiveLink(e,arr,title) {
    e.preventDefault()
    let currentActive = document.querySelector(".active")
    console.log(currentActive)
    currentActive.classList.remove("active")
    title.classList.toggle("active")
    // console.log(title)


}
// function displayLeft(e,arr){
//     e.preventDefault()

// }

function displayLeft(e,arr){
    e.preventDefault()
    let child = linkDiv.lastElementChild
    while(child){
        linkDiv.removeChild(child)
        child = linkDiv.lastElementChild
    }

    while(carouselInner.lastElementChild){
        carouselInner.removeChild(carouselInner.lastElementChild)
    }
    
    if(leftTitle.textContent === arr.title){
        return displayLeftWelcome()
    }
    leftTitle.textContent = arr.title
    description.textContent = arr.summary
    for (const item in arr.link) {
        console.log(item, arr.link[item])
        let redirectLink = document.createElement('a')
        redirectLink.href = arr.link[item]
        redirectLink.textContent = item
        linkDiv.append(redirectLink)
        leftBox.append(linkDiv)
        // console.log(linkDiv.childNodes)
    }
    for (const item in arr.pics) {
        console.log(arr.pics[item])
        let caroDiv = document.createElement('div')
        let caroImg = document.createElement('img')
        caroImg.src = arr.pics[item]
        caroImg.classList.add('d-block','w-100')
        console.log(arr.pics[0] === arr.pics[item] ? true : false)
        arr.pics[0] === arr.pics[item] ? caroDiv.classList.add('carousel-item', 'active') : caroDiv.classList.add('carousel-item')
        caroDiv.append(caroImg)
        carouselInner.append(caroDiv)
        // carouselInner.append("skaljdfkls")
    }
    leftBox.append(description)
}


// displayList(projects[0])
projects.forEach(arr => displayList(arr))




// left.addEventListener('click', (e) => alert("hello"))

//make an array of objects acting as an API? to change the left container on click.