## Frontend Setup

### Download the project zip file and unzip it or clone the repo

`git clone https://github.com/M-Umais-Hassan/news-aggregator.git`

### Run below command to start project

`sudo docker-compose up --build`

### Note: Backend was not required but there was cors error while using the newsapi directly in my react app which I thought can be fixed by using some proxy server, and just for that I have build my own server with just straight forward few routes that are using the newapi. I have deployed the backend on following [Link](https://news-aggregator-backend-ten.vercel.app/) but in case you need to look into backend or this deployed site has some issues as vercel often create some problems in their free tier, here are the details for backend. Just replace the URL in docker-compose.yaml.

## Backend Setup

### Download the project zip file and unzip it or clone the repo

`git clone https://github.com/M-Umais-Hassan/news-aggregator-backend.git`

### Run below command to start project

`sudo docker-compose up --build`

### Api key has 100 limit per day, so you can replace the api key in docker-compose.yaml file

### Developer Remarks

1. **Why did I use only one api instead of using three?** <br />
   The reason for using only one api was because I have tried using multiple apis but having cors error even using a proxy server and newapi which I am currently using is already using all these sources and this was not a backend specific task so I didn't paid to much attention to the backend side of things. But we can use multiple apis as well scenario will be same.
2. **Why did I create backend?** <br />
   Reason for creating backend was due to cors policy error so I have created a proxy server.
3. **How did I save the preferences of a user?** <br />
   Used redux persist to persist the feed preferences data which stores data in localstorage. The right way is to give user's ability to login and then will store the preferences in his own account, also we can do it using some ML algorithms based on his past searches and history of interests.
4. **Why pagination is not applied?** <br />
   Pagination was not applied and the reason was almost all the famous news websites I have gone through do not have pagination, we can implement pagination api was supporting this and it was not a big deal but I have found news websites mostly based on searches and headlines so pagination was kind of not necessary as per my assumptions.
