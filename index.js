// global variables

const base_url = "http://127.0.0.1:3000" 

const ownerService = new OwnerService(base_url) // new instance of OwnerService call
const petService = new PetService(base_url)  //new instand of PetService call 

// new instance of PetService class,
// so when we create methods that makes the fetch request were going to need to call it on that petService instance


ownerService.getOwners()
petService.getPets()

// any initializations of the application 


//console.log(Pet.all)  //- just checked objects in console 


Pet.petForm.addEventListener('submit', handleSubmit) // submits form 

// Owner.renderForm2() 
// Owner.ownerForm.addEventListener('submit', handleSubmit2)



// gather all data from createPet function and send post request to our service 

function handleSubmit(){  // event handler for form 
    event.preventDefault()
    petService.createPet()
    
    event.target.reset()   
}
// function handleSubmit2(){

//     event.preventDefault()
//     ownerService.createOwner()
    
//     event.target.reset()
// }