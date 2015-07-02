# What URL should be used to access your application?	
	- https://github.com/rohitks2/frontend-test(this is git url for accessing the source code)
	-Url for access the app is http://localhost:8888/#/login(after installing node js)
	-And after creating eclipse dynamic project, the url will be "http://localhost:8080/fedStateApp/login" by making use of tomcat server.

# What libraries did you use to write your application?
	- AngularJS (including routing and animation)
	- Bootstrap
	- Google font api
	- ngStorage (access to the local storage and session storage)
	- ng-grid (grid)
	-jquery

# What influenced the design of your user interface?
	- The Requirement provided, is the first step to think of app development.
	- Bootstrap
	- Experience from older projects.

# What steps did you take to make your application user friendly?
	- Modularity- Dividing enerything into single components and then aggregating them to achieve the goal. 
	- Good responsive design.
	- Descent color selection.
	- Consitent navigation bar.


# What steps did you take to insure your application was secure?
	- Restrict access to all features which requires user authentication.
	- Create middle MVC layer of Java/.Net. And Secure the data access by making use of Webservices and secure DB connections.


# What could be done to the front end or back end to make it more secure?
	- Since cookie based authentication mechanism is used it would be wise to 
	  implement an anti-forgery token mechanism for XSRF protection. The server 
	  should set a token in a JavaScript readable session cookie called 
	  XSRF-TOKEN on the first HTTP GET request.
	- The XSS issue need to be handled from both front end as well as backend side.
	- The ethical hack cache issue need to be handled by adding expiry on the headers of the response.
	- Vera code had be run to identify memory leaks, SQL injection type of scenarios.
	- On the front-end the user session should expire automatically after 
	  a preconfigured period, if the user is inactive.
	- Instead of storing cookie from front-end, it is better to store a server side cookie.
