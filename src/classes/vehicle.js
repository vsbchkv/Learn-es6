export default class Vehicle {
    /**
     * Create new vehicle item
     * @param {object} item
     */
    constructor(item) {
        this.type = item.type;
        this.name = item.name;
        this.speed = item.speed;
        this.capacity = item.capacity;
    };
};
