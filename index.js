    //   h1 styling via jquery

$("h1").html("About <i>Gokul S</i>");
$("h1").css("font-size","4rem").css("text-align","center");
$("i").css("color","green");


    // click the btn to change the paragraph color via jquery

$("button").click(function()
{
    $("p").css("color","#FF008E");
});

            // adding class name  via jquery

$("h3").addclass("sub-title");

$("button").addclass("btn");
