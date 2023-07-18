function PC(){
    var p2=document.getElementById('first').value;
    var a2=document.getElementById('second').value;
    
    
    if(p2=="" || p2==null || a2=="" || a2==null || p2<0 || a2<0){
        alert("Please Enter correct Data");
        return false;
    }
    
    
    var final_result=(p2/100)*a2

    //document.getElementById('result').innerHTML ="<br><center>The "+p2+"%"+" of "+a2+" is "+final_result.toFixed(2);
    document.getElementById('result').innerHTML="<br><center>The "+p2+"%"+" of "+a2+" is "+final_result.toFixed(2);
}   

