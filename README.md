## DEPLOYED HEROKU LINK
https://build-week-afrimark.herokuapp.com/

## REGISTER/LOGIN End Points
| Method  | Endpoint | Body (required) | Notes | Response  |
| ------------- | ------------- | -------------  | -------------  | -------------  |
| [POST] register  | /api/auth/register | username & password  | Creates a new user object in the database. |  id: 3 username:lupita password:(hashed) |
| [POST] register  | /api/auth/login  | username & password  | Returns a welcome message and the JSON Web Token. |  "message": "welcome, lupita", "token": "TokEnEXamPle1234" |

## USER End Points
| Method  | Endpoint | Body (required)| Response  |
| ------------- | ------------- | -------------  | -------------  | 
| [GET] all users  | /api/users | Authorized Header (not restricted as of now) | Results in array of users. | 
| [GET] user by id  | /api/users/:id | Authorized Header (not restricted as of now) | returns user object  | 

## ITEMS End Points (work in progress)
| Method  | Endpoint | Body (required)| Response  |
| ------------- | ------------- | -------------  | -------------  | 
| [GET] all items  | /api/items | Authorized Header (not restricted as of now) | Results in array of items. | 
| [GET] item by id  | /api/items/:id | Authorized Header (not restricted as of now) | Results in an item object. | 
| [POST] add new item  | /api/items/add-item | Authorized Header (not restricted as of now) | new item object  | 
| [PUT] update an item  | /api/items/:id | Authorized Header (not restricted as of now) | updates item, returns id of updated item | 
| [DELETE] by id  | /api/items/:id | Authorized Header (not restricted as of now) | message: 'Item with ${id} successfully deleted.' | 


