# babel-experiment

[Babel 6.0.0 released](https://babeljs.io/blog/2015/10/29/6.0.0/) on Oct 29, 2015.  
Babel 6 re-designed to create the next generation of JavaScript development platform.  
I think that change is good, but i want to use Babel like it was in 5.x for some time now.  
So, I tried Babel 6, like 5.x has been used in various ways.  

## Environment

+ Node v5.0.0
+ npm 3.3.6

## How to try
### Install

    git clone https://github.com/AKIRA-MIYAKE/babel-experiment.git
    npm install

### Transform
#### babel-cli

    npm run-script cli

#### browserify

    npm run-script browserify

#### gulp

    npm run-script gulp-transform

#### All

    npm run-script transform

### Test
#### mocha

    npm run-script mocha

#### gulp

    npm run-script gulp-test

#### Print console.log of transformed files

    npm run-script print
