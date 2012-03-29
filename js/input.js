
  $(function() {
    $("#og_div").append("<ul>");
    $("#og_div").append("<li><input type=radio name=tweet value=Hello />Hello<br>");
    $("#og_div").append("<li><input type=radio name=tweet value=World />World<br>");
    $("#og_div").append("<li><input type=radio name=tweet value=Goodbye />Goodbye<br>");
    $("#og_div").append("<li><input type=radio name=tweet value=Cruel />Cruel<br>");
    $("#og_div").append("<li><input type=radio name=tweet value=Cookies />Cookies<br>");
    $("#og_div").append("</ul>");
    return $("#submitForm").click(function(e) {
      e.preventDefault();
      document.cookie = "tweet=" + ($('input[name=tweet]:checked').val()) + "; path=/";
      return window.location.href = "response.html";
    });
  });
