# Skillz

## Overview

Skillz is a demo of an e-Learning platform that allows for the orginazation of online course in anything from cooking, dancing, home-improvement or courses on new technologies. This is a full stack app that utilizes Ruby on Rails and PostgreSQL for the backend and React for the front. I also used this as an opportunity to learn to work with Material UI framework. I used esemeniuc's sign-in template within the Material UI documentation as a guide to get started.

<br>

## MVP

The Skillz Minimum Viable Product will be a Full Crud App that allows users to not only view availabe courses but also create, edit and destroy courses with proper authorization. This app has multiple table associations between participants/instructors/ and courses allowing for different user experiences.

<br>

### Goals

- Gain a better understanding and confidence with Ruby on Rails/SQl backend
- Fully Responsive Design
- Easy to Navigate UX
- Very Organized front end architecture

<br>

### Libraries and Dependencies

\_Because of the tight deadline on this I'm not 100% sure all the dependencies I'll be using for the Post MVP or styling extra credits but below is a list of the for sure ones.

|   Library    | Description                               |
| :----------: | :---------------------------------------- |
|    React     |
| React Router | allows use of react hooks                 |
|    Axios     | used for Api calls to backend             |
|  Bootstrap   | Most likely use for styled components     |
| Material UI  | May use for their grid for a PMVP feature |

<br>

### Client (Front End)

#### Wireframes

[Landing](https://wireframe.cc/8gvMuL)

- Desktop Landing

[Sign-Up](https://wireframe.cc/wnpBB8)

- Sign-Up

[Sign-In](https://wireframe.cc/fuOtQf)

- Sign-In

[Show Page](https://wireframe.cc/5FhULf)

- Show Page

[Edit/Delete](https://wireframe.cc/1akAod)

- Edit/Delete Page

[Create Page](https://wireframe.cc/zk3hQR)

- Create/Page

#### Component Tree

[Component Tree](https://whimsical.com/skills-component-hierarchy-6eUJ3M6ssqjv2wGeooVrAg)

#### Component Hierarchy

```
src
|__components/
    |__Nav
    |__Footer
    |__Layout
    |_Course
    |__CourseCard
|__containers/
    |__maincontainer
|__screens/
    |__Landing
    |__Courses
    |__Signup
    |__Signin
    |__CourseDetail
    |__CourseEdit/Delete
|__services
    |__api-config
    |__auth
    |__courses
    |__teachers
    |__students
|__App.js
|__index.js

```

### Time Estimates

| Task                | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------- | :------: | :------------: | :-----------: | :---------: |
| Create Database     |    H     |     1 hrs      |      hrs      |     TBD     |
| Set up backend Crud |    H     |     2 hrs      |      hrs      |     TBD     |
| Setup client(FE)    |    H     |     2 hrs      |      hrs      |     TBD     |
| Screens Setup       |    H     |     3 hrs      |      hrs      |     TBD     |
| Full Crud           |    H     |     6 hrs      |      hrs      |     TBD     |
| Basic CSS           |    H     |     3 hrs      |      hrs      |     TBD     |
| Advanced CSS        |    M     |     6 hrs      |      hrs      |     TBD     |
| Set up Auth         |    L     |     3 hrs      |      hrs      |     TBD     |
| Search and Cats     |    L     |     4 hrs      |      hrs      |     TBD     |
| Data Grid PMVP      |    L     |     3 hrs      |      hrs      |     TBD     |
| Custom Auth screens |    L     |     3 hrs      |      hrs      |     TBD     |
| TOTAL               |          |     36 hrs     |      hrs      |     TBD     |

### Server

[Server ERD](https://app.diagrams.net/#G1sre_vJmnTvYK5rDYnHogy86Y8x4UpN18)

<br>

## Post MVP

Going to add a contact form and do either a table for inventory with Material UIs Table or make a with Courses to Students or something to that effect. I just want to be able to play with some type of data visualization. Last step would be to add a shopping cart.

## Code Showcase

## Code Issues & Resolutions

Getting the edit to work with the option select using a required value from a seperate table was the biggest challenge I ran into.
