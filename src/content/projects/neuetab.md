---
title: "NeueTab: A Minimal Dashboard for Your New Tab Page"
template: project.jade
collection: projects
slug: chrome-neuetab
kicker: Chrome Extension
tags: [JavaScript]
image: /img/newtab.png
github: https://github.com/rtsao/chrome-neuetab
---

#### Summary

This extension replaces your new tab page with a Helvetica Neue-inspired dashboard that makes it effortless to keep up-to-date with your stocks and the weather. Built with Angular.js, Browserify, and Gulp.

#### Why?

##### The Chrome Default Stinks

The default new tab page displays a grid of most viewed sites and a Google search box, but this provides little utility for users who rely on the omnibox auto-suggest. The process of moving one's hand off the keyboard to click a thumbnail takes more effort than simply typing out a few characters. The new tab page is then squandered with essentially wasted space. I've never clicked on these:

![Default new tab page grid view](/img/newtabgrid.png)

##### A Better Alternative

I wanted to replace it with a unobtrusive, clean, iGoogle-esque dashboard that would let me stay up-to-date without being distracting. I'm always checking Google Finance and Googling the forecast for the day so I figured why not just put that information in the convenient new tab page.

#### Sidebar

Because the app's primary use-case is passive viewing, the interactive UI for configuration is kept in a pull-out sidebar.

![Sidebar](/img/sidebar.png)