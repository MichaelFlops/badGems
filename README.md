# badGems (like the movie bad boys)
Status:(work in progress)
The Broken Rubys, a Github issue viewer using React.js

- [Learn more about React here](http://facebook.github.io/react)

A work in progress, but checkout the cute css-drawn rubys in the mean time:
- [See what it looks like on CodePen](https://codepen.io/michaelflops/full/grBAAZ/) *note this isn't being updated, I started in codepen and switched when I started building routes using react-router. now working from this github repo... but play around

## Setup on your local machine

```
git clone https://github.com/MichaelFlops/badGems/
npm install -g
npm start
```

## Known Issues

-on component IssueItem: some github posts don't have a body text, which pushes up the user's gravatar into the box.
I need to make the user's info placement not rely on the height of 'middle'

### Not yet implemented Features

- The component IssueDetail needs to be properly built and routed dynamically for each individual issue
- automatic linking to commits, comments, labels, user profiles
- Pagination from 1-25 


