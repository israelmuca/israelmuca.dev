---
type: GUIDE
title: 'JAMstack and CD pipelines: Create a blog with Nuxt, Netlify CMS and Netlify'
summary: >-
  Setting up your own personal blog is easier than ever with Nuxt.js. Take
  advantage of the JAMstack and leave the problems that server-side CMS have
  with Netlify CMS' solution while simplifying your development experience with
  Netlify's Continous Development.
description: >-
  Guide to understand how to setup a static website built with Vue.js, compiled
  with Nuxt.js, that includes Netlify CMS and is served through Netlify's
  server's using their Continuous Development pipeline.
keywords: >-
  vue.js jamstack netlify cms blog how-to tutorial guide nuxt.js netlifycms cd
  continuous development vue nuxt
date: '2019-02-27T16:15:19-06:00'
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
TBD
