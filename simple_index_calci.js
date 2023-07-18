function SIC(){
    var p2=document.getElementById('amount').value;
    var r2=document.getElementById('rate').value;
    var t2=document.getElementById('time').value;

    
    if(p2=="" || p2==null || t2=="" || t2==null || r2=="" || r2==null || p2<0 || t2<0 || r2<0 || isNaN(p2) || isNaN(t2) || isNaN(r2)){
        alert("Please Enter correct Data");
        return false;
    }
    var p=parseFloat(p2);
    var r=parseFloat(r2);
    var t=parseFloat(t2);
    var it_res=p*t*r/100;
    var result=p+it_res;
    var final_result=result.toFixed(2);

    // document.getElementById('result').innerHTML = "Total Amount is "+final_result;

    
    document.getElementById('result').innerHTML ="The Interest is "+it_res.toFixed(2)+ "<br>Total Amount is "+final_result;
    
}   

