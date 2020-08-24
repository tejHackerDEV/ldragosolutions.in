let nodemailer = require('nodemailer');

class contactform {
    contact = async(name, date, mailId, phnNo, msg) => {

        return new Promise((resolve, reject) => {

            let transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    user: process.env.mail,
                    pass: process.env.mailPassword
                }
            });
            console.log(msg);
            let mailOptions = {
                from: mailId,
                to: "tejasimha222@gmail.com",
                subject: "Service Request",
                text: 'Hi, I am ' + name+ '\nwe can Scheduled our meeting on: ' + date + '.\nPhone Number: ' + phnNo + '\nMailId: ' + mailId + '\nInterested: ' + msg
            };

            transporter.sendMail(mailOptions, function(error, info) {
                if (error) {
                    console.log(error);
                   
                    return reject({ message: "Error while sending mail", error: "FAILURE" });
                } else {
                    
                  

                    console.log("services Success");
                    return resolve({ message: "Mail send Successfully", data: "SUCCESS" });
                }
            });
        });
    }
}
let contact = new contactform();

module.exports = contact;