class Owner {
    static all = []  // empty array to put owners in 

    static ownersContainer = document.getElementById("owners-container")  // grabbed the element were manipulating


    static ownerForm = document.getElementById("owner-form-container")


    constructor({id, name}) {    // initializing owner with its id and name 
        this.id = id
        this.name = name

        this.element = document.createElement('ul')   // instantiated element with the owner 
        this.element.dataset.id = this.id     // set the id to the element 
        this.element.id = `owner-${this.id}`  // set  new element id 


        Owner.all.push(this)  // pushed all owners into all array 
       

    }

    ownerHTML() {   
        
        
        this.element.innerHTML += `
            <div class="owner-list" >
                
                <li> ${this.name}</li>

            </div> 
        
        `

        return this.element  
    }

    renderOwner() {   // appending the owners into the DOM 
        Owner.ownersContainer.appendChild(this.ownerHTML())
    }


    static renderForm() {
        Owner.ownerForm.innerHTML += `
        <form id="new-owner-form"> 
           New Host Name: <input type="text" id="owner-name">


            <input type="submit" id="create" >


        <form>
        `
    }


    
}