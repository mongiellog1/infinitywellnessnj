import React from "react";

const Events = ({ width, height }) => (
  <div style={{ width: "20vw"}}>
    <div style={{ width: "20vw" }} id="fb-root"></div>
    {
      (function(d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s); js.id = id;
        js.src = 'https://connect.facebook.net/en_GB/sdk.js#xfbml=1&version=v3.1';
        fjs.parentNode.insertBefore(js, fjs);
      }(document, 'script', 'facebook-jssdk'))
    }
    <div className="fb-page" data-href="https://www.facebook.com/infinitywellnessNJ/" data-tabs="events" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true"><blockquote cite="https://www.facebook.com/infinitywellnessNJ/" className="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/infinitywellnessNJ/">Infinity Wellness</a></blockquote></div>
  </div>
);

export default Events;
