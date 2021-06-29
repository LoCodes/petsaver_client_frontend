class Owner {
    static all = []

    static ownersContainer = document.getElementById("owners-container")

    // do I wanna add a 
    // static ownerForm = document.getElementById("form-container")


    constructor({id, name}) {
        this.id = id
        this.name = name

        this.element = document.createElement('ul')
        this.element.dataset.id = this.id
        this.element.id = `owner-${this.id}`


        Pet.all.push(this)

    }

    ownerHTML() {
        this.element.innerHTML += `
            <div>
                <h3> ${this.name}</h3>

            </div> 
        
        `

        return this.element 
    }


    slapOnDom2() {
        Owner.ownersContainer.appendChild(this.ownerHTML())
    }
}