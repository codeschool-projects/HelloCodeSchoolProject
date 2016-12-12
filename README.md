# Hello Code School

This is a sample project to test out how projects work at Code School. For this project, you'll be creating a basic website using HTML. If you want to deploy it to a real website, we'll even walkthrough how to do that!

# Getting Started

To get started with this project, head over to the [Hello Code School](https://www.codeschool.com/projects/hello-code-school) project on Code School, and begin! It'll walk you through all of the steps below. They're included here in the readme in case you work better locally, or want to try working on this project offline.

# Prerequisites

In order to complete this project, you'll need to know the basics of HTML! Aside from that, you'll need a local computer where you can install git, and edit some files. We'll walk you through that part, so if you haven't used Git before -- don't worry. We recommend that you should have already completed Code Schools [Front-End Foundations](https://www.codeschool.com/courses/front-end-foundations) course, or have basic familiarity with HTML. When we say basic familiarity here's what we mean:

* Know what an HTML tag looks like
* Know some of the most common tags -- `title`, `h1`, `ul`, `li`.

If you know these, you should be all set to jump in and give this project a shot!

# Setup

In order to get this working, you'll need to have [Git](https://git-scm.com/) installed, and have a GitHub account. If this is your first time setting up Git, I'd recommend checking out Code School's video on How to Setup Git for Code School Projects in 5 Minutes to learn what you need to know.

To get started, fork this repository to your account and clone it down locally. If you want, you can also try doing this completely from GitHub!

# Build

Once you've forked this repository, go ahead and make the following changes to the `index.html` file.

## Add a Page Title

Create a `title` element with your Code School account name.

## Add a Header Element

Add an `h1` saying "Hello, Code School!".

## Create an Unordered List

Create a `ul` element with at least 2 `li` elements.

## What Do You Want to Learn?

In these `li` elements, list out what you want to learn.

# Checking Your Work

Once you've completed all of the tasks, go ahead and commit those to your fork of this repository and push it up to GitHub. Follow the directions on [Hello Code School](https://www.codeschool.com/projects/hello-code-school) to submit your project and get feedback from Code School.

## Running Tests Locally

You don't need to run and of the tests locally -- they'll all run when you submit your project. If you're an overachiever and want to try running the tests locally, here's what you'll need to do.

First off, install [node.js](https://nodejs.org/en/) locally. Next you'll need to run a few commands from this folder.

```
$ npm install
$ npm test
```

If everything is working, you should see something like this:

```
HelloCodeSchoolProject (answer) $ npm test

> hello-codeschool-project@1.0.0 test /Users/adam/code/projects/HelloCodeSchoolProject
> mocha test/



  Your HTML Page
    ✓ should have a different title
    ✓ should have a different h1
    ✓ should have a ul
    ✓ should have at least 2 li elements


  4 passing (306ms)
```

# Making it Public

Once all tests are passing, try pushing your master branch up to the `gh-pages` branch -- this will make your webpage available on the web! Here's a command to do that:

```
$ git push origin master:gh-pages
```

This will make your `index.html` file available at the URL:

`http://<username>.github.io/HelloCodeSchoolProject/`

# Another Answer

If you want to checkout one other possible solution to this problem and compare your work, you can checkout the `solution` branch.
