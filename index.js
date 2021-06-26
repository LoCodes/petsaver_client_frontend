// global variables

const base_url = "http://127.0.0.1:3000"   // need to only change here rather than everywhere 
const petService = new PetService(base_url)  


// const deleteBttn = document.getElementById('delete-bttn')
// deleteBttn.addEventListener('click', )

// new instance of PetService class,
// so when we create methods that makes the fetch request were going to need to call it on that petService instance


petService.getPets()

// any initializations of the application 


// console.log(Pet.all)  - just checked objects in console 

Pet.renderForm()
Pet.petForm.addEventListener('submit', handleSubmit)


// gather all data from createPet function and send post request to our service 

function handleSubmit(){
    event.preventDefault()
    petService.createPet()
    event.target.reset()
   
}