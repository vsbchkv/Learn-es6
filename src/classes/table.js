import { MAPS } from '../constants';
const { tableNames, tableHeaders } = MAPS;
export default class Table {
    /**
     * creates ne tables
     * @param {string} title
     * @param {object} description
     */
    constructor(title, description) {
        this.tableName = this.getTableName(title);
        this.tableHeaders = this.getTableHeaders(description);
        this.tableRows = [];
    }
    /**
     *
     * @param {string} title
     * @returns {string} - Creates plural form of vehicle type name
     */
    getTableName(title) {
        return tableNames.has(title) ? tableNames.get(title) : null;
    };
    /**
     * 
     * @param {object} description
     * @returns {array} creates array of allowed table headers
     */
    getTableHeaders(description) {
        const headers = Object.keys(description).filter((key) => {
            if (tableHeaders.has(key)) {
                return tableHeaders.get(key);
            }
        });
        return headers;
    };
}
