// global variables

const base_url = "http://127.0.0.1:3000" 

const ownerService = new OwnerService(base_url) // new instance of OwnerService call
const petService = new PetService(base_url)  //new instand of PetService call 

// let button = document.createElement('button')
// document.body.append('button') 



// new instance of PetService class,
// so when we create methods that makes the fetch request were going to need to call it on that petService instance


ownerService.getOwners()
petService.getPets()

// any initializations of the application 


//console.log(Pet.all)  //- just checked objects in console 


Pet.petForm.addEventListener('submit', handleSubmit) // submits form 
Owner.ownerForm.addEventListener('submit', handleSubmit2)




function handleSubmit(event){ 
    event.preventDefault()
    petService.createPet()
        
    event.target.reset()   
}

function handleSubmit2(event){

    event.preventDefault()
    ownerService.createOwner()
    
    event.target.reset()
}