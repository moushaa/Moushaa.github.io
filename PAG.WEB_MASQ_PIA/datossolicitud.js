function obtenerdatos()     
{         
    var nombre = document.getElementById('nombre').value;         
    var cadena="";         
    document.registro.nombreobtenido.value=nombre;      
if (document.getElementById('radio4').checked)     
{         var sexo="Femenino";         
document.registro.susexo.value=sexo;     
}          
if (document.getElementById('radio5').checked)     
{         
    var sexo="Masculino";         
    document.registro.susexo.value=sexo;     
}     
var dato=document.getElementById("tienda");      
var suc=dato.options[tienda.selectedIndex].value;     
document.registro.tusucursal.value=suc;     
} 