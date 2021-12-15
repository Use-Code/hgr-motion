const animButton = document.querySelectorAll('.anim');
import Lottie from 'lottie-web'

const wrapperHeight = 884;

(function(window){
    init();
    // loadStep('dist/assets/anim-data/seq-chargingstation.json', 'screen-cs', false, [28,192]);
    // loadStep('dist/assets/anim-data/seq-strategy-dynamic.json', 'screen-strategy-dynamic', true, [-50,200], 0.45);
    loadStep('dist/assets/anim-data/seq-strategy-static.json', 'screen-strategy-static', true, [116,200], 0.45);
})(window);


function init(){
    animButton.forEach(function(element){
	element.addEventListener('click', function(){
	    const _id = this.getAttribute('id');
	    switch(_id){
	    case 'anim-cs' : loadStep('dist/assets/anim-data/seq-chargingstation.json', 'screen-cs', false, [28,192], 1)
		break;
	    case 'anim-group' : loadStep('dist/assets/anim-data/seq-group.json', 'screen-group', false, [28,312], 1)
		break;
	    case 'anim-strategy-dynamic' : loadStep('dist/assets/anim-data/seq-strategy-dynamic.json', 'screen-strategy-dynamic', true, [-50,200], 0.45)
		break;
	    case 'anim-strategy-static' : loadStep('dist/assets/anim-data/seq-strategy-static.json', 'screen-strategy-static', true, [116,200], 0.45)
		break;
	    case 'anim-llm' : loadStep('dist/assets/anim-data/seq-llm.json', 'screen-llm', false, [28,192], 1)
		break;
	    case 'anim-loading-1' : loadStep('dist/assets/anim-data/seq-loading-prior-1.json', 'screen-loading-1', true, [28,256], 1)
		break;
	    case 'anim-loading-2' : loadStep('dist/assets/anim-data/seq-loading-prior-2.json', 'screen-loading-2', true, [28,256], 1)
		break;
	    case 'anim-loading-3' : loadStep('dist/assets/anim-data/seq-loading-prior-3.json', 'screen-loading-3', true, [28,256], 1)
		break;
	    case 'anim-badges' : loadStep('dist/assets/anim-data/seq-badge.json', 'screen-badge', false, [28,160], 1)
		break;
	    // case 'anim-3' : loadStep('dist/assets/anim-data/seq-llm-dynamic.json', 'dist/assets/screen.png', true, [28,312], 1)
		// break;
	    }
	});
    })
}


function loadStep(animFile, screenId, isLoop, position, scale){
    const container = document.getElementById('anim');
    const screen = document.getElementById('screen');
    const svg = document.getElementsByTagName('svg'); // if an anim is present, we spot it...
    // console.log(container.setAttribute('style': 'display: none;'));
    // container.setAttribute('style', 'transform: scale('+scale+')');
    svg.length > 0 ? container.removeChild(svg[0]) : null; // ...and we remove it
    const animation = Lottie.loadAnimation({
	container: container,
	renderer: 'svg',
	loop: isLoop,
	autoplay: true,
	path: animFile
    });

    const imgs = screen.querySelectorAll('img')

    console.log(screenId);

    imgs.forEach(function(image){
	if(image.getAttribute('id') == screenId){
	    image.setAttribute('style', 'display:block;')
	} else {
	    image.setAttribute('style', 'display:none;')
	}

    });

    container.setAttribute('style', 'margin-left: '+position[0]+'px; margin-top: '+position[1]+'px; transform: scale('+scale+')')
}

window.onresize = function() {
    adaptDeviceSize();
}
function adaptDeviceSize(){
    const container = document.getElementById('wrapper');
    if(window.innerHeight < wrapperHeight+64){
	const nh = window.innerHeight / wrapperHeight
	container.setAttribute('style', 'transform: scale('+nh+')')
	console.log("attention");
    }
}
