import { getPets, getWalkers, getCities } from "./database.js"

// Get copy of state for use in this module
const pets = getPets()
const walkers = getWalkers()
const cities = getCities()

// Function whose responsibility is to find the walker assigned to a pet
const findWalker = (pet, _walker, _city) => {
    let petWalker = null

    for (const walker of walkers) {
        if (walker.id === pet.walkerId) {
            petWalker = walker
        }

    }
    return petWalker
}
const findCity = (walker) => {
    let petWalkerCity = null
    for (const city of cities) {
        if (walker.id === city.id) {
            petWalkerCity = city
        }
    }
    return petWalkerCity

}

export const Assignments = () => {
    let assignmentHTML = " "
    assignmentHTML = "<ul>"

    for (const currentPet of pets) {
        const currentPetWalker = findWalker(currentPet, walkers);
        const petWalkerCity = findCity(currentPetWalker);
        assignmentHTML += `
            <li>
                ${currentPet.name} is being walked by
                ${currentPetWalker.name} in ${petWalkerCity.name} 
            </li>

        `
    }

    assignmentHTML += "</ul>"

    return assignmentHTML
}

