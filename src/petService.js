
// make all service calls regarding pet object 



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
                p.renderPet()
            }
            
        })
        // added curly braces in the constructor properties to utilize destructuring features 
    } 

 // gather data for this for then send post request to our service 
    createPet(){
        const pet = {
            name: document.getElementById('name').value,
            
            age:  document.getElementById('age').value,
            species: document.getElementById('species').value,
            breed: document.getElementById('breed').value,
            image_url: document.getElementById('image_url').value, 
            
            
            owner_id: parseInt(document.getElementById('owner-select').value) 
            
        }
        
        

        const configObj = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                //'Accept': 'application/json'
            },
            body: JSON.stringify(pet)
        }

        fetch(`${this.endpoint}/pets`, configObj)
        .then(resp => resp.json())
        .then(pet => {
            //console.log(pet)
    
            const p = new Pet(pet)
            p.renderPet()
        })        
    }

    deletePet(id){        
        fetch(`${this.endpoint}/pets/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(resp => resp.json())
        .then(json => alert(json.message))
    }     
} 