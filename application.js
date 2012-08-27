$(function(){

  var autoAnimateInterval = 11000, intervalId;

  $('.hero-nav a').click(function() {
    clearInterval(intervalId);
    animateSlider($(this).index());
    initHeroTimer();
    return false;
  });

  function animateSlider(index) {
    var newPos = (0 - (index + 1) * 980) + 980;
    $('.hero-slider').animate({marginLeft: newPos}, {queue: false, duration: 300});
    $('.hero-nav a').removeClass('hero-sel');
    $('.hero-nav a').eq(index).addClass('hero-sel');
  }

  function initHeroTimer() {
    clearInterval(intervalId);
    intervalId = setInterval(function() {
      var nextIndex = $('.hero-nav a.hero-sel').index() + 1;
      if(nextIndex >= $('.hero-nav a').length) nextIndex = 0;
      animateSlider(nextIndex);
    }, autoAnimateInterval);
  }

  initHeroTimer();

  $('#about').click(function() {
    $(this).hide();
    var about_me = "<br><h2>I sincerely like learning about and writing code. Whether it ";
    about_me += "is something as simple as a new method, new testing practice, ";
    about_me += "or a new tool. I'm incredibly self motivated and a passionate programmer.</h2>";
    about_me += "<br><h2>I have a deep technology knowledgebase including server application ";
    about_me += "setup and deployment, testing practices, and front and back-end programming. ";
    about_me += "I'm comfortable splitting my time equally between the front-end and the back-end. ";
    about_me += "I write Ruby and Cron(s) just as much as JavaScript and CSS. I have been a team ";
    about_me += "leader and individual contributor on projects for clients ranging from small ";
    about_me += "non-profits to Fortune 500 companies. I have worked with both small and large ";
    about_me += "teams, some of which have included world class designers.</h2>";
    about_me += "<br><h2>I have been recognized as a top subject matter expert with ";
    about_me += "<a href='https://www.adobe.com/devnet-archive/mobile/articles/sometimes_connected.html'>published articles</a> on ";
    about_me += "mobile and Web development. I've had previous work heralded best in class and ";
    about_me += "chosen from thousands of samples worldwide for executive demos at the both Intel's and Macromedia's developer conference keynote sessions.</h2>";
    about_me += "<br><h2>More recently my work has been mentioned on podcasts like ";
    about_me += "<a href='http://bit.ly/gYfBVA'>Ruby5</a> and <a href='http://bit.ly/8U4TFk'>The Changelog</a>.</h2>";
    about_me += "<br><h2>Feel free to contact me on the gmail: <a href='mailto:mkrisher@gmail.com'>mkrisher@gmail.com</a></h2>";

    $('.home-teaser').append(about_me);
    return false;
  });
});
