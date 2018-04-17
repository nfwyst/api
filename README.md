# api for front end dev

for faster get api data , do not have to wait for endpoint data


## local-server

### things need

1. node & express
2. mongodb and its mongoose[install mongodb if necessary](https://docs.mongodb.com/manual/installation/#tutorial-installation)

### start server

```shell
nodemon index
```

then start up postman to test the api

## json-server

### things need

1. json-server
2. faker.js

### start server

```shell
json-server api/data.js
or
json-server api/data.json
```

json-server 对于指定的 json 文件可以做数据持久化, 而js文件则不行, json-server 最大的缺点是没有安全性验证, 也没有对非 RESTFul 接口的内部支持, 如果需要做到就要自定义中间件或自行封装
