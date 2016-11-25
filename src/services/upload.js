var request = require('./request.js');

/**
 * Upload a photo
 * @param options
 * @returns {axios.Promise|Promise.<T>|*}
 */
function upload() {

    return request.post('http://localhost:8000/upload')
        .then(function(response) {
            return {
                response: response
            };
        });
}

module.exports = {
    upload: upload
};