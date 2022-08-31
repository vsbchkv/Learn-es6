/**
 * receives data from the server and returns json
 * @param {string} url - API route
 *
 * @returns {json}
 * or
 * @throws {console.error()}
 */

export default async (url) => {
    const response = await fetch(url);
    if (response.ok) {
        return await response.json();
    }
    else {
        throw new Error(`Cannot get data from ${url} server response ${response.status}`);
    }
};
