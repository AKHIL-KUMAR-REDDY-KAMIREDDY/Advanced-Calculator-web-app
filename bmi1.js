var inf=0;
function BMI(){
    var h=document.getElementById('h').value;
    var w=document.getElementById('w').value;
    var bmi=w/(h/100*h/100);
    var bmio=(bmi.toFixed(2));
    let bmires;
    if(w=="" || w==null || h=="" || h==null || w<=0 || h<=0){
        alert("Please Enter correct Height and Weight");
        return false;
    }
    else if(bmio<18.5){
        bmires="You are in Underweight";
        inf=1
    }else if(18.5<=bmio && bmio<24.9) {
        bmires="You are in Normal";
        inf=2
    }else{
        bmires="You are in overweight";
        inf=3
    }
    document.getElementById('result').innerHTML = "Your BMI is "+bmio+" "+bmires+"<br><center>Solution";
}

function help(){
    var val=prompt("Enter your Height in feets");
    if(isNaN(val)){
        alert("Incorrect data");
    }else{
        var val2=(val*30.48).toFixed(2);
        val2="Your Height is "+val2+" cm";
        alert(val2);
    }
}
function suggetion(){
    if(inf==1){
        alert("Some Healthy Ways to gain weight When you are in Underweight:\n1.Eat more frequently.\n2.Choose nutrient-rich foods like vegetables,bread,pastas,fruits.\n3.Try smoothies and shakes.\n4.Don't drink anything at the timr of meal except water.\n5.Everyday do Exercise.");
    }
    else if(inf==2){
        alert("Some Healthy Ways to maintain Normal weight:\n1.Healthy Eating.\n2.Physical Activity.\n3.Optimal Sleep.\n4.Stress reduction.\n5.Everyday do Exercise.");
    }
    else if(inf==3){
        alert("Some Healthy Ways to loss weight When you are in Overweight:\n1.Healthy eating plan,Don't eat too much.\n2.Do Physical Activity.\n3.Changing your habits.\n4.Weight-Mangement programs.\n5.Everyday do Exercise.\n6.Weight-loss medicines.\n7.Weight-loss Devices\n8.Special Diets");
    }
}
