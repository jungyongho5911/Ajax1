var app = app || {};
var route = route || {};
app = (()=>{
    var init=x=>{
        onCreate(x);
        setContentView();
    };
    var onCreate=x=>{
        route.init(x);
    };
    var setContentView=()=>{
        alert(route.$());
        $('#wrapper').empty();
        app.algorithm.init();
    };
    return {init:init};
})();

app.algorithm = (()=>{
	var init=()=>{
		onCreate();
		setContentView();
	};
	var onCreate=()=>{
		route.init();
	};
	var setContentView = ()=>{
		$('#wrapper').html('<h1>Hello AJAX!!</h1>');
	};
	
	return{init:init};
})();

route = (()=>{
    var init=x=>{
        sessionStorage.setItem('x',x);
    };
    var onCreate=()=>{
        
    };
    var setContentView=()=>{
        
    };
    var $ = () => {
        return sessionStorage.getItem('x');
    };
    
    return {init:init,$:$};
})();
























