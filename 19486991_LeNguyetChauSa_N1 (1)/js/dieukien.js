$(document).ready(function(){
    function ktho(){
        
        var regho=/^([A-Z]{1}[a-z]*\s)*([A-Z]{1}[a-z]*)$/;
        var ho=$("#ho").val();
        if(regho.test(ho)){
            $("#h").html("(*)");
            return true;
        }
        else
        {
            $("#h").html("(*) Nhập sai!!");
            return false;
        }
    }
    $("#ho").blur(ktho)
    function ktt(){
    
        var regten=/^([A-Z]{1}[a-z]*\s)*([A-Z]{1}[a-z]*)$/;
        var ten=$("#ten").val();
        if(regten.test(ten)){
            $("#t").html("(*)");
            return true;
        }
        else
        {
          $("#t").html("(*) Nhập sai!!");
          return false;
        }
    }
    $("#ten").blur(ktt)
    function nmk(){
      
        var regmk=/^(?=.*[A-Za-z])(?=.*[0-9]).{6,}$/
        var mk=$("#mk1").val();
    if(regmk.test(mk))
    {
       $("#mk").html("(*)");
       return true;
    }
    else{
    $("#mk").html("(*) Nhập sai!!");
    return false;
    }
    
    }
    $("#mk1").blur(nmk)

    function ktmail(){
      //  var mail= document.getElementById('email').value;
       // var remail=/^(?=.*[A-Za-z]).{4,}@((gmail)|(yahoo))\.(com){1}\.(vn)?$/;
       // var remail=/^[A-Za-z](@)[A-Za-z](.com){1}$/
       var remail=/^[a-z0-9._%+-]+@(gmail)+.+.[a-z]{2,4}$/
       var mail=$("#mail").val();
        if(remail.test(mail))
        {
            $("#m").html("(*)");
            return true;
        }
        else
        {
            $("#m").html("(*) Nhập sai!!");
            return false;
        }
    }
    $("#mail").blur(ktmail)
    function ktns(){
        var ns= new Date($("#ns").val());
       
        var t=new Date();
        var v=t.getFullYear()-ns.getFullYear();
        if(v>=15)
        {
            $("#n").html("(*)");
            return true;
        }
        else
        {
            $("#n").html("(*)Tuổi >15");
            return false;
        }
    }
    $("#ns").blur(ktns);
   
    $("#btdk").click(function(){
      if(ktho()==false || ktt()==false || nmk==false || ktmail==false || ktns==false){ 
          $("#tt").html("Thông tin sai!!");
          return false;
      }
      $("#tt").html("");
         var ho, ten, ngaysinh, email;
         ho=$("#ho").val();
         ten=$("#ten").val();
         ns= new Date($("#ns").val());
         email=$("#mail").val();
         var tdnew="<tr><td>"+ho+" "+ten+"</td></tr><tr><td>"+ns.getDate()+"/"+ns.getMonth()+"/"+ns.getFullYear()+"</td></tr><tr><td>"+email+"</td></tr>";
         $("#tb").append(tdnew);
     
     })
})


