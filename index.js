/*/
    * Backbone.Model *
    
        - Stores application data
        - Defines default attributes
        - Emits events when data attrites change

    * Backbone.Collection *

        - Manages a set of models
        - Provides basic search methods on models
        - Emits events when models are added, removed, sorted and/or changed.
    
    * Backbone.View *
    
        -  Connects a model to its visual representation in the the "DOM".

    I) Backbone Component

    /!\ => When you extend a Backbone component => get back a constructor function.
    
/*/

/*/
    Backbone.Model.extend() => return a contructor function.

        - url : a RESTful URL for our model to sync with

/*/

let apiUrl = "https://jsonplaceholder.typicode.com";

//Create our model 
//We store the returned constructor function in KermitModel variable
var UserModel = Backbone.Model.extend({
    defaults: {
        id: null,
        name: null,
        occupation: null
    }
});

//Create our collection
//It will construct the loaded data from /users into a set of UserModel instances
var UsersCollection = Backbone.Collection.extend({
    url: `${apiUrl}/users`,
    model: UserModel,
    /*/
    => needed if our root data structure is an Object (not an array like data.users).

    parse: function(data) {
        return data.users;
      }
    /*/
});

//We create a new instance of the collection thanks to the return constructor function
let users = new UsersCollection();

//fetch() => load data from its REST endpoint
//return a promise object
users.fetch().then(value => {
    //When the promise is fullfiled with the loaded data from /user
    //Then, users => a set of UserModel instances.
    console.log(users.length);
    console.log(users.get(1));

})

/*/

    * Event and 'this' binding *

    users.on('sync', () => {
        console.log(this);
    });

    //is equivalent of

    users.on('sync', function() {
        console.log(this);
    }, this);

    => Context passing ('this' refer to the execution context)

/*/

users.on('sync', function () {
    console.log(this);
});



