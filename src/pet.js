

// 2. append pet object into the dom 


class Pet {

    // remember objects here only made the fetch call once. 
    static all = [] //- you have to remove those elements inside of this array, delete does not refresh the page. 

    // if you do delete an element you might have to add a method for the front end to FILTER out and remove that element from this array 

    constructor(id, name, age, species, breed, image_url, owner_id){  // mimic my backend with category id to easily access the has_many relationship 
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


        Pet.all.push(this)  // this is that newly made Pet instance 

    }
}