# HTTP requests between microservices
Researching the performance of HTTP requests between microservices with keep-alive and without.

I've compare requests with:
- default configuration
- keep-alive connection
- [agentkeepalive](https://www.npmjs.com/package/agentkeepalive) agent

[Research results](https://medium.com/@onufrienkos/keep-alive-connection-on-inter-service-http-requests-3f2de73ffa1)