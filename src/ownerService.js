class OwnerService{   //new instance of a class 

    constructor(endpoint){    // initialized with the end point (local host)
        this.endpoint = endpoint
    }


    getOwners(){     // fetch request to get owners 
        fetch(`${this.endpoint}/owners`)
        .then(resp => resp.json())
        .then(owners => {
            
            for (const owner of owners) {   //iterate over each owner 
                
                const o = new Owner(owner)  // created new instance of owner passing in each iterated owner 
                
                
                o.renderOwner() // grabbed that iterated array and slapped on the dom 
               
            }
            Owner.renderForm2()
            Pet.renderForm()     
            Pet.populateSelectBox()
        })
    }


    createOwner() {
        const owner = {

            name: document.getElementById('name').value 

        }

        const configObj = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                //'Accept': 'application/json'
            },
            body: JSON.stringify(owner)
        }

        fetch(`${this.endpoint}/owners`, configObj)
        .then(resp => resp.json())
        .then(owner => {
            //console.log(pet)
            const o = new Owner(owner)
            o.renderOwner()
        })  
    }
}