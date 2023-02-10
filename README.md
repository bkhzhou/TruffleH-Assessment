# Truffle Health Software Engineering Internship Assessment
A simple medical bill upload using Node and Express

## Getting Started
### Installation

[Express package](https://www.npmjs.com/package/express)
```sh
$ npm install express --save
```
[nodemon](https://www.npmjs.com/package/nodemon) (Optional)
```sh
$ npm install nodemon --save
```
### Run
```
$ nodemon app.js
```
or alteratively if you did not install nodemon.
```
$ node app.js
```

## Usage
Utilizing [Postman](https://www.postman.com/) or any API platform, you will be able to send request to your API in this case we are using:
```
localhost:3000
```

To add patients with the API, we would include `/items/add` into POST request and inputting parameter queries in this case name, address, hospital, service, and amount.
```
localhost:3000/items/add
```
![image](https://user-images.githubusercontent.com/79166987/217970322-57a8df57-f87e-4653-8abb-0378773dd43f.png)

After a successful input, we've added a patient into our variable.

![image](https://user-images.githubusercontent.com/79166987/217970348-c34c9025-a340-4d40-8694-0116aba1081d.png)

Retreiving our data we would create a request with GET and use 
```
localhost:3000/items
```
![image](https://user-images.githubusercontent.com/79166987/217970424-a22ec3dd-c562-4dbd-a29d-92566fbd1db3.png)



## Built with
- JavaScript
- NodeJS
- Express
