let contacts = [['Davis Patterson', '333 Electric Avenue', '867-5309'], 'Christopher Riddle', 'Nathan Vogt', 'Jaylan Wilkins', 'Gavin Duffing']

//arrays are limited in representing complex, related data

let person = {
    name: 'Amari', 
    favoriteColor: 'green',
    job: 'Software developer'
}

// we can retrieve data from an object using dot notation
console.log(person.name)
console.log(person.favoriteColor)
console.log(person.job)

// or we can use bracket notation
console.log(person['job'])
// have to use bracket notation if the key is represented by a variable
let key = 'job'
console.log(person[key])

key = 'name'
console.log(person[key])

// can have an array of objects
let team = [
    {
        name: 'Amari',
        yearsOfExperience: 4
    },
    {
        name: 'Nikki',
        yearsOfExperience: 1
    }, 
    {
        name: 'Lennon',
        yearsOfExperience: 2
    },
    {
        name: 'Nutmeg'
    }
]

// find the total years of experience on the team using a for of loop
let totalYearsOfExperience = 0
// for (let member of team) {
//     console.log("The current member's name is:", member.name)
//     // check if yearsOfExperience are part of the object. If so, add them to the total
//     if (member.yearsOfExperience) {
//         console.log("Their years of experience are:", member.yearsOfExperience)
//         totalYearsOfExperience += member.yearsOfExperience
//     } else {
//         console.log("Their years of experience are not listed")
//     }
//     console.log("The current value of totalYearsOfExperience is", totalYearsOfExperience)
// }
// console.log('Total listed years of experience on the team: ', totalYearsOfExperience)


function findPeopleByCity(city, peopleArray) {
    let results = []
    for (let person of peopleArray) {
        if (person.city === city) {
            results.push(person.name)
        }
    }
    return results
}

// console.log(findPeopleByCity('Traverse City', ourClass))
// console.log(findPeopleByCity('Durham', ourClass))

let ourClass = [
    {
        name: 'Gavin',
        city: "Traverse City",
        gitHub: "https://github.com/duffing09"
    },
    {
        name: 'Chris',
        city: 'Durham',
        gitHub: 'https://github.com/CRiddleNC'
    },
    {
        name: 'Rebecca',
        city: 'Durham',
        gitHub: 'https://github.com/rlconley'
    }
]

let mainContainer = document.querySelector('#mainContainer')

let gavin =     {
    name: 'Gavin',
    city: "Traverse City",
    gitHub: "https://github.com/duffing09"
}

{/* <div class="person">
<h2>Gavin</h2>
<h4>Traverse City</h4>
<a href="https://github.com/duffing09">Link to GitHub</a>
</div> */}
// tell js to build this

let personDiv = document.createElement('div')
let nameDiv = document.createElement('h2')
nameDiv.innerText = gavin.name
personDiv.appendChild(nameDiv)
let cityDiv = document.createElement('h4')
cityDiv.innerText = gavin.city
personDiv.appendChild(cityDiv)
let gitHubLink = document.createElement('a')
gitHubLink.innerText = 'Link to GitHub'
gitHubLink.href = gavin.gitHub
personDiv.appendChild(gitHubLink)
mainContainer.appendChild(personDiv)
