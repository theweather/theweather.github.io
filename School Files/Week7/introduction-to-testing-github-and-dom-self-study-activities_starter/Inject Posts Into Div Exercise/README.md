## renderPostsinDiv
This contains two different demos
1) index0.html gets data from local file posts.js. To run this rename it to index.html (remember to save the original index.html first)
2) index.html gets data from Amazon Web Server using fetch

To access Amazon Web Server we need to run a local web server using http-server in the same directory as index.html.  The web-server usually runs on localhost:8080  so by going in the browser to http://localhost:8080  you will get index.html by default.  It then will go out to the Amazon Web server and get the file .../posts.json

You can run a local web server as follow:
In terminal window type: npx http-server

Ignore the file puppet.js for now