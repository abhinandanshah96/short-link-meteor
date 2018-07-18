## Welcome to Short Link

**Short Link** is a full stack, reactive and real time web application that stores, display and shorten user given links with authentication. Made with [MeteorJs](www.meteor.com) and [ReactJs](https://reactjs.org). It's a show of concept application to show various components and benefits of the kickass duo.

## What is MeteorJs and why use it? 

The key to Meteor is hinted at right in its name:  **speed**. If you’re looking to rapidly develop smaller,  **reactive applications**  on  [the Node.js platform](https://nodejs.org), Meteor is definitely an excellent choice.

## Pros

 * **Its's full stack**: Meteor has a **fully integrated and modular stack** with tons of integration, support, and features right out of the box. You’re not locked in if you prefer swapping one technology for another. For example, Meteor’s default front-end framework *Blaze* can be swapped for *React or AngularJS*.
 * **It's fast**: Meteor, launching a MVP in 3-4 weeks can be a reality. With JavaScript on the front-end and back-end, plus smart packages, Meteor allows you to **develop faster**. This makes it a go-to for startups and others trying to get a product out the door quickly.
 * **It's reactive**: Meteor creates highly **reactive UIs** — the kind that update information within the UI without having to hit refresh. This is the kind of UI users have come to expect. Meteor is reactive on the programming side, too, so one can get more done with less lines of code.
 * **It's crossplatform** : Its built-in integration with **Apache Cordova** offers immense business value. You can easily build your app to be cross-platform for Android, iOS, or the web with only one codebase.

## ReactJs

React is a powerful isomorphic JavaScript library that uses server-side rendering (SSR) to provide a flexible, performance-oriented, componentized solution for the “V” in MVC, developed by Facebook. It provides instant page loads and the ability to handle long lists of dynamic content changing within the view.

## Short - Link

Short - Link allows users to store links and provide them with a shortned link for ease of use. Users can also hide the links to a separate list.
> Video desmostration coming soon

## Demo

Try it yourself at heroku : [short-link-abhi.herokuapp.com](https://short-link-abhi.herokuapp.com/)

## Description

Technologies used: Meteor.js React.js and Scss
Modules used: clipboard, moment, shortid, simpl-schema, ^more in package.json^
To run:
(Make sure you have [installed meteor](https://www.meteor.com/install))

    git clone https://github.com/abhinandanshah96/short-link-meteor.git
    cd short-link-meteor/
    meteor npm install
    meteor

## To Dos:
- Video demo
- Currently it's using MLab's external db which adds a lot of latency. Do something about it.
- Testing using Mocha.
- May be add a delete button
- Better 404 page.
- Email validation system & may be a mailer
- Complete Documentation
