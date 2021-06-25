// make all service calls regarding pet object 

// making service call pertaining the pet object 


class PetService{

    constructor(endpoint){ 
        this.endpoint = endpoint  // have this endpoint to reference back to rather than calling base_url everywhere 
    }

    // 1. Read/Index Action

    getPets(){
        fetch(`${this.endpoint}/pets`) // getting an array of object - pets from backend 
        .then(resp => resp.json())
        .then(pets => {
            for (const pet of pets) {
                const p = new Pet(pet) // destructure feature "pet " rather saying pet.name, pet.age, etc 
                p.slapOnDom()
            }
        }) /// We dont wanna keep calling this, we only wanna call it one time. 
        // added curly braces in the constructor properties to utilize destructuring features 
    } 

 // gather data for this for then send post request to our service 
    createPet(){
        const pet = {
            name: document.getElementById('name').value,
            age:  document.getElementById('age').value,
            species: document.getElementById('species').value,
            breed: document.getElementById('breed').value,
            image: document.getElementById('image').value,  // NEEDS TO BE .SRC?? 
            owner_id: 1, //document.getElementById('owner_id').value UPDATE LATER!
        
        }

        //debugger;

        const configObj = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(pet)
        }

        fetch(`${this.endpoint}/pets`, configObj)
        .then(resp => resp.json())
        .then(pet => {
            console.log(pet)
        })

        
    }
     
}  

