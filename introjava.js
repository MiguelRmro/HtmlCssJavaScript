function presentarData()
{
  var vnombrePersona=document.getElementById("nombre").value;

  if (vnombrePersona === '')
  {
    document.getElementById("resultado").innerHTML="No digitaste tu nombre <br>";
  }
  else
  {
    document.getElementById("resultado").innerHTML=vnombrePersona + '<br>';
  }

  var vseleccionado = false;
  var vdeporte = document.getElementById('deporte1').checked;
  if (vdeporte === true)
  {
    document.getElementById("resultado").innerHTML+="Te gusta el Basketball <br>";
    vseleccionado = true;
  }

  vdeporte = document.getElementById('deporte2').checked;
  if (vdeporte === true)
  {
    document.getElementById("resultado").innerHTML+="Te gusta el Football<br>";
    vseleccionado = true;
  }

  vdeporte = document.getElementById('deporte3').checked;
  if (vdeporte === true)
  {
    document.getElementById("resultado").innerHTML+="Te gusta el Tenis<br>";
    vseleccionado = true;
  }

  if (vseleccionado === false)
  {
    document.getElementById("resultado").innerHTML+="No te gusta ninguno de estos deportes.<br>";
  }
  
 
  
}
