function hello(){
	return '<h1> Hello !! AJAX 2 </h1>';
}
var loginInbox=x=>{
	return '  <table id="'+x+'">'
	+'    <tr>'
	+'    	<td><input id="input-userid" name="userid"'
	+'           type="text" value="skyfor1004" placeholder="ID" tabindex="1" />'
	+'    	</td>'
	+'    	<td id="td-login-btn" rowspan="2">'
	+'   	 </td>'
	+'    </tr>'
	+'    <tr>'
	+'      <td><input id="input-password" name="password"'
	+'        type="password" value="1" placeholder="PASSWORD" tabindex="2" />'
	+'        <input type="hidden" name="cmd" value="login" />'
	+'        <input type="hidden" name="page" value="mypage" />'
	+'      </td>'
	+'    </tr>'
	+'  </table> ';
}
var loginOutbox=x=>{
	return'<table id="'+x+'">' 
	+'<tr rowspan=2>'
	+' <a id="" href="#"> 관리자 </a>'
	+'<a id="" href="#"> 회원가입 </a>'
	+'</tr>'
	+'</table>';
}
function navigation(x){
	return ' <nav class="navbar navbar-default">'
	+'  <div class="container-fluid">'
	+'    <!-- Brand and toggle get grouped for better mobile display -->'
	+'    <div class="navbar-header"><div id ="div-nav-1st">'
	/*
	+'      <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">'
	+'        <span class="sr-only">Toggle navigation</span>'
	+'        <span class="icon-bar"></span>'
	+'        <span class="icon-bar"></span>'
	+'        <span class="icon-bar"></span>'
	+'      </button>'
	 * */
	+'      </div><a class="navbar-brand" href="#">'
	+'    <img style="height: 130%" src="'+$.image()+'/G6.jpg" />'
	+'    </a>'
	+'    </div>'
	+'    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">'
	+'      <ul class="nav navbar-nav">'
	+'        <li id="a-home" class="active"><a href="#">'
	+'          <span class="glyphicon glyphicon-home" aria-hidden="true"> HOME</span></a></li>'
	+'        <li><a id="a-about" href="#">'
	+'          <span class="glyphicon glyphicon-map-marker" aria-hidden="true"> about</span>'
	+'        </a></li>'
	+'        <li><a id="span-board" href="#">'
	+'          <span class="glyphicon glyphicon-map-marker" aria-hidden="true"> 게시판</span>'
	+'        </a></li>'
	+'        <li class="dropdown">'
	+'          <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button"  aria-expanded="false"> 선택 <span class="caret"></span></a>'
	+'          <ul class="dropdown-menu" role="menu">'
	+'            <li id = "li-sequence"></li>'
	+'            <li id = "li-math"></li>'
	+'            <li id = "li-matrix"></li>'
	+'            <li id = "li-sort"></li>'
	+'            <li id = "li-application"></li>'
	+'          </ul>'
	+'        </li>'
	+'      </ul>'
	+'      <form class="navbar-form navbar-left" role="search">'
	+'        <div class="form-group">'
	+'          <input type="text" class="form-control" placeholder="Search">'
	+'        </div>'
	+'        <button type="submit" class="btn btn-default">검 색</button>'
	+'      </form>'
	+'      <ul class="nav navbar-nav navbar-right">'
	+'        <li class="dropdown">'
	+'          <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">'
	+'            <span class="glyphicon glyphicon-user" aria-hidden="true"></span>'
	+'          <span class="caret"></span></a>'
	+'          <ul class="dropdown-menu" role="menu">'
	+'                    <li id = "li-login">'
	+'                        <a id="a-join" href="#"> '
	+'                            <span class="glyphicon glyphicon-plus-sign" aria-hidden="true">&nbsp;회원가입</span>'
	+'                        </a>'
	+'                    </li>'
	+'                    <li>'
	+'                        <a id="a-logout" href="#">'
	+'                            <span class="glyphicon glyphicon-log-out" aria-hidden="true">&nbsp;로그아웃</span>'
	+'                        </a>'
	+'                    </li>                '
	+'          </ul>'
	+'      </ul>'
	+'    </div>'
	+'  </div>'
	+'</nav>'
	;
}
function createButtonNav1st(){
	return '<button id="btn-nav-1st" type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">'
	+'        <span class="sr-only">Toggle navigation</span>'
	+'        <span class="icon-bar"></span>'
	+'        <span class="icon-bar"></span>'
	+'        <span class="icon-bar"></span>'
	+'      </button>';
}
var createATag=(x,y)=>{
		return '<a id="'+x+'" href="#">'+y+'</a>';
}
var createSpan=(x,y)=>{
	return '<span class="glyphicon '+x+'" aria-hidden="true"> &nbsp;'
	
	+y+'</span>'
}
var createHTag=(x,y)=>{
	return '<h'+x+'>'+y+'</h'+x+'>';
}
var createDiv=(x,y)=>{
	return '<div id="'+x+'" class="'+y+'"></div>';
}// style="margin-top: 50px;"

