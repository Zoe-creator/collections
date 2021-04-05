

## Collections Forum

enables users to posts wishing collections and others may contact them if they have it,leave comments on items. 
[Collection Forum](https://collection-forum.netlify.app/)
<br>

## MVP

- enables loggin in users to post list, delete list that belongs to them
- showing all users'posts' of all lists
- user's save-for-later bag

<br>

### Goals

- _User CRUD_
- _Posts CRUD_

<br>


### Libraries and Dependencies

> Use this section to list all supporting libraries and dependencies, and their role in the project. Below is an example - this needs to be replaced!

|     Library      | Description                                |
| :--------------: | :----------------------------------------- |
|      React       | _Front-End._
|   React Router   | _keeps UI in sync with the URL._ |
| Ruby on Rails             | _database-backend._ |
|    Ruby      | _set up backend router,model,controller_ |
|  Express Router  | _create router handlers._ |
|    bcrypt     | _Library for hashing passwords_                      |

<br>

### Client (Front End)

#### Wireframes

> Use the Wireframes section to display desktop, tablet and mobile views. No hand-drawn wireframes. Use a tool like wireframe.cc, Whimsical or AdobeXD

[AdobeXD Design](https://xd.adobe.com/view/6d9020d7-7e69-478e-9b33-c940c7aa7161-38c3/)
![AdobeXD Design](https://res.cloudinary.com/lizhenwen727/image/upload/v1617066873/Screen_Shot_2021-03-29_at_9.10.01_PM_pvbofj.png)


#### Component Tree

![Component Tree ](https://res.cloudinary.com/lizhenwen727/image/upload/v1617068066/Screen_Shot_2021-03-29_at_9.33.43_PM_zai6w7.png)

#### Component Architecture

> Use this section to define your React components and the data architecture of your app. This should be a reflection of how you expect your directory/file tree to look like. 

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
#### Time Estimates

> Use this section to estimate the time necessary to build out each of the components you've described above.

| Task                | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------- | :------: | :------------: | :-----------: | :---------: |
| layout.jsx    |    L     |    1  hrs      |      hrs     |     hrs    |
|  landingPage.jsx   |    L     |     4 hrs      |      hrs     |     hrs    |
|  register.jsx   |    L     |    1  hrs      |      hrs     |     hrs    |
|  nav.jsx   |    L     |     1 hrs      |      hrs     |     hrs    |
|   item.jsx  |    L     |     1 hrs      |      hrs     |     hrs    |
|   home.jsx  |    L     |    4  hrs      |      hrs     |     hrs    |
|   itemEdit  |    L     |     2 hrs      |      hrs     |     hrs    |
|   myLists.jsx  |    L     |    4  hrs      |      hrs     |     hrs    |
|   wanted.jsx  |    L     |    5  hrs      |      hrs     |     hrs    |
|  itemDetail.jsx   |    L     |    4  hrs      |      hrs     |     hrs    |
|   footer.jsx  |    L     |    1  hrs      |      hrs     |     hrs    |
|   itemCreate.jsx  |    L     |    4  hrs      |      hrs     |     hrs    |
|  login.jsx   |    L     |    1  hrs      |      hrs     |     hrs    |
|   listing.jsx  |    L     |    3  hrs      |      hrs     |     hrs    |
|   basic css  |    L     |     3 hrs      |      hrs     |     hrs    |
|   media query css  |    L     |    3  hrs      |      hrs     |     hrs    |
|   backend  |    L     |     8 hrs      |      hrs     |     hrs    |
| TOTAL               |          |     50 hrs      |      hrs     |     TBD     |


<br>

### Server (Back End)

#### ERD Model

> Use this section to display an image of a computer generated ERD model. You can use draw.io, Lucidchart or another ERD tool.

![ERD Sample](https://res.cloudinary.com/lizhenwen727/image/upload/v1617659278/Screen_Shot_2021-04-05_at_5.46.25_PM_eyo7g3.png)
<br>

***

## Post-MVP

- allows users to write views for each list
- pop up screen for log-in
- several windows to create items
- showing all users'posts' of all lists

***

## Code Showcase

> Use this section to include a brief code snippet of functionality that you are proud of and a brief description.

## Code Issues & Resolutions

> Use this section to list of all major issues encountered and their resolution.
