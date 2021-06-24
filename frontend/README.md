# Team 5 - Integration 4

**Instructions in order to start the project**
Run yarn in both the front end folder and the strapi folder

    yarn

Then copy and paste the `.env.local.example` en rename the duplicated file to `.env.local`
After you've done that, go into the file and change the URL to your URL's

    NEXTAUTH_URL = Your website adress or just your localhost
    NEXT_PUBLIC_API_URL = Your Strapi URL
    NEXT_PUBLIC_WEBSITE_URL = Your website adress or just your localhost

The addresses in the `.example` file are the default values

> WARNING: Do not put a "/" behind the URL's

If this is all set and done, then you can navigate to front end and run

    yarn dev

And than navigate to strapi and run

    yarn develop

If you for some reason still have problems than you can delete the `.cache` folder in the `strapi` folder

**Strapi admin login**
bertmeeuws27@gmail.com
Test123456

**Members:**

1.  Maxim Quidousse
2.  Jens Legrou
3.  Bert Meeuws

**Stack**

- NextJS
- NextAuth voor authenticatie (Voor gebruik van sessions en roles)
- Easy Peasy Store for statemanagement (persistency localstorage)
- Strapi backend
- SQLite database (Oorspronkelijk gekozen voor Postgres maar SqlLite is een betere optie voor demo purposes)
