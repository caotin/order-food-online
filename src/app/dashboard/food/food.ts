

export class FoodBuilder {
    private id: string;
    private name: string;
    private description: string;
    private idRestaurant: string;
    private image: string;
    private price: number;
    private createAt: string;
    constructor() { }

    setId(id: string) {
        this.id = id;
        return this;
    }

    get Id() {
        return this.id;
    }

    setName(name: string) {
        this.name = name;
        return this;
    }

    get Name() {
        return this.name;
    }

    setDescription(description: string) {
        this.description = description;
        return this;
    }

    get Description() {
        return this.description;
    }

    setIdRestaurant(idRestaurant: string) {
        this.idRestaurant = idRestaurant;
        return this;
    }

    get IdRestaurant() {
        return this.idRestaurant;
    }

    setImage(image: string) {
        this.image = image;
        return this;
    }

    get Image() {
        return this.image;
    }

    setPrice(price: number) {
        this.price = price;
        return this;
    }

    get Price() {
        return this.price;
    }

    setCreateAt(createAt: string) {
        this.createAt = createAt;
        return this;
    }

    get CreateAt() {
        return this.createAt;
    }

    build(): Food {
        return new Food(this);
    }
}

export class Food {
    private id: string;
    private name: string;
    private description: string;
    private idRestaurant: string;
    private image: string;
    private price: number;
    private createAt: string;
    constructor(private foodBuilder: FoodBuilder) {
        this.id = foodBuilder.Id;
        this.name = foodBuilder.Name;
        this.description = foodBuilder.Description;
        this.image = foodBuilder.Image;
        this.idRestaurant = foodBuilder.IdRestaurant;
        this.price = foodBuilder.Price;
        this.createAt = foodBuilder.CreateAt;
    }

    get Id() {
        return this.id;
    }

    get Name() {
        return this.name;
    }

    get Description() {
        return this.description;
    }

    get IdRestaurant() {
        return this.idRestaurant;
    }

    get Image() {
        return this.image;
    }

    get Price() {
        return this.price;
    }

    get CreateAt() {
        return this.createAt;
    }
}