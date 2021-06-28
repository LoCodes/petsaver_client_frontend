class Owner {
    static all = []

    static ownersContainer = document.getElementById("owners-container")

    // do I wanna add a 
    // static ownerForm = document.getElementById("form-container")


    constructor({id, name}) {
        this.id = id
        this.name = name

        this.element = document.createElement('li')
        this.element.dataset.id = this.id
        this.element.id = `owner-${this.id}`


        Pet.all.push(this)

    }
}