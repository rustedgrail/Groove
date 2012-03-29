$ ->
  $("#og_div").append("<ul>")
  $("#og_div").append("<li><input type=radio name=tweet value=Hello />Hello<br>")
  $("#og_div").append("<li><input type=radio name=tweet value=Hello />Hello<br>")
  $("#og_div").append("<li><input type=radio name=tweet value=Hello />Hello<br>")
  $("#og_div").append("<li><input type=radio name=tweet value=Hello />Hello<br>")
  $("#og_div").append("<li><input type=radio name=tweet value=Hello />Hello<br>")

  $("#og_div").append("</ul>")

  $("#submitForm").click ->
    document.cookie = "tweet=#{$('input[name=tweet]:checked').val()}; path=/"
    console.log $('input[name=tweet]:checked').val()
