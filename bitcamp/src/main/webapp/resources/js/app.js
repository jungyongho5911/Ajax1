/**
 * 공통 JavaScript 기능
 */
var app = app || {};

app = (()=>{
   var init = x =>{
       
       $.getScript(x+'/resources/js/router.js',()=>{
           $.extend(new Router(x));
           app.algorithm.onCreate();
           app.member.onCreate();
       })
   };
   return {init:init};
})();
app.member=(()=>{
	var $wrapper,context,algo,view,image;
	var onCreate=()=>{
		 $wrapper = $('#wrapper');
		 context = $.context();
		 image = $.image();
	     view = $.javascript()+'/view.js';
	     setContentView();
	 };
     var setContentView = ()=>{
    	 $.getScript(view,()=>{
    		// $wrapper.append(login('login-inner-table'));
    		 $(createDiv('container','login-container'))
    		 .appendTo($wrapper);
    		 $(createDiv('content','login-content'))
    		 .appendTo('#container');
    		 $(loginInbox('loginInbox'))
    		 .appendTo('#content');
    		 $(loginOutbox('loginOutbox'))
    		 .appendTo('#loginInbox');
    		 $(createAlogReuslt('login-btn','default','Login'))
    		 .appendTo('#td-login-btn')
    		 .on('click',e=>{
    			 e.preventDefault();
    			 var jason={
    					 'userid' : $('#input-userid').val(),
    					 'password' : $('#input-password').val()
    			 };
    			alert('로그인 버튼 클릭');
    			$.ajax({
    				url : context+'/member/login',
    				method : 'POST',
    				data : JSON.stringify(jason),
    				dataType : 'json',
    				contentType : 'application/json',
    				success : x=>{
    					alert('로그인성공') +x.flag;
    				},
    				error : (x,h,m)=>{
    					alert('로그인에서 에러 발생 m='+m+',h='+h+',x='+x);
    					
    				}
    			});
    		 });
    	 });
     };
     var login=()=>{
		 
	 };
     return{onCreate:onCreate};
})();
app.algorithm = (()=>{
   var onCreate=()=>{
       $wrapper = $('#wrapper');
       $wrapper2 = $('#wrapper2');
       $wrapper3 = $('#wrapper3');
       context = $.context();
       algo = $.javascript()+'/algo.js';
       view = $.javascript()+'/view.js';
       image = $.image();
       setContentView();
   };
   var setContentView =()=>{
       $wrapper.empty();
       $.getScript(view,()=>{
           $wrapper.html(navigation());
           $(createButtonNav1st())
                   .appendTo($('#div-nav-1st'))
                   .click(()=>{
                   alert('Button click!!');
               });
           $(createATag(createSpan('glyphicon-user','로그인')))
                  .appendTo($('#li-login'))
                   .click(()=>{
                   alert('LOGIN BUTTON CLICK');
           });
           $(createATag('','수열'))
              .appendTo($('#li-sequence'))
               .click(()=>{
            	   $wrapper2.html($(createDiv('content-tab','container'))
            			   .attr('style', 'margin-top: 50px;')
                           .append(createHTag('2', '수열 알고리즘'))
                           .append(createAlgoTab()));
                   var $left=$('#tabLeft'),$right=$('#td-algo-arith-init');
                   $(createATag('#a-algo-arith','등차수열의합'))
                   .appendTo('#li-algo-arith')
                   .click(()=>{
                	   alert('클릭 성공');
                	   $right.empty();
                       $(createInput('input-algo-init','초기값 입력'))
                       .appendTo($right);
                       $(createInput('input-algo-limit','리밋값 입력'))
                       .appendTo($right);
                       $(createInput('input-algo-tol','공차 입력'))
                       .appendTo($right);
                       $(createAlogReuslt('btn-result','btn-primary','결과보기'))
                       .appendTo($right)
                       .attr('style','margin-top:10px;margin-left:100px;width:100px')
                       .on('click',()=>{
                    	   var x = $('#input-algo-init').val();
                    	   var y = $('#input-algo-limit').val();
                    	   var z = $('#input-algo-tol').val();
                    	   
                    	   if(x !== '' && y !== '' && z !== '' && x>0 && y>0 && z>0){
                    		   $.getScript(algo,()=>{	
                        		   $(createText('span-algo')).appendTo($wrapper3);
                        		   $('#span-algo').text('답 : '+ arith(x,y,z));
                        	   });
                    	   }else{
                    		   alert('값을 넣어주세요');
                    	   }
                       });
                   });
                   $(createATag('#a-algo-switch','스위치수열의합'))
                   .appendTo('#li-algo-switch')
                   .click(()=>{
                	   alert('클릭 성공');
                	   $right.empty();
                       $(createInput('input-algo-init','초기값 입력'))
                       .appendTo($right);
                       $(createInput('input-algo-limit','리밋값 입력'))
                       .appendTo($right);
                       $(createInput('input-algo-tol','공차 입력'))
                       .appendTo($right);
                       $(createAlogReuslt('btn-result','btn-primary','결과보기'))
                       .appendTo($right)
                       .attr('style','margin-top:10px;margin-left:100px;width:100px')
                       .on('click',()=>{
                    	   var x = $('#input-algo-init').val();
                    	   var y = $('#input-algo-limit').val();
                    	   var z = $('#input-algo-tol').val();
                    	   
                    	   if(x !== '' && y !== '' && z !== '' && x>0 && y>0 && z>0){
                    		   $.getScript(algo,()=>{	
                        		   $(createText('span-algo')).appendTo($wrapper3);
                        		   $('#span-algo').text('답 : '+ switchSeq(x,y,z));
                        	   });
                    	   }else{
                    		   alert('값을 넣어주세요');
                    	   }
                       });
                   });
                   $(createATag('#a-algo-geo','등비수열'))
                   .appendTo('#li-algo-geo')
                   .click(()=>{
                	   alert('클릭 성공');
                	   $right.empty();
                       $(createInput('input-algo-init','초기값 입력'))
                       .appendTo($right);
                       $(createInput('input-algo-limit','리밋값 입력'))
                       .appendTo($right);
                       $(createInput('input-algo-tol','공차 입력'))
                       .appendTo($right);
                       $(createAlogReuslt('btn-result','btn-primary','결과보기'))
                       .appendTo($right)
                       .attr('style','margin-top:10px;margin-left:100px;width:100px')
                       .on('click',()=>{
                    	   var x = $('#input-algo-init').val();
                    	   var y = $('#input-algo-limit').val();
                    	   var z = $('#input-algo-tol').val();
                    	   
                    	   if(x !== '' && y !== '' && z !== '' && x>0 && y>0 && z>0){
                    		   $.getScript(algo,()=>{	
                        		   $(createText('span-algo')).appendTo($wrapper3);
                        		   $('#span-algo').text('답 : '+ geoSeq(x,y,z));
                        	   });
                    	   }else{
                    		   alert('값을 넣어주세요');
                    	   }
                       });
                   });
                   $(createATag('#a-algo-fact','피보나치수열의합'))
                   .appendTo('#li-algo-fact')
                   .click(()=>{
                	   alert('클릭 성공');
                	   $right.empty();
                	   $(createInput('input-algo-init','초기값 입력'))
                       .appendTo($right);
                       $(createInput('input-algo-limit','리밋값 입력'))
                       .appendTo($right);
                       $(createInput('input-algo-tol','공차 입력'))
                       .appendTo($right);
                       $(createAlogReuslt('btn-result','btn-primary','결과보기'))
                       .appendTo($right)
                       .attr('style','margin-top:10px;margin-left:100px;width:100px')
                       .on('click',()=>{
                    	   var x = $('#input-algo-init').val();
                    	   var y = $('#input-algo-limit').val();
                    	   var z = $('#input-algo-tol').val();
                    	   
                    	   if(x !== '' && y !== '' && z !== '' && x>0 && y>0 && z>0){
                    		   $.getScript(algo,()=>{	
                        		   $(createText('span-algo')).appendTo($wrapper3);
                        		   $('#span-algo').text('답 : '+ arith(x,y,z));
                        	   });
                    	   }else{
                    		   alert('값을 넣어주세요');
                    	   }
                       });
                   });
                   $(createATag('#a-algo-fibo','팩토리얼수열의합'))
                   .appendTo('#li-algo-fibo')
                   .click(()=>{
                	  
                   });
                   $(createInput('input-algo-init','초기값 입력'))
                   .appendTo($right);
                   $(createInput('input-algo-limit','리밋값 입력'))
                   .appendTo($right);
                   $(createInput('input-algo-tol','공차 입력'))
                   .appendTo($right);
                   $(createAlogReuslt('btn-result','btn-primary','결과보기'))
                   .appendTo($right)
                   .attr('style','margin-top:10px;margin-left:100px;width:100px')
                   .on('click',()=>{
                	   var x = $('#input-algo-init').val();
                	   var y = $('#input-algo-limit').val();
                	   var z = $('#input-algo-tol').val();
                	   
                	   if(x !== '' && y !== '' && z !== '' && x>0 && y>0 && z>0){
                		   $.getScript(algo,()=>{	
                    		   $(createText('span-algo')).appendTo($wrapper3);
                    		   $('#span-algo').text('답 : '+ arith(x,y,z));
                    	   });
                	   }else{
                		   alert('값을 넣어주세요');
                	   }
                   });
           });
           $(createATag('','수학'))
           .appendTo($('#li-math'))
           .click(()=>{
               alert('수학 클릭');
               $.getScript(algo,()=>{
            	   $wrapper2.html($(createDiv('content-tab','container'))
            			   .attr('style', 'margin-top: 50px; padding:0px 200px;')
                           .append(createHTag('2', '수학 알고리즘'))
                           .append(createMathTab('tab-math','tab-math',math(),'수학 테이블','default')));
            	   $('#math1').remove();
            	   $('#math2').remove();
            	   $('#math3').remove();
            	   $('#math4').remove();
            	   $('#math5').remove();
            	   $('#math6').remove();
            	   $('#math0').attr('rowspan',math().length+1);
            	   var $right=$('#math0');
            	   $('#a-td0').on('click',()=>{
            		   $right.empty();
                       $(createInput('input-algo-tol','소수 판별 숫자 입력'))
                       .appendTo($right);
                       $(createAlogReuslt('btn-result','btn-primary','결과보기'))
                       .appendTo($right)
                       .attr('style','margin-top:10px;margin-left:100px;width:100px')
                       .on('click',()=>{
                    	   var x = $('#input-algo-tol').val();
                    	   if(x !== ''){
                    		   $.getScript(algo,()=>{	
                        		   $(createText('span-algo')).appendTo($wrapper3);
                        		   $('#span-algo').text('답 : '+ decimal(x));
                        	   });
                    	   }else{
                    		   alert('값을 넣어주세요');
                    	   }
                       });
            	   });
            	   $('#a-td1').on('click',()=>{
            		   alert('클릭');
            		   $right.empty();
                       $(createInput('input-algo-tol','소수 범위 입력'))
                       .appendTo($right);
                       $(createAlogReuslt('btn-result','btn-primary','결과보기'))
                       .appendTo($right)
                       .attr('style','margin-top:10px;margin-left:100px;width:100px')
                       .on('click',()=>{
                    	   var x = $('#input-algo-tol').val();
                    	   if(x !== ''){
                    		   $.getScript(algo,()=>{	
                        		   $(createText('span-algo')).appendTo($wrapper3);
                        		   $('#span-algo').text('답 : '+ primeSeq(x));
                        	   });
                    	   }else{
                    		   alert('값을 넣어주세요');
                    	   }
                       });
            	   });
            	   $('#a-td2').on('click',()=>{
            		   $right.empty();
            		   $(createInput('input-algo-init','초기값 입력'))
                       .appendTo($right);
                       $(createInput('input-algo-limit','리밋값 입력'))
                       .appendTo($right);
                       $(createAlogReuslt('btn-result','btn-primary','결과보기'))
                       .appendTo($right)
                       .attr('style','margin-top:10px;margin-left:100px;width:100px')
                       .on('click',()=>{
                    	   var x = $('#input-algo-tol').val();
                    	   if(x !== ''){
                    		   $.getScript(algo,()=>{	
                        		   $(createText('span-algo')).appendTo($wrapper3);
                        		   $('#span-algo').text('답 : '+ primeSeq(x));
                        	   });
                    	   }else{
                    		   alert('값을 넣어주세요');
                    	   }
                       });
            	   });
            	   $('#a-td3').on('click',()=>{
            		   $right.empty();
            	   });
            	   $('#a-td4').on('click',()=>{
            		   $right.empty();
            	   });
            	   $('#a-td5').on('click',()=>{
            		   $right.empty();
            	 });
             });
               
          });
        	  
           $(createATag('','배열'))
           .appendTo($('#li-matrix'))
           .click(()=>{
        	   $.getScript(algo,()=>{
        		   $wrapper2.html($(createDiv('content-tab','container'))
            			   .attr('style', 'margin-top: 50px; padding:0px 200px;')
                           .append(createHTag('2', '배열 알고리즘'))
                           .append(createTab('test','table table-bordered',fiveByfive(),'배열 테이블','default')));
        	   });
           });
           $(createATag('','정렬'))
           .appendTo($('#li-sort'))
           .click(()=>{
        	   $.getScript(algo,()=>{
        		   $wrapper2.html($(createDiv('content-tab','container'))
            			   .attr('style', 'margin-top: 50px; padding:0px 200px;')
                           .append(createHTag('2', '정렬 알고리즘'))
                           .append(createArrayTab('tab-array','tab-math',arrange(),'정렬 테이블','default')));
        		   $('#sort1').remove();
            	   $('#sort2').remove();
            	   $('#sort3').remove();
            	   $('#sort4').remove();
            	   $('#sort0').attr('rowspan',arrange().length+1);
            	   var $right=$('#sort0');
            	   $('#a-td0').on('click',()=>{
            		   $right.empty();
                       $(createInput('input-algo-tol','정렬 숫자 입력'))
                       .appendTo($right);
                       $(createAlogReuslt('btn-result','btn-primary','결과보기'))
                       .appendTo($right)
                       .attr('style','margin-top:10px;margin-left:100px;width:100px')
                       .on('click',()=>{
                    	   var x = $('#input-algo-tol').val();
                    	   if(x !== ''){
                    		   $.getScript(algo,()=>{	
                        		   $(createText('span-algo')).appendTo($wrapper3);
                        		   $('#span-algo').text('답 : '+ primeSeq(x));
                        	   });
                    	   }else{
                    		   alert('값을 넣어주세요');
                    	   }
                       });
            	   });
        	   });
           });
           $(createATag('','응용'))
           .appendTo($('#li-application'))
           .click(()=>{
        	   alert('응용 클릭');
        	   $.getScript(algo,()=>{
        		   $wrapper2.html($(createDiv('content-tab','container'))
        				   .attr('style','margin-top:50px; padding:0px 100px;')
        				   .append(createHTag('2','응용 알고리즘'))
        				   .append(createAppTab('tab-app','tab-math',application(),'응용 테이블','default')));
        		   $('#app1').remove();
            	   $('#app2').remove();
            	   $('#app3').remove();
            	   $('#app0').attr('rowspan',arrange().length+1);
            	   var $right=$('#app0');
            	   $(createInput('input-algo-init','초기값 입력'))
                   .appendTo($right);
                   $(createInput('input-algo-limit','리밋값 입력'))
                   .appendTo($right);
                   $(createInput('input-algo-tol','공차 입력'))
                   .appendTo($right);
                   $(createAlogReuslt('btn-result','btn-primary','결과보기'))
                   .appendTo($right)
                   .attr('style','margin-top:10px;margin-left:100px;width:100px')
                   .on('click',()=>{
                	   var x = $('#input-algo-init').val();
                	   var y = $('#input-algo-limit').val();
                	   var z = $('#input-algo-tol').val();
                	   
                	   if(x !== '' && y !== '' && z !== '' && x>0 && y>0 && z>0){
                		   $.getScript(algo,()=>{	
                    		   $(createText('span-algo')).appendTo($wrapper3);
                    		   $('#span-algo').text('답 : '+ arith(x,y,z));
                    	   });
                	   }else{
                		   alert('값을 넣어주세요');
                	   }
                   });
        	   });
        	
           });
       });
   };
   return{onCreate:onCreate};
})();

app.router = (()=>{
  var onCreate=x=>{
  $.getScript(x+'resources/js/router.js',()=>{
      $.extend(new Router(x));
      app.algorithm.onCreate()
      });        
  };
  return {onCreate:onCreate};
})();
