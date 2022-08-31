import Vehicle from './vehicle';

export default class Airplane extends Vehicle {
    constructor(item) {
        super(item);
        this.wingspan = item.wingspan;
    }
}
