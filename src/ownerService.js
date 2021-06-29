class OwnerService {

    constructor(endpoint){
        this.endpoint = endpoint
    }


    getOwners(){
        fetch(`${this.endpoint}/owners`)
        .then(resp => resp.json())
        .then(owners => {
            for (const owner of owners) {

                const o = new Owner(owner)
                o.slapOnDom2()
            }
        })
    }
}