var createAlgoTab=()=>{
	//createDiv(x,y)
	//createTab('2',수열알고리즘)
	return '        <table id="tab-algo" class="table table-bordered">'
    +'            <tr>'
    +'            <td rowspan="5"><li id = "li-algo-arith"></li>'
    +'					<li id = "li-algo-switch"></li><li id = "li-algo-geo"></li>'
    +'					<li id = "li-algo-fact">'
    +'					<li id = "li-algo-fibo">'
    +'					</td>'
    +'            <tr>'
    +'                <td rowspan="5" id="td-algo-arith-init"></td>'
    +'            </tr>'
    +'        </table>';
}
var createTab=(x,y,jason,txt,type)=>{
	var tab = '<table id="'+x+'" class="'+y+'">'
	+'<thead><tr>'
	+'<th colspan="5">'+txt+'</th>'
	+'</tr></thead>';
	$.each(JSON.parse(jason),(i,j)=>{
		tab +=
			'<tr >'
			+'<td >' +j.a+'</td>'
			+'<td >' +j.b+'</td>'
			+'<td >' +j.c+'</td>'
			+'<td >' +j.d+'</td>'
			+'<td >' +j.e+'</td>'
			+'</tr>';
	});
	tab += '</table>'
	return tab;
}
var createArrayTab=(x,y,jason,txt,type)=>{
	var tab= '<table id="'+x+'" class="'+y+'">'
	+'<thead><tr>'
	+'<th colspan="5">'+txt+'</th>'
	+'</tr></thead>';
	$.each(jason,(i,j)=>{
		tab +=
			'<tr>'
			+'<td><a id="a-td'+i+'" >' +j+'</a></td>'
			+'<td id="sort'+i+'" ></td>'
			+'</tr>';
	});
	tab += '</table>'
	return tab;
}
var createMathTab=(x,y,jason,txt)=>{
	var tab = '<table id="'+x+'" class="'+y+'">'
	+'<thead><tr>'
	+'<th colspan="6">'+txt+'</th>'
	+'</tr></thead>';
	$.each(jason,(i,j)=>{
		tab +=
			'<tr>'
			+'<td><a id="a-td'+i+'" >' +j+'</a></td>'
			+'<td id="math'+i+'" ></td>'
			+'</tr>';
	});
	tab += '</table>'
	return tab;
}
var createAppTab=(x,y,jason,txt)=>{
	var tab = '<table id="'+x+'" class="'+y+'">'
	+'<thead><tr>'
	+'<th colspan="4">'+txt+'</th>'
	+'</tr></thead>';
	$.each(jason,(i,j)=>{
		tab +=
			'<tr>'
			+'<td><a id="a-td'+i+'" >' +j+'</a></td>'
			+'<td  id="app'+i+'"></td>'
			+'</tr>';
	});
	tab += '</table>'
	return tab;
}

var createAlogReuslt=(x,y,z)=>{
	return '<button type="button" id="'+x+'" class="btn'+y+'" >'+z+'</button>';
}

var createUL=(x,y)=>{
	return '<ul id="'+x+'" class="'+y+'"></ul>';
}
var createLI=(x,y)=>{
	return '<ll id="'+x+'" class="'+y+'"></ll>';
}
var createInput=(x,y)=>{
	return '<input id="'+x+'" placeholder="'+y+'" type="text"/> <br/>'
}
var createText=x=>{
    return '<h1 style="text-align: center;" id="'+x+'"></h1>';
}

