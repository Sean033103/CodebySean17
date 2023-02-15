<!DOCTYPE.html>
<html>
    <head 
<center>
      <input type="text" id="result"/>
      <br> <br>
 <button id="button1">Button 1</button>
 <button id="button2">Button 2</button>
</center>
    </head>

<body>
    <script>
    const button1 = document.querySelector('#button1');
    const button2 = document.querySelector('#button2');
    const result = document.querySelector('#result');
  button1.addEventListener('click', function() {
    result.value = 'Button 1 clicked!';
});

  button2.addEventListener('click', function() {
  result.value = 'Button 2 clicked!';
});
    </script>
  </body>
</html>
