# RESTApi documentation

# Base Url : https://kind-blue-penguin-boot.cyclic.app/

## Authentication endpoints
https://kind-blue-penguin-boot.cyclic.app/api/auth

1. https://kind-blue-penguin-boot.cyclic.app/auth/register   register a a clinet throught he register page}
    ## POST REQUEST
    ### retuns a json with succes true is registed as well as the user information received as a response

2. https://kind-blue-penguin-boot.cyclic.app/auth/login
   ## POST REQUEST 
   ### returns a js object with a success key set to true and the user informantion received as well as an json web access token which is valid for 3 days if login is successful else returns js object with success key set to false




## User related endpoints
https://kind-blue-penguin-boot.cyclic.app/users


1.  https://evening-refuge-31987.herokuapp.com/api/users/:id
   ## POST REQUEST
   ## send all users register with the store
   ## only admin has access to this route
   ## have to send the admin access token as a {header} while fetching

2.  https://evening-refuge-31987.herokuapp.com/api/users/find/:id
    ## GET REQUEST
    ## to find a customer with the customer id returns the customer info
    ## only admin has access to this route 
    ## send accesstoken as {header}  - {token = accestoken}

3.  https://evening-refuge-31987.herokuapp.com/api/users/:id
    ## DELETE REQUEST
    ## only admin has access to delete user
    ## send id of the user to delete

4.  https://evening-refuge-31987.herokuapp.com/api/users/:id
    ## PUT REQUEST
    ## admin and the user itself and modify itself
    ## send id of the user to update

5. https://evening-refuge-31987.herokuapp.com/api/users/changepass/pass
   ## PUT REQUEST
   ## routes accessible to the admin and the user itself
   ## route for changing the password

6. https://evening-refuge-31987.herokuapp.com/api/users/
   ## GET
   ## only accessible to the admin
   ## gets a list of all the users registered with the store




# Product related endpoints
https://evening-refuge-31987.herokuapp.com/api/products

1. https://evening-refuge-31987.herokuapp.com/api/products
  ## GET REQUEST
  ## get all products available in the store to display in the home page
  ## Accessible to anybody weather logged in or not 

2. https://evening-refuge-31987.herokuapp.com/api/products/:id
   ## GET REQUEST
   ## get a particulart product by passing in the product id
   ## used to display information of a product when client clicks 
   ## on a product in a new product page

3. https://evening-refuge-31987.herokuapp.com/api/products
    ## POST REQUEST
    ## only admin 
    ## add new items to the store

4. https://evening-refuge-31987.herokuapp.com/api/products/:id
    ## PUT REQUEST
    ## only admin
    ## Update info for a particular product

5. https://evening-refuge-31987.herokuapp.com/api/products/:id
    ## DELETE REQUEST
    ## only admin 
    ## Delete a partcular product by passing in the product id




# Cart related endpoints
https://evening-refuge-31987.herokuapp.com/api/carts

1. https://evening-refuge-31987.herokuapp.com/api/carts
    ## POST REQUEST
    ## only logged in user has acces to their cart
    ## used to a add items to a cart by the client

2. https://evening-refuge-31987.herokuapp.com/api/carts/:id
    ## DELETE REQUEST
    ## pass in the userid as a {param} in url
    ## to delete cart item by the client

3. https://evening-refuge-31987.herokuapp.com/api/carts/:id
    ## PUT REQUEST
    ## update cart
    ## pass in the userid as {param}
    ## change cart items by the client 

4. https://evening-refuge-31987.herokuapp.com/api/carts/:id
    ## GET REQUEST
    ## get cart info logged in user has access
    ## pass in the iser id to get all card itema s then display them

5. https://evening-refuge-31987.herokuapp.com/api/carts
    ## GET REQUEST
    ## ONLY ADMIN 
    ## get all carts of all users

6. https://evening-refuge-31987.herokuapp.com/api/carts/:id

    ## POST REQUEST
    ## only logged in user has access to this
    ## handles decrement against a cart item in the cart page


