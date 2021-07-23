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

// document.getElementById("sort").addEventListener("click", function() { 
//     const pets = Pet.all.slice()
    
//     const sortedPets = pets.slice().sort((a,b) => (a.name < b.name) ? 1 : -1)
   
//     const currentPets = []
//     for(const pet of document.getElementById("pets-container").children ){
//         if(pet.tagName !== "H2") {
//             const petDiv = pet.firstElementChild
//             const petDets = petDiv.children[1]
//             const petName = petDets.firstElementChild.innerText.trim()
//             const petObj = Pet.all.find(p => p.name.trim() === petName)
//             currentPets.push(petObj)
            
//         }
//     } 
//     debugger;
//     if(pets === currentPets ){
//         for(pet of sortedPets){
//             pet.element.innerHTML = ""
//             pet.renderPet()
//         }
//     } else {
        
//         for(pet of pets) {
//             pet.element.innerHTML = ""
//             pet.renderPet()
//         }
//     }
// })



// let toSort  = document.getElementById("pets-container").children
// let sortBtn = document.getElementById("sort")
// sortBtn.addEventListener("click", handleSort)

    

// function handleSort() { 
    
//     if(sortBtn){
//        debugger;
     
//    }
    
//     //petsContainer.innerHTML +=  Pet.all
//     Pet.all.sort(function(b,a){
//         // console.log(a,b)
//         if(a.name > b.name) { return 1;}
//         if(a.name < b.name) {return -1;}
//         return 0;
//     });

        
// }


