

// 2. append pet object into the dom 


class Pet {

    // remember objects here only made the fetch call once. 
    static all = [] 

    static petsContainer = document.getElementById("pets-container") // where to append this object


    static petForm = document.getElementById("form-container")

    constructor({id, name, age, species, breed, image_url, owner_id}){  // mimic my backend with category id to easily access the has_many relationship 
        this.id = id 
        this.name = name 
        this.age = age
        this.species = species 
        this.breed = breed 
        this.image_url = image_url 
        this.owner_id = owner_id


        this.element = document.createElement('ol') // instantiated with its own element
        this.element.dataset.id = this.id  //contain the encoded Values of Attributes of that object.
        this.element.id = `pet-${this.id}`
        this.element.addEventListener('click', this.handleDelete)


        Pet.all.push(this)  // this is that newly made Pet instance 
        
    }    


    petHTML = () => {
        const owner = Owner.all.find(owner => this.owner_id === owner.id ) // had to iterate over the owner to get owner.name
        
        this.element.innerHTML += `
            <div>
                <h3> </h3>                
                
                <p> 
                 Name: <strong> ${this.name} </strong>
                 Age: <strong> ${this.age} </strong>
                 Species: <strong> ${this.species} </strong>
                 Breed: <strong> ${this.breed} </strong>
                 Host: <strong> ${owner ? owner.name : null }</p>
                <img src=${this.image_url} height="200" width="250">
                                                
            </div>
            
            <button id='delete-btn'> Delete </button>
        `

       
        return this.element
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

 
   

    handleDelete = (event) => {
       
        if (event.target.innerText === 'Delete'){
            this.element.remove()
            petService.deletePet(this.id)
        }
    }
}
