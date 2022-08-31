
import Airplaine from '../classes/airplane';
import Auto from '../classes/auto';
import Boat from '../classes/boat';


const createVehicle = (item) => {
    const vehicleType = item.type;
    switch (vehicleType) {
        case 'airplane':
            return new Airplaine(item);
        case 'auto':
            return new Auto(item);
        case 'boat':
            return new Boat(item);
        default: throw new Error(`vehicle type ${vehicleType} is not valid `);
    }
};

export default createVehicle;