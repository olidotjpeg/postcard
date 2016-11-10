var axios = require('axios');
var promise = require('bluebird');

/**
 * Handle request Errors
 * @param response
 * @returns {*}
 */
function handleRequestError(response) {
    var error;
    var message;

    message = response.message;

    // @NOTE Fallback for double data because of axios
    if (!response.message) {
        message = response.data.message;
    }

    error = new Error('RequestError: ' + message);
    error.response = response;
    return promise.rejected(error);
}

/**
 * Get
 * @param url
 * @param options
 * @returns {axios.Promise}
 */
function get(url, options) {
    return axios.get(url, options)
        .then(function(response) {
            return response.data;
        })
        .catch(function(response) {
            return handleRequestError(response);
        });
}

module.exports = {
    get: get
};