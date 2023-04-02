# Character Creator
## Concept

This is an in-class build where we are creating a quick server that covers the CRUD funcitonality. 

# Server Requirements

## JSON Model
```json
{
    "id": 0,
    "name": "String",
    "classType": "String",
    "age": 00,
    "race": "String",
    "npc": false,
    "level": 00
}
```
## Dependencies
- `express`
- `dotenv`

## Endpoints
- base: `localhost:[PORT#]`
- character controller: `/characters`
- route endpoints determined by method and outcome.

## Routes
- GET One by ID
- GET All
- GET All by class
- POST One
- PUT One by ID
- DELETE by ID

---

## Task List

| Status | Task | Process |
| --- | --- | --- |
| | Initialize Project | `npm init -y` |
| | Install Dependencies |  `npm i express` `npm i dotenv`|
| | Install Dev Dependencies | `npm install --save-dev nodemon` |
| | Establish Entry Point | `app.js` or `index.js`|
| | Create Environmental File | Create a file called .env |
| | Create Sample Environmental File | Add our PORT # to it to hide it |
| | Create gitignore file | Create the .gitignore file |
| | Set gitignore | node_modules |
| | Connect to PORT / Test | setup app.js file |
| | Create Helpers Folder | |
| | Create db.json file | in "Helpers Folder" |
| | Est. first Entry | The middle URL that takes us to the controller |
| | Create Controller Folder |  |
| | Create controller file | Create a character.controller.js file |
| | Connect Controller |properly require in router and exports file |
| | Establish Routes | Scope out/make todos for routes |
| | Build GET All | routes.controller.js in ToDoList |
| | Test Route | POSTMAN |
| | Build GET One |  |
| | Test Route |  |
| | Build GET All by Class | |
| | Consider conditions |  |
| | Test Route |  |
| | Build POST One |  |
| | Test Route |  |
| | Build PUT One by ID |  |
| | Test Route |  |
| | Build DELETE One by ID | |
| | Test Route |  |

## Stretch Goals
| Stretch Goals | Status |
| --- | --- |
| `POST` - What if a character ID already exists? | Solution Provide |
| `PUT` - What if one key is changed in a character? | Solution Provided |

### POST
- Consider how and when do we obtain our DB ids.
- How can we hold on to the current values?
  - Consider reviewing `Math` methods and `spread`.
  - `IF` the established generated ID already exists (`includes`), consider the greatest value and reset the ID based off that.

### PUT
- What key is being passed?
  - Review current values within the DB.
  - Consider how you can cycle through each key and respond depending on what's being passed.
    - If key matches - replace value / if not - keep value.
- What if the there isn't a character to change?
  - How do we handle the `404`

---