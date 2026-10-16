export const saveCities = cities => {
    const citiesList = cities.map(response => response.city)
    localStorage.setItem("cities", JSON.stringify(citiesList))
}