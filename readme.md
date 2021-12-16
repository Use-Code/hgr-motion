# Hager - Animations #

Animations are displayed with [Lottie](http://airbnb.io/lottie/#/web). The file `client/js/index.js` contains an simple example of implementation. 

``` javascript
const animation = Lottie.loadAnimation({
	container: container,
	renderer: 'svg',
	loop: isLoop,
	autoplay: true,
	path: animFile
    });
```

Each animation is available in `client/assets/anim-data`, in `json` format, ready to be swallowd by Lottie. 

The `dist/` folder contains files that are served with GitHub pages on https://use-code.github.io/hgr-motion/
