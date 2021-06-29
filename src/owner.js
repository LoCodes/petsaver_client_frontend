class Owner {
    static all = []  // empty array to put owners in 

    static ownersContainer = document.getElementById("owners-container")  // grabbed the element were manipulating

    // do I wanna add a 
    static ownerForm = document.getElementById("form-container")


    constructor({id, name}) {    // instantiated owner with its id and name 
        this.id = id
        this.name = name

        this.element = document.createElement('p')   // instantiated element with the owner 
        this.element.dataset.id = this.id     // set the id to the element 
        this.element.id = `owner-${this.id}`  // set  new element id 


        Pet.all.push(this)  // pushed all owners into all array 

    }

    ownerHTML() {   // created all these elements for each owner created in 'ul' element 
        this.element.innerHTML += `
            <div>
                <h3> ${this.name}</h3>

            </div> 
        
        `

        return this.element  
    }


    slapOnDom2() {   // appending the owners into the DOM 
        Owner.ownersContainer.appendChild(this.ownerHTML())
    }

    // static renderForm2() { // i may not need this 
    //     Owner.ownerForm.innerHTML += `
    //     <form id="new-owner-form">
    //         New Owner Name: <input type="text" id="name">

    //         Select Owner: 
    //             <select id="owner-id" name="owner-id" > 
    //                 <option value="owner-1"> Loren </option>
    //                 <option value="owner-2"> John </option>
    //                 <option value="owner-3"> Sally </option>
    //                 <option value="owner-4"> Maria </option>
    //                 <option value="owner-5"> Andy </option>

    //             </select>
    //         <input type="submit" id="create" >

    //     </form>     

    //     `
    // }
}