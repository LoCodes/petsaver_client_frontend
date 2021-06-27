

// 2. append pet object into the dom 


class Pet {

    // remember objects here only made the fetch call once. 
    static all = [] //- you have to remove those elements inside of this array, delete does not refresh the page. 
    // if you do delete an element you might have to add a method for the front end to FILTER out and remove that element from this array 

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


        this.element = document.createElement('li') // instantiated with its own element
        this.element.dataset.id = this.id 
        this.element.id = `pet-${this.id}`
        //this.element.image_url = this.image_url(100, 200);

        this.element.addEventListener('click', this.handleClick)



        Pet.all.push(this)  // this is that newly made Pet instance 

    }


    petHTML(){
        this.element.innerHTML += `
            <div>
                <h3> ${this.name}</h3>
                
                <p>${this.age} - ${this.species} - ${this.breed} </p>
                <img src=${this.image_url} height="200" width="250">

                
                
            </div>
            <button id='delete-btn'> Delete </button>
        `

        //console.log(this.image_url)
        return this.element
    } // seperated from appending incase you wanna edit this, it wont automatically re-append to DOM. NO duplicates!

    slapOnDom(){
        Pet.petsContainer.appendChild(this.petHTML())
    }


    static renderForm(){
        Pet.petForm.innerHTML += `
        <form id="new-pet-form">
            Name: <input type="text" id="name">
            Age: <input type="text" id="age">
            Species: <input type="text" id="species">
            Breed: <input type="text" id="breed">
            Image: <input type="text" id="image">

            Image2: <input type="file" id="imgInput" accept="image/png, image/jpeg">
            
            <input type="submit" id="create">
        <form>
        
        `
    }

    handleClick = () =>{
       
        if (event.target.innerText === 'Delete'){
            this.element.remove()
            petService.deletePet(this.id)
        }
    }
}