---
type: GUIDE
title: 'JAMstack and CD pipelines: Create a blog with Nuxt, Netlify CMS and Netlify'
summary: >-
  Setting up your own personal blog is easier than ever with Nuxt.js. Take
  advantage of the JAMstack and leave the problems that server-side CMS have
  with Netlify CMS' solution while simplifying your development experience with
  Netlify's Continous Deployment.
description: >-
  Guide to understand how to setup a static website built with Vue.js, compiled
  with Nuxt.js, that includes Netlify CMS and is served through Netlify's
  server's using their Continuous Deployment pipeline.
keywords: >-
  vue.js jamstack netlify cms blog how-to tutorial guide nuxt.js netlifycms cd
  continuous deployment vue nuxt
date: '2019-03-01T21:15:00-06:00'
thumbnail: /images/uploads/john-barkiple-539580-unsplash-micro.jpeg
---
## The "old" ways
Say you wanted to create a blog, you'd could easily run a Wordpress site, with a linux server distributing your content. On each page load, the server would generate the webpages, and serve them to the user.
Every request puts the server to work.
It's a perfectly viable option, although slower compared to more modern options, more insecure as you have to be doing the updates on your server (or paying more for a managed server), and it requires using PHP and having a database running.

## JAMstack to the rescue!
So what is JAMstack? It stands for **J**avaScript, **A**PIs and **M**arkup. A modern way of writing webpages that are compiled to static assets right before deploying. JavaScript handles the dynamics in your page, what were server-side processes, are now abstracted into APIs if needed, and your markup is compiled during deploys. Go ahead and read all about it on the [official webpage](https://jamstack.org/).

The benefits that this approach has is that your webpage ends up being blazing fast and with all of your content precompiled, nothing has to be fetched every time the page is served and, you can host it in many many more places (and it's way cheaper (or even free, with [Netlify](https://netlify.com)), as it is only HTML and JS files all while getting improved SEO with your page.
Your page is also more secure! Since you don't have exposed APIs, you could even use Wordpress as a CMS but without the security risks or performance problems of running Wordpress itself.
The performance is definitely worth mentioning again, as it is quite easy to make your site super fast.

There is one caveat though. Every time you change anything, you have to rebuild your assets, and deploy them... ugh... **but wait!**, as that's were a CD pipeline comes into play!

## CD pipelines...?
You've probably heard the terms CI/CD being thrown around, with CD sometimes referring to Continuous Delivery or Continuous Deployment. Arguments get quite long when debating about the PRECISE meaning of these words, as you can see in [this Stack Overflow](https://stackoverflow.com/questions/28608015/continuous-integration-vs-continuous-delivery-vs-continuous-deployment) question.

In my case, I'm talking about Continuous Deployment, as explained by Netlify [here](https://www.netlify.com/docs/continuous-deployment/).
> _Continuous deployment works by connecting a Git repository to a Netlify site and keeping the two in sync._

Easy peasy. We want our repo to be in sync with our site.

### But how?
Netlify is an amazing [PaaS](https://en.wikipedia.org/wiki/Platform_as_a_service/) that has SO MANY FEATURES, really, just to mention a few:
- Automated builds and deployments via webhooks straight from your Git repository.
- Rollbacks, as previous deployments are not erased.
- Continuous Integration tests.
- Deployment previews from Pull Requests.
- Free SSL certificates.
- A CDN.
- AND S O, M U C H, M O R E.

Check out their [features](https://netlify.com/features/) or dive straight into the [documentation](https://www.netlify.com/docs/) pleeeeeaaaase. As everything I mentioned is included in their VERY generous free tier.
So for our use case, we'll can be using their automated build and deployment (as I am).


## Nuxt.js + Netlify, a match made in heaven
In my case, I've been working with [Vue.js](https://vuejs.org) and I wanted to build my blog with Vue, so for that, I used [Nuxt.js](https://nuxtjs.org) which is a framework built on top of Vue that offers both Server Side Rendering (you need a Nuxt instance running, thus a server as well, a no-go for our project) and also offers Static Site Generator, which **compiles** all of your fancy Vue code into plain HTML and JS. That's exactly what we need for Netlify! _OH YEAH!_ . 

Every time you push your code to the repo, Netlify pulls the latest version, and in my case, runs ```nuxt generate``` and then uploads the ```/dist``` folder into their CDN. And that's it! Your latest version is live in a minute or two. No need to upload anything manually or check what version is uploaded... Everything is *automated* now... Continuous Deployment FTW!

## Netlify CMS
Last but not least. How can you manage your content like this?
Remember that the [JAMstack best practices](https://jamstack.org/best-practices/) mention that ideally everything lives on your git, so anyone can, with a couple of clicks, get going and contribute to your project.

That's where [Netlify's CMS](https://www.netlifycms.org/) comes in. It's an Open Source Software, that helps you use your Github as a 'database' in a sense. Allowing you to create blog posts directly into ```.md``` files, which you can push into the repo to trigger the builds, creating new blog posts just like that.
They have an easy to use interface, and even have an editorial workflow, that set articles to be deployed as Pull Requests on your Github, allowing you or your team to review them (using Netlify) before merging them.

All in all, these are amazing tools that let us create blazing fast sites, in a modern environment and require very little configuration for such an amazing final product.


## Getting started
For this, we'll only be needing:
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
This will create a `/dist` folder with the assets. This folder is not committed.  
This is what Netlify will be building on their server, and then uploading the results to their CDN. *We don't need to do this manually ever.* We just do it for the sake of watching what happens inside Netlify.  

## Configure your *new* repo  

### Netlify CMS
You'll need to define your fields and files for your content. I'm using defaults very similar to what you can see in [dev.to](https://dev.to). Mostly covering the title, description and keywords for SEO purposes, also a little summary of the post as well as a main image which is used both in the ArticleCard.vue and the Header.vue in the blog post page.  

You can configure these fields in: `static/admin/config.yml`, and feel free to check the [Netlify CMS Documentation](https://www.netlifycms.org/docs/configuration-options/) for extra customization.  

While your local server is running, you can access [localhost:3000/admin/](localhost:3000/admin/) to modify the content of your blog. You can also do it once it's deployed when you have the Netlify's address that's given to you.

### Routes
In here, both Nuxt and Nuxtdown work together to create the routes in the website.  
  
In the `pages` directory, you'll find an `index.vue` which is, as the name implies, the index of our site.  
**This is handled by Nuxt**.  

The `pages/blog/` directory will work as a directory in our site as well (israelmuca.dev/blog/... in my case), which will hold all the blog posts that are created using the `_blogpost.vue` template inside. It will be compiled once for each `.md` in the `content/blog/` directory. You can see how the content is fetched inside of that `.vue` file.  
**This is handled by Nuxtdown**.

You can configure Nuxtdown in: `nuxtdown.config.js`, and please go ahead and check the [Nuxtdown Documentation](https://github.com/joostdecock/nuxtdown-module/blob/master/README.md) to further understand what is happening or to change the functionality.

### The rest of the site
The rest of the site is a regular Vue + Nuxt app, I tried to comment the code where I think it's needed the most, and you can configure Nuxt in: `nuxt.config.js`, also, as usual, please check the [Vue.js](https://vuejs.org/v2/guide/) and [Nuxt.js](https://nuxtjs.org/guide/) documentation to further understand this code if you have any questions.


## Congratulations
By this point, you should have a fully functional Nuxt generated, Netlify hosted, blog site.

## Issues
If you have any problems implementing this, please don't hesitate and create a Github Issue or send me a [tweet](https://twitter.com/IsraelMuCa).

## Thanks
There's a phrase that I love and always try and remember:
> _If I have seen further it is by standing in the shoulders of Giants_  
> Isaac Newton

Being true to that phrase, I have to acknowledge the many people that in one way or another contributed to this specific repo:
- [Andrea Gomez - with her design](https://twitter.com/acgomezu)
- [Vue.js](https://vuejs.org/)
- [Nuxt.js](https://nuxtjs.org/)
- [Netlify CMS](https://www.netlifycms.org/)
- [Nuxtdown](https://www.npmjs.com/package/nuxtdown)
- [Bulma](https://www.bulma.io)
- [Prism](https://prismjs.com/)
- [renestalder's template](https://github.com/renestalder/nuxt-netlify-cms-starter-template)
- [Netlify](https://www.netlify.com/)

Thanks again, and read ya'll soon!
