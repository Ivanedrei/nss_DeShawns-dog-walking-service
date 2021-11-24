import { getWalkers, getCities } from "./database.js"

const walkers = getWalkers()
const cities = getCities()


export const Walkers = () => {
    let walkerHTML = "<ul>"

    for (const walker of walkers) {
        walkerHTML += `<li id="walker--${walker.id}">${walker.name}</li>`
    }

    walkerHTML += "</ul>"
    return walkerHTML
}

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        if (itemClicked.id.startsWith("walker")) {
            const [, walkerId] = itemClicked.id.split("--")
            let cityName = null
            for (const walker of walkers) {
                if (walker.id === parseInt(walkerId)) {
                    for (const city of cities) {
                        if (walker.cityId === city.id) {
                            cityName = city.name

                        }
                    }
                    window.alert(`${walker.name} services ${cityName}`)
                }
            }
        }
    }
)
