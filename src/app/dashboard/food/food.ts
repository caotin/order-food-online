

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

    constructor(private foodBuilder: FoodBuilder) {

        foodBuilder.Name;
        foodBuilder.Description;
        foodBuilder.Image;
        foodBuilder.IdRestaurant;
        foodBuilder.Price;
        foodBuilder.CreateAt;
    }

    get id() {
        return this.foodBuilder.Id;
    }

    get name() {
        return this.foodBuilder.Name;
    }

    get description() {
        return this.foodBuilder.Description;
    }

    get idRestaurant() {
        return this.foodBuilder.IdRestaurant;
    }

    get image() {
        return this.foodBuilder.Image;
    }

    get price() {
        return this.foodBuilder.Price;
    }

    get createAt() {
        return this.foodBuilder.CreateAt;
    }
}