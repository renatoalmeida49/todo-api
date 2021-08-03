# todo-api  
  
This is a complement of a challenge from [Frontend Mentor challenge](https://www.frontendmentor.io/challenges/todo-app-Su1_KokOW/hub/todo-app-zbIroaSC9). Here you can store your todo notes in a very easy and intuitive way.  

You can check the Frontend of this project [here](https://github.com/renatoalmeida49/todo-app-challenge)  
  
Check the documentation in Postman [here](https://documenter.getpostman.com/view/16331785/TzshFjYK)

## :bangbang: The challenge

I've started to work with Frontend development and I really would like to make my first step to understand and be able to build something in the backend development.  
  
This challenge was the perfect oportunity for me.
  
### Link  
  
[Todo-app-api](https://rest-api-todo-main.herokuapp.com/)  

### Build with

* NodeJs
* Express
* Sequelize  

## :arrow_forward: How to run the project

1. Clone this repository in your machine
2. Create a new database in your SGDB
3. Make a copy of the file ```nodemon.base.json```
4. Rename it to ```nodemon.json```
5. Fill the environment variables to access the database you've just created
6. Execute ```npm install``` to install all dependecies 
7. In your terminal execute the comand ```npm start```

## :left_right_arrow: Routes

The API only have one endpoint. The difference in responses will depende of the method and the payload you send to it.

> [YOUR-HOST]/todos/



:large_blue_circle: GET

Here you have an example of response. The 0 in ```isActive``` stands for a completed task. 1 means it's a task still not finished.

```
[
  {
      "id": 54,
      "title": "This is a note used as a example",
      "isActive": 0,
      "createdAt": "2021-07-17T16:29:42.000Z",
      "updatedAt": "2021-07-17T16:54:24.000Z"
  },
  {
      "id": 55,
      "title": "This is a task I still have to do",
      "isActive": 1,
      "createdAt": "2021-07-17T16:29:42.000Z",
      "updatedAt": "2021-07-17T16:54:24.000Z"
  },

  ... 

]
```

:large_blue_circle: POST

You just have to send a title to the API. The other fields will be filled by the backend.

```
{
    "title": "The title it's the only thing you have to pass to the API",
}
```

:large_blue_circle: PATCH

For update the note, the only thing it will change will be the ```isActive``` field. It will toggle between 1 and 0. For that you just need to send the ```id``` of the note you want to change.

```
{
    "id": 54,
}
```

:large_blue_circle: DELETE

The ```id``` it's the only thing necessary to delete the note. 

```
{
    "id": 54,
}
```

## :satellite: TODO  
  
:white_medium_square: A better error handling on server side  
:white_check_mark: Documentation of the API    
  
## :smile: Author  
  
* Renato Novaes  
* [Website](https://www.renatonovaes.dev)
* [Linkedin](https://www.linkedin/in/renatonovaes49)
* [Instagram](https://www.instagram/novaes_r)

## :clap: Acknowledgments  
  
* **Rafael Rodrigues** - My boss, coworker and friend. The one who told me to learn Node and offered all the help along the way.   
 
* **Gabriel Luz** - My coworker and friend. He gave me very detailed explanations about how to build and set everything up. Besides helped me with some errors and bugs during the development.
