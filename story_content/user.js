function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6UEmhglnC0L":
        Script1();
        break;
      case "6ITk6VaHWIO":
        Script2();
        break;
  }
}

function Script1()
{
  var currentDate = new Date()
var day = currentDate.getDate()
var month = currentDate.getMonth() + 1
var year = currentDate.getFullYear();
var player = GetPlayer();
var newName = month + "/" + day + "/" +year
player.SetVar("DateValue", newName);
}

function Script2()
{
  var player = GetPlayer();

var theName =(
player.GetVar("NameField")
)

var theDate =(
player.GetVar("DateValue")
)

var theScore =(
player.GetVar("correctcounter")
)

var theA1Q1 =(
player.GetVar("A1Q1")
)

var theA1Q1a =(
player.GetVar("A1Q1aText")
)

var theA1Q1b =(
player.GetVar("A1Q1bText")
)

var theA1Q1c =(
player.GetVar("A1Q1cText")
)

var theA1Q1d =(
player.GetVar("A1Q1dText")
)


var theA2Q2 =(
player.GetVar("A2Q2")
)

var theA2Q2a =(
player.GetVar("A2Q2aText")
)

var theA2Q2b =(
player.GetVar("A2Q2bText")
)

var theA2Q2c =(
player.GetVar("A2Q2cText")
)

var theA2Q2d =(
player.GetVar("A2Q2dText")
)


var theA3Q3 =(
player.GetVar("A3Q3")
)

var theA3Q3a =(
player.GetVar("A3Q3aText")
)

var theA3Q3b =(
player.GetVar("A3Q3bText")
)

var theA3Q3c =(
player.GetVar("A3Q3cText")
)

var theA3Q3d =(
player.GetVar("A3Q3dText")
)

var urlstring = ("printCertificate.html?print=" + theName + "&" + theDate + "&" + theScore + "&" + theA1Q1 + "&" + theA1Q1a + "&" + theA1Q1b + "&" + theA1Q1c + "&" + theA1Q1d + "&" + theA2Q2 + "&" + theA2Q2a + "&" + theA2Q2b + "&" + theA2Q2c + "&" + theA2Q2d +  "&" + theA3Q3 + "&" + theA3Q3a + "&" + theA3Q3b + "&" + theA3Q3c + "&" + theA3Q3d  );


window.open(urlstring,"_blank","width=800,height=600,menubar=no");
}

