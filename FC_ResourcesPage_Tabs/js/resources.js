
var currentLink = null;
    function changeLinkColor(link){
                if(currentLink!=null){
                    currentLink.style.color = link.style.color; 
                }
                link.style.color = 'green';
                currentLink = link;
            }

function one()
{
        clearbox("list-group-item");
        clearbox('content')
	clearbox('main')
       var obj=[];
        var count = Object.keys(jsonObj.myObject).length;
            var container= document.getElementById('list-group-item');
        for(var i=0;i<2;i++)
    {
    
	 
     obj[i]= jsonObj.myObject[i];				
    var button = "<ul><h4><a style="+"text-decoration:none;border:10px solid #EE872A;"+" id='"+i+"' onclick="+"data(id)"+";changeLinkColor(this)"+" >"+obj[i].heading + "</a></h4></ul><br>"
    container.innerHTML+=button;
    }
    eGet('main').innerHTML="<h4>"+obj[0].heading+"</h4>"
  
    eGet('content').innerHTML=obj[0].content;
}
function clearbox(elementID)
{
    document.getElementById(elementID).innerHTML="";
}
  function two()
        {
            clearbox("list-group-item");
             clearbox('content')
	clearbox('main')
	var obj=[];
        var count = Object.keys(jsonObj.myObject).length;
            var container= document.getElementById('list-group-item');
        for(var i=2;i<count&&i!=5;i++)
    {
     obj[i]= jsonObj.myObject[i];
    var button = "<ul><h4><a  style="+"text-decoration:none;"+" id='"+i+"6"+"' onclick="+"data(id)"+";changeLinkColor(this)"+" >"+obj[i].heading+ "</a></h4></ul><br>"
    container.innerHTML+=button;
    }
    eGet('main').innerHTML="<h4>"+obj[2].heading+"</h4>"   
    eGet('content').innerHTML=obj[2].content;
}
function three()
        {
            clearbox("list-group-item");
             clearbox('content')
	clearbox('main')
	var obj=[];
                var count = Object.keys(jsonObj.myObject).length;
            var container= document.getElementById('list-group-item');
        for(var i=5;i<count;i++)
    {
    obj[i]= jsonObj.myObject[i];
    var button = "<ul><h4><a  style="+"text-decoration:none;"+" id='"+i+"7"+"' onclick="+"data(id)"+";changeLinkColor(this)"+" >"  +obj[i].heading+ "</a></h4></ul><br>"
    container.innerHTML+=button;
    }
    eGet('main').innerHTML="<h4>"+obj[5].heading+"</h4>"
    eGet('content').innerHTML=obj[5].content;
}
function data(id)
{
        clearbox('content')
	clearbox('main')
	var obj=[];
    var i = 0
      var count = Object.keys(jsonObj.myObject).length
      for(var i=0;i<count;i++)
    {
    obj[i]= jsonObj.myObject[i];
    
    var button ="<h4>"+ obj[i].heading+"</h4>";
    }
    for(i=0;i<count;i++)
    {
    if (id==0)
    { eGet('content').innerHTML=obj[0].content;
	 eGet('main').innerHTML="<h4>"+ obj[0].heading+"</h4>";
	   break;
    }
    else if (id==1)
    {
	 eGet('content').innerHTML=obj[1].content;
	 eGet('main').innerHTML="<h4>"+ obj[1].heading+"</h4>";;
	   break;
    }
    else if (id==2|| id=="26")
    {
	eGet('content').innerHTML=obj[2].content;
        eGet('main').innerHTML="<h4>"+ obj[2].heading+"</h4>";;
	   break;
    }
    else if (id==3 || id=="36")
    {
	eGet('content').innerHTML=obj[3].content;
           eGet('main').innerHTML="<h4>"+ obj[3].heading+"</h4>";;	
	   break;
    }
    else if (id==4 || id=="46")
    {
	eGet('content').innerHTML=obj[4].content;
       eGet('main').innerHTML="<h4>"+ obj[4].heading+"</h4>";;
	   break;
    }
    else if (id==5 ||id=="57")
    {
	eGet('content').innerHTML=obj[5].content;
        eGet('main').innerHTML="<h4>"+ obj[5].heading+"</h4>";;
	   break;
    }
    }
}

