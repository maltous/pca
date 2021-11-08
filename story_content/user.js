function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6qxxdJEH0Hr":
        Script1();
        break;
      case "6Tf0GlDWVJ7":
        Script2();
        break;
      case "5kO8KsDvjph":
        Script3();
        break;
      case "5rGwfymqaYG":
        Script4();
        break;
      case "6Anh51WdVBv":
        Script5();
        break;
      case "6M4VWvY9Syz":
        Script6();
        break;
      case "5Yt4cdmFa7Y":
        Script7();
        break;
      case "6GhbnY00S8R":
        Script8();
        break;
      case "6opYyGHfQmt":
        Script9();
        break;
  }
}

function Script1()
{
  $("#tab-customlink").hide();
}

function Script2()
{
  $("#tab-customlink").hide();
}

function Script3()
{
  var player = GetPlayer();
var email="nsdd_cne@ksmc.med.sa";
var subject=player.GetVar("Name");
var body_start="Dear Instructor,";
var mailto_link='mailto:'+email+'?subject='+subject+'&body='+body_start;
win=window.open(mailto_link,'emailWin');
}

function Script4()
{
  $("#tab-customlink").hide();
}

function Script5()
{
  $("#tab-customlink").hide();
}

function Script6()
{
  $("#tab-customlink").hide();
}

function Script7()
{
  var currentTime = new Date()
var month = currentTime.getMonth() + 1
var day = currentTime.getDate()
var year = currentTime.getFullYear()
var dateString=month + "/" + day + "/" + year

var player = GetPlayer();
player.SetVar("SystemDate",dateString);
}

function Script8()
{
  $("#tab-customlink").show();
}

function Script9()
{
  window.print();
}

