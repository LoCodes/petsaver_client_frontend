

class Pet {

    static all = [] 

    static petsContainer = document.getElementById("pets-container") 
    

    // btn = document.getElementById('adopted-btn')
    
    
   

    static petForm = document.getElementById("form-container")

    constructor({id, name, age, species, breed, image_url, owner_id, adopted}){  
        this.id = id 
        this.name = name 
        this.age = age
        this.species = species 
        this.breed = breed 
        this.image_url = image_url 
        this.owner_id = owner_id
        this.adopted = adopted


        this.element = document.createElement('ol') 
        this.element.dataset.id = this.id 
        this.element.id = `pet-${this.id}`
        this.element.addEventListener('click', this.handleDelete)
        // this.element.addEventListener('click', this.handleAdopt)


        this.element.addEventListener('click', () => {
            
            const adoptBtn = event.target.innerText === 'Adopt';
            // let adoptStatus = document.querySelector("#pet-91 > strong > div")       
            
            if(adoptBtn){
                this.element
                petService.adoptPet(this.id)
               
                

                
            }

        })
        
        
        Pet.all.push(this) 
        
    }    
    
    handleAdopt = (event) => {
        let adoptStatus = document.querySelector("#pet-91 > strong > div") 
        
        if(event.target.innerText === 'Adopt') {
            this.element
            petService.adoptPet(this.id)
            
            // if(this.adopted){
            //     !this.adopted
            // }
              
           
        }
    }
    
    petHTML = () => {
        const owner = Owner.all.find(owner => this.owner_id === owner.id )
        
        this.element.innerHTML += `
            <div>
                <h3> </h3>                
                
                <p> 
                 Name: <strong> ${this.name} </strong>
                 Age: <strong> ${this.age} </strong>
                 Species: <strong> ${this.species} </strong>
                 Breed: <strong> ${this.breed} </strong>
                 Host: <strong> ${owner ? owner.name : null }
                 </p> 
                 
                <img src=${this.image_url} height="200" width="250">

              
                                                
            </div>
            <div> Adopted: <strong> ${this.adopted} </strong> </div> 


            <button id='adopted-btn'> Adopt </button> 
            
            <button id='delete-btn'> Delete </button>
        `
        
       
        return this.element
    }

    //


   

   

    

    // handleAdopt = (event) => {
    //     const adoptedContainer = document.getElementById("adopted-container")
    //     if (event.target.innerText === 'Adopt'){           
    //         this.element.append(adoptedContainer)
    
    //     //     event.target.parentNode.parentNode.detach().appendTo("#adopted-container")
    //     //     petsContainer.appendChild(this.element)
    //     //     this.element.adoptedContainer.appendChild(this.adoptedHTML())
    //     }
    // }

    handleDelete = (event) => {
       
        if (event.target.innerText === 'Delete'){
            
            this.element.remove()
          
            petService.deletePet(this.id)
        }
    }
   


     
    
    

    renderPet(){
        
        Pet.petsContainer.appendChild(this.petHTML())
    }


    static renderForm(){
        Pet.petForm.innerHTML += `
        <form id="new-pet-form">
            Name: <input type="text" id="name"> <br>
            Age: <input type="text" id="age"> <br>
            Species: <input type="text" id="species"> <br>
            Breed: <input type="text" id="breed"> <br>
            Image: <input placeholder="image url" type="text" id="image_url"> <br>       

            Host: <select id="owner-select" name="owner-select" >
                        
                   </select>

        
            
            <input type="submit" id="create" >
        <form>
        
        `            
    }

    static populateSelectBox() {
       
    
        const selectBox = document.getElementById('owner-select')
        for (const owner of Owner.all) {
            
            selectBox.innerHTML += ` <option value=${owner.id} > ${owner.name} </option> `
            
        }       
    }



 

    

    
}

