function habilitaWeb() 
{
  document.getElementById("campoUrl").disabled = false;
  document.getElementById("campoUrl").focus(); 
}

function inhabilitaWeb() 
{
  document.getElementById("campoUrl").disabled = true;
  document.getElementById("campoUrl").value=""; 
}

function enviar()
{
  alert("Se envia el formulario a tu web");
}

function validar()
{
  var varnombre=document.getElementById("campoNombre").value;
  document.getElementById("var_camponombre").innerHTML+=varnombre; 

  var varapellidos=document.getElementById("campoApellidos").value;
  document.getElementById("var_campoapellidos").innerHTML+=varapellidos; 

  var vardireccion=document.getElementById("campoDireccion").value;
  document.getElementById("var_campodireccion").innerHTML+=vardireccion; 

  var vartelefono=document.getElementById("campoTelefono").value;
  document.getElementById("var_campotelefono").innerHTML+=vartelefono; 

  var varemail=document.getElementById("campoEmail").value;
  document.getElementById("var_campoemail").innerHTML+=varemail; 

  var porNombre=document.getElementsByName("tienesweb");
  for(var i=0;i<porNombre.length;i++)
  {
      if(porNombre[i].checked)
          varweb=porNombre[i].value;
  }
  document.getElementById("var_campotieneweb").innerHTML+=varweb; 

  var varcampourl=document.getElementById("campoUrl").value;
  document.getElementById("var_campourl").innerHTML+=varcampourl; 

  var porEdad=document.getElementsByName("rangoedad");
  for(var j=0;j<porEdad.length;j++)
  {
      if(porEdad[j].checked)
          varrango=porEdad[j].value;
  }
  document.getElementById("var_camporangoedad").innerHTML+=varrango; 

   var varcamponacimiento=document.getElementById("fecnacimiento").value;
  document.getElementById("var_camponacimiento").innerHTML+=varcamponacimiento; 

  var porGenero=document.getElementsByName("genero");
  for(var k=0;k<porGenero.length;k++)
  {
      if(porGenero[k].checked)
          vargenero=porGenero[k].value;
  }
  document.getElementById("var_campogenero").innerHTML+=vargenero; 
  
document.getElementById("divisionResultado").style.display="block";

}

function limpiar_validar()
{
  document.getElementById("var_camponombre").innerHTML="Nombre :"; 
  document.getElementById("var_campoapellidos").innerHTML="Apellidos :"; 
  document.getElementById("var_campodireccion").innerHTML="Direccion :"; 
  document.getElementById("var_campotelefono").innerHTML="Telefono :"; 
  document.getElementById("var_campoemail").innerHTML="Email :"; 
  document.getElementById("var_campotieneweb").innerHTML="Tienes Web :"; 
  document.getElementById("var_campourl").innerHTML="Url :"; 
  document.getElementById("var_camporangoedad").innerHTML="Rango Edad :"; 
  document.getElementById("var_camponacimiento").innerHTML="Nacimiento :"; 
  document.getElementById("var_campogenero").innerHTML="Genero :";
  document.getElementById("divisionResultado").style.display="none";
}

