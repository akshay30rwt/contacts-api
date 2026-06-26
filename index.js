const express = require('express');
const app = express();

app.use(express.json());

const PORT = 3000;

let contacts = [];
let nextId = 1;

app.get('/', (req, res) => {
    res.status(200).json({
        message: 'Contacts API is running'
    });
});

app.get('/contacts', (req, res) => {
    if(contacts.length === 0) {
        return res.status(404).json({
            message: 'There are no saved contacts'
        });
    }

    res.status(200).json(contacts);
});

app.post('/contacts', (req, res) => {
    const { name, number } = req.body;

    const newContact = {
        id: nextId,
        name: name,
        number: number
    }
    nextId++;

    contacts.push(newContact);
    res.status(201).json({
        message: `Contact: '${name}' saved successfully`
    });
});

app.put('/contacts/:id', (req, res) => {
    const { name, number } = req.body;
    const contactId = Number(req.params.id);
    const index = contacts.findIndex(contact => contact.id === contactId);

    if(index === -1) {
        return req.status(404).json({
            message: `Contact with ID: ${contactId} not found`
        });
    }

    contacts[index].name = name;
    contacts[index].number = number;
    res.status(200).json({
        message: `ID: ${contactId} | Contact: '${name}' updated successfully`
    });
});

app.delete('/contacts/:id', (req, res) => {
    const contactId = Number(req.params.id);
    const index = contacts.findIndex(contact => contact.id === contactId);

    if(index === -1) {
        return res.status(404).json({
            message: `Contact with ID: ${contactId}, not found`
        });
    }
    const deletedContact = contacts[index];
    contacts.splice(index, 1);
    res.status(200).json({
        message: `Contact: '${deletedContact.name}' deleted successfully`
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
});