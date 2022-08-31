import { VEHICLES_API_ENDPOINT as vehiclesUrl } from './constants';
import { createNode, createTables, getData, renderTables, loader } from './methods';

const HEADER = createNode('h1', 'Vehicles list');
document.body.append(HEADER);
const tablesLoader = { htmlTag: 'h2', text: 'loading...', idName: 'tablesLoader' };

loader.addLoader(tablesLoader);
getData(vehiclesUrl)
    .then((data) => {
        const vehiclesTables = createTables(data);
        renderTables(vehiclesTables);
    }
    )

    .catch(() => {
        const errorLoader = ['h2', 'Cannot load data', { name: 'id', value: 'errorLoader' }];
        loader.addLoader(errorLoader);
    })
    .finally(() => {
        loader.hideLoader(tablesLoader);
    });

