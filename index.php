<!DOCTYPE html>
<html>
    <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="css/style.css">
    <script src="main.js" defer></script>
    <title>Contact Us</title>
    </head>
    <body>
    <div class="loader_bg">
  <div class="loader"></div>
</div>

<div class="line">
  <hr>
</div>
    <header class="header">
        <div href="#">
            <img src="pic/Flash.png" alt="Pic" height="50px" width="50px" >
        </div>
      <div class="menu-btn">
        <div class="menu-btn__lines"></div>
      </div>
      <ul class="menu-items">
        <li><a href="index.html">Startseite</a></li>
        <li><a href="firma.html">Firma</a></li>
        <li><a href="produkte.html">Produkte</a></li>
        <li><a href="impressum.html">Impressum</a></li></li>
      </ul>
    </header>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
        <script>
          setTimeout(function(){
            $('.loader_bg').fadeToggle();
          }, 500);
        </script>
        <main>
        <section class="first-section">
            <div class="first-sec">
            <br>
            <br>
            <br>
            <br>
            <br>
            <div class="Contact login-wrapper">
            <form class="contact-form" action="contactform.php" method="post">
              <div class="input-group">
                <input type="text" name="name" placeholder="Full Name">
                </div>
                <div class="input-group">
                <input type="text" name="mail" placeholder="Your E-mail">
                </div>
                <div class="input-group">
                <input type="text" name="subject" placeholder="Subject">
                </div>
                <div class="input-group">
                <textarea name="message" placeholder="Message"></textarea>
                </div>
                <button type="submit" name="submit" id="buttonS">Send</button>
                </div>
                </div>
            </form>
          </section>
        </main>
    </body>
</html>