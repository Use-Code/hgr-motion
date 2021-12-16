const animButton = document.querySelectorAll('.anim');
import Lottie from 'lottie-web'

const wrapperHeight = 884;

(function(window){
    init();
    loadStep('dist/assets/anim-data/seq-chargingstation.json', 'screen-200', false, [28,192]);
})(window);


function init(){
    animButton.forEach(function(element){
	element.addEventListener('click', function(){
	    const _id = this.getAttribute('id');
	    switch(_id){
	    case 'anim-200' : loadStep('dist/assets/anim-data/seq-chargingstation.json', 'screen-200', false, [28,192], 1)
		break;
	    case 'anim-201' : loadStep('dist/assets/anim-data/seq-llm.json', 'screen-201', false, [28,192], 1)
		break;
	    case 'anim-202' : loadStep('dist/assets/anim-data/seq-3chargingstations.json', 'screen-202', false, [28,192], 1)
		break;
	    case 'anim-203' : loadStep('dist/assets/anim-data/seq-2groups.json', 'screen-203', false, [28,192], 1)
		break;
	    case 'anim-204' : loadStep('dist/assets/anim-data/seq-badge.json', 'screen-204', false, [28,192], 1)
		break;
	    case 'anim-303' : loadStep('dist/assets/anim-data/seq-strategy-dynamic.json', 'screen-303', true, [-58,235], 0.45)
		break;
	    case 'anim-304' : loadStep('dist/assets/anim-data/seq-strategy-static.json', 'screen-304', true, [116,237], 0.45)
		break;		
	    case 'anim-400' : loadStep('dist/assets/anim-data/seq-hagerstations.json', 'screen-400', true, [28,192], 1)
		break;	
	    case 'anim-500' : loadStep('dist/assets/anim-data/seq-loading.json', 'screen-500', true, [28,450], 0.75)
		break;
	    case 'anim-900' : loadStep('dist/assets/anim-data/seq-group.json', 'screen-900', false, [28,128], .85)
		break;
	    case 'anim-1100' : loadStep('dist/assets/anim-data/seq-loading-prior-1.json', 'screen-1100', true, [28,296], 1)
		break;
	    case 'anim-1101' : loadStep('dist/assets/anim-data/seq-loading-prior-3.json', 'screen-1101', true, [28,296], 1)
		break;
	    case 'anim-1102' : loadStep('dist/assets/anim-data/seq-loading-prior-2.json', 'screen-1102', true, [28,296], 1)
		break;
	    case 'anim-1201' : loadStep('dist/assets/anim-data/seq-badge.json', 'screen-1201', false, [28,192], 1)
		break;
	    }
	});
    })
}


function loadStep(animFile, screenId, isLoop, position, scale){
    const container = document.getElementById('anim');
    const screen = document.getElementById('screen');
    const svg = document.getElementsByTagName('svg'); // if an anim is present, we spot it...
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
