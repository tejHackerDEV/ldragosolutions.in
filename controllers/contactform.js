const express = require('express');
const router = express.Router();
const contactformServices = require('../services/contactform');
class contactformController {

    contact = async(req, res) => {
        console.log("contactform sucess")
        let name = req.body.name;
        let date = req.body.date;
        let mailId = req.body.mail;
        let phnNo = req.body.phone;
        let msg = req.body.topic;

        global.res = res;

        try {
            let result = await contactformServices.contact(name, date, mailId, phnNo, msg);

            if (result) {
                global.snackMsg={data:"SUCCESS we will reach you on scheduled date..."}
                console.log("data send ")
                res.redirect('/connect');
            }

        } catch (e) {
            global.snackMsg={data:"Error while scheduling meet please try after sometime..."};
            console.log(e)
            res.redirect('/connect');
        }
    }
}


module.exports = contactformController;