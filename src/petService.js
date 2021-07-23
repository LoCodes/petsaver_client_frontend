
// make all service calls regarding pet object 



class PetService{

    constructor(endpoint){ 
        this.endpoint = endpoint 
    }


    getPets(){
        fetch(`${this.endpoint}/pets`) 
        .then(resp => resp.json())
        .then(pets => {

            // sorted pets alphabetically 
            // pets.sort(function(a,b){
            //     // console.log(a,b)
            //     if(a.name > b.name) { return 1;}
            //     if(a.name < b.name) {return -1;}
            //     return 0;
            // });

             
            
            for (const pet of pets) {
                
                const p = new Pet(pet)
               
                p.renderPet()
            }
            
            
        })


        
    } 

    
    

 // gather data for this for then send post request to our service 
    createPet(){
        const pet = {
            name: document.getElementById('name').value,
            
            age:  document.getElementById('age').value,
            species: document.getElementById('species').value,
            breed: document.getElementById('breed').value,
            // adopted: document.getElementById('adopted').value, 
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



    
    
    adoptPet(id){        
        
        fetch(`${this.endpoint}/pets/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "adopted": true

            }
            )
        })
        .then(resp => resp.json())
        .then(data => {
            debugger; 
            let pet = Pet.all.find(pet => this.pet_id === pet.id)
    
            pet.adopted = data.adopted
        })
        // .then(resp => resp.json())
        // .then(adopted  => {
        //     let pet = Pet.all.find(pet => pet.id === pet_id)
        //     pet.adopted = adopted.adopted
           
    
        //     // const p = new Pet(pet)
        //     // p.renderPet()
        // }) 
            
    }  
} 