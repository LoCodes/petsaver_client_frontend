
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
                p.slapOnDom()
            }
        }) /// We dont wanna keep calling this, we only wanna call it one time. 
        // added curly braces in the constructor properties to utilize destructuring features 
    } 

 // gather data for this for then send post request to our service 
    createPet(){
        const pet = {
            //name: document.createElement('name').value,
            name: document.getElementById('name').value,
            age:  document.getElementById('age').value,
            species: document.getElementById('species').value,
            breed: document.getElementById('breed').value,
            image_url: document.getElementById('image_url').value,  //FIXED!
            
            // owner_id: document.getElementById('owner_id').value, //UPDATE LATER!                
            // owner_parsed: parseInt(owner_id)
            owner_id: parseInt(document.getElementById('owner-select').value) // not grabbing name only id 
            
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
            p.slapOnDom()
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