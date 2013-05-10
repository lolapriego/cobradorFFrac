var total = "";

if(localStorage.debt_history){
  var jsonArray = localStorage.debt_history;
  for(var i = 0; i< jsonArray.length; i++ ){
    var object = jsonArray[i];
    total += "<div id=\"#single_debt\">
      <div id=\"#debtor\"><h3>Deudor</h3>
      " + object[contact] +
      "</div>
      <div id=\"#quantity\"><h3>Cantidad</h3>" + object[quantity] +
      "</div>
      <div id=\"#concept\"><h3>Concepto</h3>" + object[concept] +
      "</div></div>";
    }

  }

else{
  total = "No tienes deudas!";
}

$(".container").val(total);
