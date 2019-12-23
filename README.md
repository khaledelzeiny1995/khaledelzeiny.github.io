# khaled-website

### To build the dev docker container execute the following:.
```
docker build -t vuejs-khaled-site/dockerize-vuejs-app .

```

### Locate your image id using the following:. 
```
 docker images
```
### eg
```
REPOSITORY                                TAG                 IMAGE ID            CREATED              SIZE
vuejs-khaled-site/dockerize-vuejs-app     latest              faf3b69a50d5        About a minute ago   547MB
```
### to spin the app after dockerize 

```
docker run -it -p 8080:8080 --rm --name dockerize-vuejs-app-1 vuejs-Khaled-site/dockerize-vuejs-app
```