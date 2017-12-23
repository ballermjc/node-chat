const   express     = require('express'),
        bodyParser  = require('body-parser'),
        app         = express();

app.use(bodyParser.json());
app.use(express.static(__dirname + '/../public/build'));

const messagesController = require( __dirname + '/controllers/messages_controller');
const baseURL = '/api/messages';

app.get(baseURL, messagesController.read);
app.post(baseURL, messagesController.create);
app.put(`${baseURL}/:id`, messagesController.update);
app.delete(`${baseURL}/:id`, messagesController.destroy);

app.listen(process.env.PORT, console.log("Boom Baby"));