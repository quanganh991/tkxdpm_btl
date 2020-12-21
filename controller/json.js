module.exports = {

    //  ---------------------
    // | Config for default  |
    // | error message       |
    // | author: pvhau       |
    //  ---------------------
    success: function (req, res, data = '') {
        res.status(200).send(
        //     {
        //     message: '',
        //     data: data,
        //     status: 'SUCCESS',
        //     code: 200
        // }
            data
        )
        return 200;
    },

    //  ----------------------
    // | Config for not found |
    // | url error message    |
    // | author: pvhau       |
    //  ----------------------

    notFoundUrl: function (req, res) {
        let message = req.originalUrl + ' not found';
        res.status(404).send(
        //     {
        //     message: message,
        //     data: '',
        //     status: 'FAILED',
        //     code: 404
        // }
            data
        )
        console.log(message);
        elkLog.Error(message, 'Client');
        return message;
    }
}
