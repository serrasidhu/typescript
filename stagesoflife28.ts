let age_Num:number= 20 
if (age_Num<2) {
    console.log('the preson is baby');
} else if (age_Num ==2 && age_Num < 4) {
    console.log('the person is  toddle');
}
else if (age_Num == 4 &&  age_Num< 13){
    console.log('the person is kid');
}
else if (age_Num == 13 && age_Num < 20) {
    console.log('the person is a teenage');
    
} else if (age_Num ==20 && age_Num < 65){
    console.log('the person is adult');
    
}else {
    console.log('the person is an elder');
    
}
