function one()
{
            clear("list-group-item")
	     clear("content")
	          clear("main")
      
        var count = Object.keys(jsonObj.myObject).length            
        for(var i=0;i<count-4;i++)
    {
	var container= document.getElementById('list-group-item');
	var obj= jsonObj.myObject[i]; 
    var button = "<ul><button id='"+i+"' onclick="+"data(id)"+" >" +obj.heading + "</button></ul><br>"
    container.innerHTML
    +=button;
    }
     var container= document.getElementById('main');
    var obj= jsonObj.myObject[0];
    var button = "<h3>"+obj.heading+"</h3>"
    container.innerHTML+=button;
    var container= document.getElementById('content');
    var obj= jsonObj.myObject[0];
    var button = obj.content
    container.innerHTML+=button; 
}
function clear(elementID)
{
    document.getElementById(elementID).innerHTML="";
}

function two()
        {
            clear("list-group-item")
	     clear("content")
	          clear("main")
        
        var count = Object.keys(jsonObj.myObject).length;
           
	    
        for(var i=2;i<count&&i!=5;i++)
    {
    var container= document.getElementById('list-group-item');
    var obj= jsonObj.myObject[i];
    //var button = "<ul>"+obj.heading+"</ul><br>"
    var button = "<ul><button id='"+i+"6"+"' onclick="+"data(id)"+">" +obj.heading + "</button></ul><br>"
    container.innerHTML+=button;
    }
    var container= document.getElementById('main');
    var obj= jsonObj.myObject[2];
    var button = "<h3>"+obj.heading+"</h3>"
    container.innerHTML+=button;
    var container= document.getElementById('content');
    var obj= jsonObj.myObject[2];
    var button = obj.content
    container.innerHTML+=button; 
}
function three()
        {
            clear("list-group-item")
	       clear("content")
	          clear("main")
        
        var count = Object.keys(jsonObj.myObject).length;
            
        for(var i=5;i<count;i++)
    {
    var container= document.getElementById('list-group-item');
    var obj= jsonObj.myObject[i];
    //var button = "<ul>"+obj.heading+"</ul><br>"
    var button = "<ul><button id='"+i+"7"+"' onclick="+"data(id)"+">" +obj.heading + "</button></ul><br>"
    container.innerHTML+=button;
    }
    var container= document.getElementById('main');
    var obj= jsonObj.myObject[5];
    var button = "<h3>"+obj.heading+"</h3>"
    container.innerHTML+=button;
    var container= document.getElementById('content');
    var obj= jsonObj.myObject[5];
    var button = obj.content
    container.innerHTML+=button; 
}

function load()
{
    
     var i = 0
      var count = Object.keys(jsonObj.myObject).length
    var container= document.getElementById('list-group-item');
    for(i=0;i<count;i++)
    {	
   var obj = jsonObj.myObject[i];
     var button = "<ul><button id='"+i+"' onclick="+"data(id)"+">" +obj.heading + "</button></ul><br>"
    container.innerHTML+=button;
   
    }
    var container= document.getElementById('content');
    var obj = jsonObj.myObject[0];
    var button=obj.content
    container.innerHTML+=button;
    
	 var container2= document.getElementById('main');
          var obj = jsonObj.myObject[0];
           var button = "<h3>"+obj.heading+"</h3>"
           container2.innerHTML+=button;
    
}

function data(id)
{
        clear('content')
	clear('main')
     
    var i = 0
      var count = Object.keys(jsonObj.myObject).length
    for(i=0;i<count;i++)
    {
    if (id==0)
    { 
         var container= document.getElementById('content');
          var obj = jsonObj.myObject[0];
           var button = obj.content
           container.innerHTML+=button;
	   
	   var container2= document.getElementById('main');
          var obj = jsonObj.myObject[0];
           var button = "<h3>"+obj.heading+"</h3>"
           container2.innerHTML+=button;
	   
           
	   
	   break;
	   
	   
    }
    else if (id==1)
    {
        var container= document.getElementById('content');
          var obj = jsonObj.myObject[1];
           var button = obj.content
           container.innerHTML+=button;
	   
	    var container2= document.getElementById('main');
          var obj = jsonObj.myObject[1];
           var button = "<h3>"+obj.heading+"</h3>"
           container2.innerHTML+=button;
	   
	   break;
    }
    else if (id=="26"||id==2)
    {
        var container= document.getElementById('content');
          var obj = jsonObj.myObject[2];
           var button = obj.content
           container.innerHTML+=button;
	   
	    var container2= document.getElementById('main');
          var obj = jsonObj.myObject[2];
           var button = "<h3>"+obj.heading+"</h3>"
           container2.innerHTML+=button;
	   
	   break;
    }
    else if (id=="36"|| id==3)
    {
        var container= document.getElementById('content');
          var obj = jsonObj.myObject[3];
           var button = obj.content
           container.innerHTML+=button;
	   
	    var container2= document.getElementById('main');
          var obj = jsonObj.myObject[3];
           var button = "<h3>"+obj.heading+"</h3>"
           container2.innerHTML+=button;
	   
	   break;
    }
    else if (id=="46"||id==4)
    {
        var container= document.getElementById('content');
          var obj = jsonObj.myObject[4];
           var button = obj.content
           container.innerHTML+=button;
	   
	    var container2= document.getElementById('main');
          var obj = jsonObj.myObject[4];
           var button = "<h3>"+obj.heading+"</h3>"
           container2.innerHTML+=button;
	   
	   break;
    }
    else if (id=="57"||id==5)
    {
        var container= document.getElementById('content');
          var obj = jsonObj.myObject[5];
           var button = obj.content
           container.innerHTML+=button;
	   
	    var container2= document.getElementById('main');
          var obj = jsonObj.myObject[5];
           var button = "<h3>"+obj.heading+"</h3>"
           container2.innerHTML+=button;
	   
	   break;
    }
    }
}