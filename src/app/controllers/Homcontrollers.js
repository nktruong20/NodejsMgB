const Room = require ('../models/Room');
const { mutipleMongooseToObj } = require('../../util/mongoose');


class homecontrollers{
   
    index(req, res) {
        Room.find()
            .then(room => {
                res.render('new', {
                    room: mutipleMongooseToObj(room)
                });
            })
            .catch(error => next(error));
    }
    
}
module.exports = new homecontrollers;