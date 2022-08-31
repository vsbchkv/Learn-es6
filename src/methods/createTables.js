import Table from '../classes/table';
import createVehicleItem from './createVehicleItem';
/**
 * transforms data from json for creation tables
 * @param {object} data
 *
 * @returns {array} - array of objects
 */
export default (data) => {
    /**
     * tablesMap - keeps transformed data
     */
    const tablesMap = new Map();

    /**
     *
     * @param {object} item - adds new vehicle objects to map
     */
    const pushNewVehicleitem = item => {
        const vehicleType = item.type;
        const targetTable = tablesMap.get(vehicleType).tableRows;
        targetTable.push(createVehicleItem(item));
    };

    /**
     * @param {object} - each vehicle item from json
     *
     * creates new key:value pair in tablesMap if vehicle type isn't exists and add create new vehicle objects
     */

    data.forEach((item) => {
        let vehicleType = item.type;
        if (tablesMap.has(vehicleType)) {
            pushNewVehicleitem(item);
        }
        else {
            tablesMap.set(vehicleType, {});
            const newTable = new Table(vehicleType, item);
            Object.assign(tablesMap.get(vehicleType), newTable);
            pushNewVehicleitem(item);

        };

    });

    return [...tablesMap.values()];
};

