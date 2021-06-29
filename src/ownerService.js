class OwnerService {   //new instance of a class 

    constructor(endpoint){    // initialized with the end point (local host)
        this.endpoint = endpoint
    }


    getOwners(){     // fetch request to get owners 
        fetch(`${this.endpoint}/owners`)
        .then(resp => resp.json())
        .then(owners => {
            for (const owner of owners) {   //iterate over each owner 

                const o = new Owner(owner)  // created new instance of owner passing in each iterated owner 
                o.slapOnDom2() // grabbed that iterated array and slapped on the dom 
            }
        })
    }
}