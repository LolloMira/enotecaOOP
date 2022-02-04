class Beverage {
    constructor(name, brand, price, alcholContent){
    this.name = name;
    this.brand = brand;
    this.price = price;
    this.alcholContent = alcholContent;
    this.dateAdded = new Date();
    this.tax = 0.22;


    }

    get costumerPrice() {
        return this.price + (this.price * this.tax);
    }


    get code() {
        return this.constructor.name.toLowerCase() + 
                + this.brand.toLowerCase().substring(0,2)
                + this.name.toLowerCase().substring(0,2)
                + this.dateAdded.getTime();
    }

    toString() {
        let description = this.constructor.name + "\n";
        for(const key in this) {
            if (Object.hasOwnProperty.call(this, key)) {
                const value = this[key];
                description += key + ": " + value + "\n";
            }
        }
        description +="costumerPrice: " + this.costumerPrice + "\n";
        description += "code: " + this.code +"\n";
        return description;
    }
}


class Wine extends Beverage {
    constructor(name, brand, price, alcholContent, prodYear, vine){
        super(name, brand, price, alcholContent)
        this.prodYear = prodYear;
        this.vine = vine;
}
    get costumerPrice() {
        const taxedPrice = this.price + (this.price * this.tax) ;
        let now = new Date();
        let ageTax = (now.getFullYear() - this.prodYear) / 100;
        const agedPrice = taxedPrice + (taxedPrice * ageTax)
        return agedPrice.toFixed(2);
    }
}
class Beer extends Beverage {
    constructor(name, brand, price, alcholContent, type){
        super(name, brand, price, alcholContent)
        this.type = type;
 }

}

class Spirit extends Beverage {
    constructor(name, brand, price, alcholContent){
        super(name, brand, price, alcholContent)
        this.tax = 0.30;
    }

}