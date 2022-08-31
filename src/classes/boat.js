import Vehicle from './vehicle';
export default class Boat extends Vehicle {
    constructor(item) {
        super(item);
        this.maxpower = item.maxpower;
    }
}
