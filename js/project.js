window.g=[];
var counter=1;
var editidx;
function Inc()
{
    counter=counter+1;
    return counter;
}
function Dec()
{
    counter-=1;
    return counter;
}


var Base = function(id,state,name, email){
    this.id=id;
    this.state=state;
    this.name=name;
    this.email=email;

}


Base.prototype.validate=function(){

    if (this.name == null || this.name == "") {
        alert("Name must be filled out");
        return false;
    }

    var mail = this.email;
    var atpos = mail.indexOf("@");
    var dotpos = mail.lastIndexOf(".");
    if (atpos<1 || dotpos<atpos+2 || dotpos+2>=mail.length) {
        alert("Not a valid e-mail address");
        return false;
    }
    return true;
}
var Student = function(id,state,name, email, course){
    this.id=id;
    this.state=state;
    this.name=name;
    this.email=email;
    this.course=course;
}
Student.prototype = Object.create(Base.prototype);


Student.prototype.validate = function() {
    if(Base.prototype.validate.call(this)){
        if (this.course == null || this.course == "") {
            alert("Course must be filled out");
            return false;
        }
        return true;
    }
    return false;
}

var Admin = function(id,state,name,email,dept){
    this.id=id;

    this.state=state;
    this.name=name;
    this.email=email;
    this.dept = dept;
}
Admin.prototype = Object.create(Base.prototype);


Admin.prototype.validate = function() {
    if(Base.prototype.validate.call(this)){
        if (this.dept == null || this.dept == "") {
            alert("Department must be filled out!");
            return false;
        }
        return true;
    }
    return false;
}

var context={
    thing:[
    {name:'name',type:'text'},
    {name:'email',type:'text'}]
};

$(document).ready(function()
{
    $('#studDiv').hide();
    $('#adminDiv').hide();
    var theTemplateScript = $("#form-template").html();
    var theTemplate = Handlebars.compile(theTemplateScript);
    var theCompiledHtml = theTemplate(context);
    $('.form-placeholder').html(theCompiledHtml);
    $('select').change(function(){
        var value=$(this).find('option:selected').val();
        if(value==1)
        {

            $('#studDiv').show();
            $('#adminDiv').hide();
            fun1();
        }
         else
         {
            $('#studDiv').hide();
            $('#adminDiv').show();
            fun2();
}
});
});

function fun1(){
$('#add1').click(function()
{
	
    var id=counter;
    var state=1;
    Inc();
               
            var name = $("#student").find('input')[0].value;
            var email = $("#student").find('input')[1].value;
            var course = $("#student").find('input')[2].value;
            $('#update1').prop('disabled', true);
            var  btn= document.createElement('input');        
            btn.type = "button";
            btn.value = "Edit";
            
            var del = document.createElement('input');       
            del.type = "button";
            del.value = "Delete";
           

            var s = new Student(id,state,name,email,course);
            if(s.validate()){
                $('#tab1 tr:eq(-1)').after('<tr><td>'+name+'</td><td>'+email+'</td><td>'+course+'</td></tr>');
                $('#tab1 tr:eq(-1)').append(btn);
                $('#tab1 tr:eq(-1)').append(del);
           
                g.push({'id':id,'state':state,'name':name,'email':email,'course':course});
             

            

            btn.onclick = function(){
                $('#update1').prop('disabled', false);
                var index = btn.parentNode.rowIndex;
                $("#student").find('input')[0].value = $('#tab1 tr:eq('+index+')').find('td:eq(0)').html();
                $("#student").find('input')[1].value =  $('#tab1 tr:eq('+index+')').find('td:eq(1)').html();
                $("#student").find('input')[2].value =  $('#tab1 tr:eq('+index+')').find('td:eq(2)').html();
                editidx=index;
            }
                
            del.onclick=function(){
                var index = del.parentNode.rowIndex;
                $('#tab1 tr:eq('+index+')').remove();
             $.grep(g, function(n, i){ // just use arr
                if(n.id == s.id){
                    n.state=0;
                }
                });
                }
            
            }            
                else
                {
                    Dec();
                }

        
         
     });
            $('#update1').click (function(){
                 var updateIndex = editidx;
                 console.log(updateIndex);
                 $('#update1').prop('disabled', false);
                $('#tab1 tr:eq('+updateIndex+')').find('td:eq(0)').innerHTML= $("#student").find('input')[0].value;
                $('#tab1 tr:eq('+updateIndex+')').find('td:eq(1)').innerHTML= $("#student").find('input')[1].value;
                $('#tab1 tr:eq('+updateIndex+')').find('td:eq(2)').innerHTML= $("#student").find('input')[2].value;
                });
    }
function fun2(){
            $("#add2").click(function(){
            var id=counter;
            var state=1;
            Inc();
            var name=$('#Admin').find('input')[0].value;
            var email=$('#Admin').find('input')[1].value;
            var dept=$('#Admin').find('input')[2].value;
            var a=new Admin(id,state,name,email,dept);
             $('#update2').prop('disabled', true);
            var  btn= document.createElement('input');        
            btn.type = "button";
            btn.value = "Edit";
            
            var del = document.createElement('input');       
            del.type = "button";
            del.value = "Delete";
            
            var a = new Admin(id,state,name,email,dept);
            if(a.validate()){
                $('#tab2 tr:eq(-1)').after('<tr><td>'+name+'</td><td>'+email+'</td><td>'+dept+'</td></tr>');
                $('#tab2 tr:eq(-1)').append(btn);
                $('#tab2 tr:eq(-1)').append(del);
           
                g.push({'id':id,'state':state,'name':name,'email':email,'dept':dept});
             

            
            btn.onclick = function(){
                $('#update2').prop('disabled', false);
                var index = btn.parentNode.rowIndex;
                $("#Admin").find('input')[0].value = $('#tab2 tr:eq('+index+')').find('td:eq(0)').html();
                $("#Admin").find('input')[1].value =  $('#tab2 tr:eq('+index+')').find('td:eq(1)').html();
                $("#Admin").find('input')[2].value =  $('#tab2 tr:eq('+index+')').find('td:eq(2)').html();
                editidx=index;
            }
                
            del.onclick=function(){
                var index = del.parentNode.rowIndex;
                $('#tab2 tr:eq('+index+')').remove();
                $.grep(g, function(n, i){ // just use arr
                if(n.id == a.id){
                    n.state=0;
                }
                });

                }
            
            }            
                else
                {
                    Dec();
                }

  		

        });
                $('#update2').click ( function(){
                 var updateIndex=editidx;
                 $('#update2').prop('disabled', false);
                 console.log(updateIndex);
                $('#tab2 tr:eq('+updateIndex+')').find('td:eq(0)').innerHTML= $("#Admin").find('input')[0].value;
                $('#tab2 tr:eq('+updateIndex+')').find('td:eq(1)').innerHTML = $("#Admin").find('input')[1].value;
                $('#tab2 tr:eq('+updateIndex+')').find('td:eq(2)').innerHTML= $("#Admin").find('input')[2].value;
            });



        }