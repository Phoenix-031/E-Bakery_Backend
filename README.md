# RESTApi documentation



## Authentication endpoints
https://evening-refuge-31987.herokuapp.com/api/auth

1. https://evening-refuge-31987.herokuapp.com/api/auth/register   register an users in the website through the register page}
    ## POST REQUEST
    ### retuns a json with succes true is registers das well as the user information received as a response

2. https://evening-refuge-31987.herokuapp.com/api/auth/login
   ## login an user thourhg the login page
   ## POST REQUEST 
   ### returns a js object with a success key set to true and the user informantion received as well as an json web access token which is valid for 3 days if login is successful else returns js object with success key set to false



## User related route endpoints
https://evening-refuge-31987.herokuapp.com/api/users


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
    ## only admin and the user itself
    ## send id of the user to delete

4.  https://evening-refuge-31987.herokuapp.com/api/users/:id
    ## PUT REQUEST
    ## admin and the user itself and modify itself
    ## send id of the user to update

# Product relsted endpoints
https://evening-refuge-31987.herokuapp.com/api/products

1. https://evening-refuge-31987.herokuapp.com/api/products
  ## GET REQUEST
  ## get all products available in the store to display in the home page

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
    ## Delete a partcula product passs in the product id



# Cart related endpoints
https://evening-refuge-31987.herokuapp.com/api/carts

1. https://evening-refuge-31987.herokuapp.com/api/carts
    ## POST REQUEST
    ## any user has access
    ## used to a dd items to a cart

2. https://evening-refuge-31987.herokuapp.com/api/carts/:id
    ## DELETE REQUEST
    ## pass in the userid as a {param} in url

3. https://evening-refuge-31987.herokuapp.com/api/carts/:id
    ## PUT REQUEST
    ## update cart
    ## pass in the userid as {param}

4. https://evening-refuge-31987.herokuapp.com/api/carts/:id
    ## GET REQUEST
    ## get cart info logged in user has access
    ## pass in the iser id to get all card itema s then display them

5. https://evening-refuge-31987.herokuapp.com/api/carts
    ## GET REQUEST
    ## ONLY ADMIN 
    ## get all carts of all users



## Order related endpoints
https://evening-refuge-31987.herokuapp.com/api/orders

1. https://evening-refuge-31987.herokuapp.com/api/orders
    ## POST REQUEST
    ## create and order logged in user
    ## calculate the total cosr in the cart and send in hte userId 



## some more endpoints for admins will be provided later on

