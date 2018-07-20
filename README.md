# Jasstafel - Offline Web Application

A web application built with React, Redux, [react-konva](https://github.com/konvajs/react-konva) and other JS libraries. The app displays a chalk board commonly used in Switzerland to note the score for several card games.

The app makes use of the HTML5 application cache to make the it available when offline.

## I just want to use the apple

* Go to https://jasstafel.michaelruoss.ch/, preferrably on a tablet
* [Add the app to the home screen of your device](https://www.howtogeek.com/196087/how-to-add-websites-to-the-home-screen-on-any-smartphone-or-tablet/)
* You can now go offline and start the app from your home screen

## I want to build or run it

Use [yarn](https://yarnpkg.com/lang/en/) or [npm](https://www.npmjs.com/) to build and run the app.

### Run the development server:

	yarn start

### Build the app

This builds the html and JS bundle and saves them in the `dist` folder.

	yarn build

### Create a docker image with the app and run it

	docker build -t jt_build -f "./build/Dockerfile.build" .
	docker build -t jt_app -f "./build/Dockerfile" .

	docker run --name jt_app --rm -d -p 8080:80 jt_app

Visit the app via http://localhost:8080/
