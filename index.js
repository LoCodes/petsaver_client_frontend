// global variables

const base_url = "http://127.0.0.1:3000" 

const ownerService = new OwnerService(base_url) // new instance of OwnerService call
const petService = new PetService(base_url)  //new instand of PetService call 

// let button = document.createElement('button')
// document.body.append('button') 

// let btn = document.createElement("button");
// btn.innerHTML = "CLICK ME";
// document.body.append(btn); 

// new instance of PetService class,
// so when we create methods that makes the fetch request were going to need to call it on that petService instance

ownerService.getOwners()
petService.getPets()

// any initializations of the application 


//console.log(Pet.all)  //- just checked objects in console 


Pet.petForm.addEventListener('submit', petSubmit) // submits form 
Owner.ownerForm.addEventListener('submit', ownerSubmit)

// let adoptBtn = document.getElementById("adopted-btn")
// adoptBtn.addEventListener("click", handleAdopt())


function petSubmit(event){ 
    event.preventDefault()
    petService.createPet()
        
    event.target.reset()   
}

function ownerSubmit(event){

    event.preventDefault()
    ownerService.createOwner()
    
    event.target.reset()
}

// sort pets by name 
document.getElementById("sortA").addEventListener("click", function() {
    const pets = Pet.all 
    const sortBack = pets.sort((b, a) => (a.name < b.name) ? 1 : -1)

    for(pet of sortBack){
        pet.element.innerHTML = ""
        pet.renderPet()
    }
})

document.getElementById("sortB").addEventListener("click", function() { 
    const pets = Pet.all
    const sortedPets = pets.sort((a,b) => (a.name < b.name) ? 1 : -1)
    for(pet of sortedPets){
        pet.element.innerHTML = ""
        pet.renderPet()
    }
})
