// global variables

const base_url = "http://127.0.0.1:3000"   // need to only change here rather than everywhere 
const petService = new PetService(base_url)  
// new instance of PetService class,
// so when we create methods that makes the fetch request were going to need to call it on that petService instance


petService.getPets()

// any initializations of the application 


