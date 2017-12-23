let messages = [];
let id = 0;

module.exports = {
    create: (req, res) => {
        const { text, time } = req.body;
        messages.push( {id, text, time} );
        id++;
        res.status(200).send(messages);
    },
    read: (req, res) => {
        res.status(200).send(messages);
    },
    update: (req, res) => {
        const { text } = req.body;
        const id = req.params.id;
        const indexOfMessage = messages.findIndex( message => message.id == id);
        messages[indexOfMessage] = {
            id: messages[indexOfMessage].id,
            text: text ? text : messages[indexOfMessage].text,
            time: messages[indexOfMessage].time
        };
        res.status(200).send(messages);
    },
    destroy: (req, res) => {
        const id = req.params.id;
        const indexOfMessage = messages.findIndex( message => message.id == id);
        messages.splice(indexOfMessage, 1);
        res.status(200).send(messages);
    }
}