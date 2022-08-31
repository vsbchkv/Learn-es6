import Vehicle from './vehicle';

export default class Auto extends Vehicle {
    constructor(item) {
        super(item);
        this.body = item.body;
    }
}
