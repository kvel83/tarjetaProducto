const validaCantidad = () => {
    if (Number.isInteger(parseInt(document.querySelector('#cantidad').value)) && parseInt(document.querySelector('#cantidad').value) > 0)
        return true;
    else
        return false;
}
  const isValidColor = () =>{
    const color = document.querySelector('#color').value;
    var s = new Option().style;
    s.color = color;
    return s.color !== '';
  }

const calcularTotal = () => {
    const cantidad = document.querySelector('#cantidad').value;
    const precio = document.querySelector('#precio').innerHTML;
    const color = document.querySelector('#color').value;
    if (validaCantidad() === false){
        alert ("Debe ingresar en cantidad un número mayor que cero.");
        document.querySelector('#cantidad').value = '';
    }
    if (isValidColor() === false){
        alert ("Debe ingresar color válido.");
        document.querySelector('#color').value = '';
    }
    document.querySelector('#total').innerHTML = parseInt(precio) * parseInt(cantidad);
    document.querySelector('#unidades').innerHTML = cantidad;
    document.querySelector('#sel_color').style.backgroundColor = color;
    document.querySelector('#color').value = '';
    document.querySelector('#cantidad').value = '';
}
document.querySelector('#calcular').addEventListener('click', calcularTotal);
