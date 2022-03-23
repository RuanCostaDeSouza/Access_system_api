# Access system 


A login and registration system with token generation and authentication.

The system was developed for study and with a direct focus on the back-end of the application.

Using the REST concepts this project was developed with the intention of being a simple and safe system, which allowed the user to write, read, and change some information,
such as the password, which is almost a CRUD or just a CRU!!

## 🚀 Started

### 📋 Requirements

You must have Node, and a MySQL database installed on the machine to run this application.

Insert the following variables into an .env file with the corresponding values:

```
USER_NAME: //database login
HOST: //used host, the most common in a local bank is to be root
PASSWORD: //database password
DATABASE: //database used to record information
```

### 🔧 Install
install all dependencies using:

```
npm install
```

```
yarn add
```

With the dependencies installed, just run the command below depending on the package manager of your choice

```
npm run dev
```

```
yarn dev
```

API will be running on port 3030 of your localhost

## 📦 Desenvolvimento

The developed system can be applied as a method to manage user accesses to certain parts of the application in a secure way, such as a private page that needs an altentication in order to have access to its information

## 🛠️ Built with

* Node
* Express
* Sequelize ORM
* MySQL
* Json web token


---
⌨️ Built by Ruan Costa de Souza😊
