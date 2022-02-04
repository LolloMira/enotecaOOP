class cellar{

    constructor(){
        this.beers = [];
        this.spirits = [];
        this.wines = [];

    }
    
    addWine(wine){
        if () {

        }
    }


    checkWinePresence(wine){
        return cellar.checkPresence(wine, thuis.wines);
    }

    static checkPresence(neweBeverage, arrayOfBevareges){
        let isPresent = false;
        for (const bevareage of arrayOfBevareges) {
            if (beverage.code === newBeverage.code) {
                isPresent = true;
            }
            
        }
           return isPresent;
    }
}