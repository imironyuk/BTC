<?php
session_start();

if(isset($_GET["theme"]))
{
    $theme = $_GET["theme"];
    
    SetCookie("имя куки","$theme",time()+(86400 * 30 * 12), "/; SameSite=None; Secure");(86400

    if($theme == "light" || $theme == "dark")
    {
        $_SESSION["theme"] = $theme;
    }
}
?>