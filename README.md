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
or alternatively if you did not install nodemon.
```
$ node app.js
```

## Usage
Utilizing [Postman](https://www.postman.com/) or any API platform, you will be able to send request to your API in this case we are using:
```
localhost:3000
```

To add patients with the API, we would include `/items` into POST request and inserting into its body
```
localhost:3000/items
```
```
{
    "name" : "Jane Specs",
    "address" : "1 Palace Street",
    "hospital" : "Royal Hospital",
    "service" : "01-20-2022",
    "amount" : 500
}
```


![image](https://user-images.githubusercontent.com/79166987/218017157-0584540a-9970-4a66-883c-8e450667565e.png)


After a successful input, we've added a patient into our variable.

![image](https://user-images.githubusercontent.com/79166987/218016671-9c6200f2-3244-4388-b9d6-c4e360976580.png)

Retreiving our data we would create a request with GET and use 
```
localhost:3000/items
```
![image](https://user-images.githubusercontent.com/79166987/218016843-2837dc90-07de-4af6-915f-a051925ca9ba.png)



## Built with
- JavaScript
- NodeJS
- Express
