# Team 5 - Integration 4
**Instructions in order to start the project**
Run yarn in both the front end folder and the strapi folder

    yarn
    
If you for some reason are not running Strapi on the default port. Than you can change that in the 

    frontend → constants → index.js

    export  const  API_URL  =  "http://localhost:1337";
Don't forget to also put the address you're running NextJS on in the `WEBSITE_URL` variable. The default port for NextJS is `port 3000`.

    export  const  WEBSITE_URL  =  "http://localhost:3000";

> WARNING: Do not put a "/" behind the URI's

And for last, go into `frontend → .env` and change the `NextAuth callback URL` to your website's URL. If you are running on localhost this might be `http://localhost:3000` but if you are deploying to google.com for example it would be `https://google.com`

    NEXTAUTH_URL=http://localhost:3000

If this is all set and done, then you can navigate to front end and run

    yarn dev
    
And than navigate to strapi and run

    yarn develop
If you for some reason still have problems than you can delete the `.cache` folder in the `strapi` folder



**Strapi admin login**
bertmeeuws27@gmail.com
Test123456

**Members:**

 1. Maxim Quidousse 
 2. Jens Legrou 
 3. Bert Meeuws
 
**Stack**
- NextJS
- NextAuth voor authenticatie (Voor gebruik van sessions en roles)
- Easy Peasy Store for statemanagement (persistency localstorage)
- Strapi backend
- SQLite database (Oorspronkelijk gekozen voor Postgres maar SqlLite is een betere optie voor demo purposes)






