# My personal webpage with blog | [![Netlify Status](https://api.netlify.com/api/v1/badges/08d286ac-4549-4511-8d6d-2dc59e21b79a/deploy-status)](https://app.netlify.com/sites/israelmuca/deploys)  
> A Nuxt.js static website with a blog

## Features
- [Nuxt.js](https://nuxtjs.org/) Static Site Generation for easy hosting.
- Netlify CMS on `/admin` to modify the posts.
- Nuxtdown to compile the blogpost pages from each `Markdown` files in `/content/blog/`.
- Netlify compilation on each commit, with automatic deployment to their CDN (once you finish all the steps).

# Getting started

## What's needed
- Github account
- Netlify account
- Vue/Nuxt understanding

## Fork the repo
Using your Github account, go ahead and [click here](https://github.com/israelmuca/israelmuca.dev/fork) to fork the repo or just [clone it](https://github.com/israelmuca/israelmuca.dev).

## Build Setup
Install all the dependencies
``` bash
npm i
```

Now, you can run the code in development with:
``` bash
npm run dev
```
This will serve your page in `localhost:3000` with hot reload.

Once you're ready to generate your static assets for production:
``` bash
npm run generate
```
This will create a `/dist` folder with the assets. This folder is not commited.  
This is what Netlify will be building on their server, and then uploading the results to their CDN.

## Configure your repo  

### Netlify CMS
- Define your fields and files for your content.
- Go to `static/admin/config.yml`.
- Check the [Netlify CMS Documentation](https://www.netlifycms.org/docs/configuration-options/).
- Also, while your local server is runing, you can access [localhost:3000/admin/](localhost:3000/admin/) to modify the content of your blog. You can also do it once it's deployed.

### Routes
- Nuxt will build every page inside of the `/pages` directory, but the `_blogpost.vue` is a special file, thats handled by *Nuxtdown*.
- **In this case**:
  - **index.vue**: It's the `/` route, will be compiled once.
  - **_blogpost.vue**: For each blog post, gets compiled once for each `.md` in the `content/blog/` folder.
- Configure Nuxtdown in: `nuxtdown.config.js`.
- Check the [Nuxtdown Documentation](https://github.com/joostdecock/nuxtdown-module/blob/master/README.md).

### The rest of the site
- It's a regular Vue/Nuxt app.
- The code is commented to try to assist anyone in modifying the views.
- Configure Nuxt in: `nuxt.config.js`.
- Check the [Vue.js](https://vuejs.org/v2/guide/) and [Nuxt.js](https://nuxtjs.org/guide/) documentation.

## I'm ready, now what?
If you run `npm run dev` and you like what you see, you're ready to deploy to Netlify!

### Go to Netlify
- Go to [Netlify](https://app.netlify.com/start)
- Choose Github and authorize Netlify, if you haven't already
- Choose this repo
- Leave the settings as they are and click on **Deploy Site**

## You're done!
Now, with every commit you do, Netlify will compile your site with `npm run generate` and deploy it on their CDN.

## Issues
If you have any problems implementing this, please don't hesitate and create a Github Issue or send me a [tweet](https://twitter.com/IsraelMuCa).

## Built with
- [Andrea Gomez' design](https://twitter.com/acgomezu)
- [Vue.js](https://vuejs.org/)
- [Nuxt.js](https://nuxtjs.org/)
- [Netlify CMS](https://www.netlifycms.org/)
- [Nuxtdown](https://www.npmjs.com/package/nuxtdown)
- [Bulma](https://www.bulma.io)
- [Prism](https://prismjs.com/)
- [renestalder's template](https://github.com/renestalder/nuxt-netlify-cms-starter-template)
- ❤️

## Hosted in
- [Netlify](https://www.netlify.com/)
