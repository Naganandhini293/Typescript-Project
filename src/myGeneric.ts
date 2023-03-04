function identity<Type>(val: Type): Type {
    return val;
}

interface Bootle {
    brand: string;
    type: number;
}

identity<Bootle>({
    brand: "nana",
    type: 3,
});

function getProducts1<T>(products: T[]): T {
    return products[3];
}

const getProducts2 = <T>(products: T[]): T => {
    return products[3];
};

//Generic class
function anaotherFunc<T, U>(valOne: T, valTwo: U): {} {
    return {
        valOne,
        valTwo,
    };
}

interface Quiz {
    name: string;
    type: string;
}

interface Course {
    name: string;
    author: string;
    subject: string;
}

class Sellable<T> {
    public card: T[] = [];
    addtoCart(product: T) {
        this.card.push(product);
    }
}
