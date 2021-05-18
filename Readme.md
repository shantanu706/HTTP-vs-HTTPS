# ICS Mini Project - Demo Difference between HTTP & HTTPS



### Installation 

- Install the Certificate -- > rootCA.pem and localhost.crt

```sh
cd ICS-Mini-Project-master
npm install
node app.js
```
- Output    
    - Open for HTTP protocal : http://localhost:3000
    - Open for HTTPS protocal : https://localhost:8080 
- Open WireShark in LoopBack protocal


## Step 1 HTTP
- Open app.js and Do as below -
    - Comment https line
    - UnComment app.listen
```
//https.createServer(options,app).listen(8080); //HTTPs - secure

app.listen(3000)
```

- Open http://localhost:3000
- Enter UserName and Password
- Check WireShark Loopback
- In wireshark filter HTTP 
- You will see YOUR EMAIL AND PASSWORD
- Hence NOT SECURE 🥳

## Step 2 HTTPS
- Open app.js and Do as below -
    - UnComment https line
    - Comment app.listen
```
https.createServer(options,app).listen(8080); //HTTPs - secure

//app.listen(3000)
```

- Open https://localhost:8080
- Enter UserName and Password
- Check WireShark Loopback
- In wireshark filter HTTPS 
- You will not be able see YOUR EMAIL AND PASSWORD
- Hence SECURED 🥳
