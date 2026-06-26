# Contacts API

A REST API to manage contacts built with Node.js and Express.js.

## Features
- Get all contacts
- Create a new contact
- Update a contact
- Delete a contact
- Search contacts by name

## Tech Stack
- Node.js
- Express.js

## How to Run
npm install
npm run dev

## API Endpoints
GET    /contacts              - Get all contacts
POST   /contacts              - Create a contact
PUT    /contacts/:id          - Update a contact
DELETE /contacts/:id          - Delete a contact
GET    /contacts/search?name= - Search by name
