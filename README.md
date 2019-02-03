# How to start
Install docker    
Install maven    
Install node & npm    

## To run the database:

GOTO the project location where you have docker-compose.yml file

Command to run:
```   
docker-compose up -d postgre
docker-compose logs -f   
```   

## To run the Spring Boot Application

GOTO the root directory-
```
cd moduleOne
mvn clean install   
```   

Just run the class ```ModuleOneApplication```

## To run the web

GOTO the root folder - 

```
cd magnetweb
npm install
npm start   
```
