# Hager - Animations #

Animations are displayed with [Lottie](http://airbnb.io/lottie/#/web). The file `client/js/index.js` contains a simple example of implementation. 

``` javascript
import Lottie from 'lottie-web'

const container = document.getElementById('myContainer');

const animation = Lottie.loadAnimation({
	container: container, // the container in the dom
	renderer: 'svg',
	loop: true, // some may be true, some may be false, see client/js/index.js 
	autoplay: true, 
	path: 'client/assets/anim-data/anim.json' // available in client/assets/aniam-data in josn format
});
```

Each animation is available in `client/assets/anim-data`, in `json` format, ready to be swallowd by Lottie. 

### Side note ###

`dist/` is the compiled folder (thanks to Webpack) that contains files, which are used on the website served with GitHub pages on https://use-code.github.io/hgr-motion/
