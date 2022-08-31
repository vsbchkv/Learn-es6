const VEHICLES_API_ENDPOINT = 'https://api.npoint.io/d6093c8fd6ed17c729ef';
const MAPS = {
    tableNames: new Map(
        [
            ['airplane', 'Airplaines'],
            ['auto', 'Automobiles'],
            ['boat', 'Boats'],
        ]
    ),
    tableHeaders: new Map(
        [
            ['name', 'Name'],
            ['speed', 'Speed'],
            ['capacity', 'Capacity'],
            ['body', 'Body'],
            ['wingspan', 'Wingspan'],
            ['maxpower', 'Max power'],
        ]
    )
};
export { VEHICLES_API_ENDPOINT, MAPS };