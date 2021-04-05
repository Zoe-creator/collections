

## Collections Forum

enables users to posts wishing collections and others may contact them if they have it,leave comments on items. 

- Living site: [Collection Forum](https://collection-forum.netlify.app/)
<br>

## MVP

- enables loggin in users to post list, delete list that belongs to them
- showing all users'posts' of all lists
- user's save-for-later bag

<br>


<br>


### Client (Front End)

#### Wireframes


[AdobeXD Design](https://xd.adobe.com/view/6d9020d7-7e69-478e-9b33-c940c7aa7161-38c3/)
![AdobeXD Design](https://res.cloudinary.com/lizhenwen727/image/upload/v1617066873/Screen_Shot_2021-03-29_at_9.10.01_PM_pvbofj.png)


#### Component Tree

![Component Tree ](https://res.cloudinary.com/lizhenwen727/image/upload/v1617068066/Screen_Shot_2021-03-29_at_9.33.43_PM_zai6w7.png)

#### Component Architecture


``` structure

src
|__ assets/
      |__ fonts
      |__ graphics
      |__ images
      |__ mockups
|__ components/
      |__ layout.jsx
      |__ footer.jsx
      |__ nav.jsx
      |__ item.jsx
|__ screens/
      |__ landingpage.jsx
      |__ home.jsx
      |__ itemEdit.jsx
      |__ itemCreate.jsx
      |__ register.jsx
      |__ logIn.jsx
      |__ Mylists.jsx
      |__ wanted.jsx
      |__ ItemDetail.jsx
|__ containers/
      |__ listings.jsx
|__ services/

```
#### Component Breakdown

| Component |    Type    | state | props | Description                      |
| :-------: | :--------: | :---: | :---: | :------------------------------- |
|    Nav    | functional |   y   |   n   | _Nav will link to other screens_ |
| Homepage  | functional |   y   |   n   | _Shows all posts_                    |
|   Post    | functional |   y   |   y   | _Create posts_                   |
|  Sign In  | functional |   y   |   y   | _Sign In_                        |
|  Sign Up  | functional |   y   |   y   | _Sign Up_                        |

<br>

### Server (Back End)

#### ERD Model

![ERD Sample](https://res.cloudinary.com/lizhenwen727/image/upload/v1617659278/Screen_Shot_2021-04-05_at_5.46.25_PM_eyo7g3.png)
<br>

***

## Post-MVP

- allows users to write views for each list
- pop up screen for log-in
- several windows to create items
- showing all users'posts' of all lists

***
