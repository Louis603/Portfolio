const tommatDetails = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."

const goodCitiDetails = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."

//MAKE A CLASS ON HOW PROJECTS OBJ SHOULD BE

// <--------------------NOTES NOTES NOTES------>
//align profile icon and links
//resize main container
//choose colors
//fix description links
//icons for github linkedin etc
//icons for languages used in description right box
//make an about me with hobbies interests and reasoning for coding
//change size of fullscreen webpage as ive only been viewing the page in smaller screens....

const projects = [
    {
        title: "Tommat",
        link: {
            GitHub: "github.com",
            Demo: "youtube.com",
            "View Site": "youtube.com"
        },
        summary: tommatDetails,
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
        summary: goodCitiDetails,
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
// console.log(carouselInner)
// let caroBtn = document.querySelector(".carousel-control-next")
// caroBtn.addEventListener('click', (e) => console.log("hello"))
// linkDiv.removeChild()
// console.log(linkDiv.childNodes)
// console.log(document.querySelector(".active"))


const rightBox = document.getElementById("display-right")
// console.log(rightBox)

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
    title.classList.add("btn", "btn-success")
    // title.href = arr.link
    title.addEventListener('click', (e) => displayLeft(e, arr))
    title.addEventListener('click', (e) => displayActiveLink(e,arr,title))

    // rightBox.append(title)
    btnGroup.append(title)
    // rightBox.append(document.createElement('br'))
}

function displayActiveLink(e,arr,title) {
    e.preventDefault()
    let currentActive = document.querySelector("a.active")

    if(currentActive){
        console.log(title)
        title.classList.toggle("active")
        currentActive.classList.remove("active")
    }else {
        title.classList.toggle("active")

    }
    console.log(currentActive)
    // currentActive.classList.remove("active")
    // title.classList.toggle("active")
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
        let redirectLink = document.createElement('a')
        redirectLink.href = arr.link[item]
        redirectLink.textContent = item
        linkDiv.append(redirectLink)
        leftBox.append(linkDiv)
        // console.log(linkDiv.childNodes)
    }
    for (const item in arr.pics) {
        let caroDiv = document.createElement('div')
        let caroImg = document.createElement('img')
        caroImg.src = arr.pics[item]
        caroImg.classList.add('d-block','w-100')
        arr.pics[0] === arr.pics[item] ? caroDiv.classList.add('carousel-item', 'active') : caroDiv.classList.add('carousel-item')
        caroDiv.append(caroImg)
        carouselInner.append(caroDiv)
        // carouselInner.append("skaljdfkls")
    }
    rightBox.append(description)
}


// displayList(projects[0])
projects.forEach(arr => displayList(arr))




// left.addEventListener('click', (e) => alert("hello"))

//make an array of objects acting as an API? to change the left container on click.