function calculo(){
//Numero fijo para el aguinaldo
  var n1 = 15;
  
  //Salario
  var monto = $("input[name=salario]").val();
  
    var peridiocidad = document.getElementById("peridiocidad");
    var value = peridiocidad.options[peridiocidad.selectedIndex].text;
    var timeStart = new Date(document.getElementById("timeStart").value);
    var timeEnd = new Date(document.getElementById("timeEnd").value);

    if(value == "Diario"){
        monto = monto *30;
    }else if(value == "Semanal"){
        monto = monto * 4;
    }else if(value =="Quincenal"){
        monto = monto *2;
    }else if(value == "Mensual"){
        monto = monto;
    }

    if (timeEnd > timeStart)
    {
        var diff = timeEnd.getTime() - timeStart.getTime();
        var dias = document.getElementById("dias").value = Math.round(diff / (1000 * 60 * 60 * 24));
    }
    else if (timeEnd != null && timeEnd < timeStart) {
        document.getElementById("daysDiscount").value = 0;
    } 

  //Calcular aguinaldo
  var n2 = (monto/30);
  var aguinaldo = ((n2 * n1) / 365) * dias;

  //Calcular prima vacacional
  
  if(dias >= 365){
     
    var vacaciones = 6;
    var prima = n2 * vacaciones * .25 ;
    
    $("input[name=total]").val(parseInt(aguinaldo));
    $("input[name=prima]").val(parseFloat(prima).toFixed(2));
    $("input[name=vacaciones]").val(parseInt(vacaciones));
    }else if(dias >= 730 && dias <= 1094){
        var vacaciones = 8;
        var prima = n2 * vacaciones * .25 ;
        
        $("input[name=total]").val(parseInt(aguinaldo));
        $("input[name=prima]").val(parseFloat(prima).toFixed(2));
        $("input[name=vacaciones]").val(parseInt(vacaciones));
    }else if(dias >= 1095 && dias <= 1459){
        var vacaciones = 10;
        var prima = n2 * vacaciones * .25 ;
        
        $("input[name=total]").val(parseInt(aguinaldo));
        $("input[name=prima]").val(parseFloat(prima).toFixed(2));
        $("input[name=vacaciones]").val(parseInt(vacaciones));
    }else if(dias >= 1460 && dias <= 1824){
        var vacaciones = 12;
        var prima = n2 * vacaciones * .25 ;
        
        $("input[name=total]").val(parseInt(aguinaldo));
        $("input[name=prima]").val(parseFloat(prima).toFixed(2));
        $("input[name=vacaciones]").val(parseInt(vacaciones));
    }else if(dias >= 1825 && dias <= 3285){
        var vacaciones = 14;
        var prima = n2 * vacaciones * .25 ;
        
        $("input[name=total]").val(parseInt(aguinaldo));
        $("input[name=prima]").val(parseFloat(prima).toFixed(2));
        $("input[name=vacaciones]").val(parseInt(vacaciones));
    }else if(dias >= 3650 && dias <= 5110){
        var vacaciones = 16;
        var prima = n2 * vacaciones * .25 ;
        
        $("input[name=total]").val(parseInt(aguinaldo));
        $("input[name=prima]").val(parseFloat(prima).toFixed(2));
        $("input[name=vacaciones]").val(parseInt(vacaciones));
    }else if(dias >= 5475 && dias <= 6935){
        var vacaciones = 18;
        var prima = n2 * vacaciones * .25 ;
        
        $("input[name=total]").val(parseInt(aguinaldo));
        $("input[name=prima]").val(parseFloat(prima).toFixed(2));
        $("input[name=vacaciones]").val(parseInt(vacaciones));
    }else if(dias >= 7300 && dias <= 8760 ){
        var vacaciones = 20;
        var prima = n2 * vacaciones * .25 ;
        
        $("input[name=total]").val(parseInt(aguinaldo));
        $("input[name=prima]").val(parseFloat(prima).toFixed(2));
        $("input[name=vacaciones]").val(parseInt(vacaciones));
    }



    if(dias >= 5475){
       anti = (n2 * 12) *15;
       $("input[name=antiguedad]").val(parseFloat(anti).toFixed(2));
    }
  //se carga el salarioo diario
  $("input[name=diario]").val(parseFloat(n2).toFixed(2));
  //se carga el total en el campo correspondiente
  $("input[name=total]").val(parseFloat(aguinaldo).toFixed(2));
   
}
