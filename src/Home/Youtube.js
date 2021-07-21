import React, {useEffect} from 'react';
import './Youtube.css';
import * as AiIcons from 'react-icons/ai';
import ReactPlayer from 'react-player';
import AOS from 'aos';

//https://youtu.be/_nBlN9yp9R8
//https://www.youtube.com/watch?v=_nBlN9yp9R8
export default function Youtube() {
  useEffect(() => {
    AOS.init({
      duration : 2000
    });
  }, []);
    return (
        <div className="socials">
            <div className="youtube">
            <div className="head" data-aos="fade-in" data-aos-once="true">
              <h1>Youtube Channel</h1>
              <p>Visit Our Channel <AiIcons.AiOutlineArrowRight/> <AiIcons.AiFillYoutube className="hp_you" onClick={()=> window.open("https://www.youtube.com/channel/UCPiCkG64oF7KKec7tEhquyw", "_blank")}/></p>
            </div>
            <div className="vid" data-aos="fade-in" data-aos-once="true">
              <ReactPlayer className="react-player"
                controls
                height= '60%'
                width='60%'
                margin-left='45%'
                url='https://www.youtube.com/watch?v=TFW0CMEWVqI&t=1238s' />
              </div>
            </div>
            <div class="fb-page" 
                data-href="https://www.facebook.com/saenitk/?ref=page_internal" 
                data-tabs="timeline" 
                data-width="300px" 
                data-height="500px"
                data-small-header="true" 
                data-adapt-container-width="true" 
                data-hide-cover="false" 
                data-show-facepile="true">
                  <blockquote cite="https://www.facebook.com/saenitk/?ref=page_internal" class="fb-xfbml-parse-ignore">
                    <a href="https://www.facebook.com/saenitk/?ref=page_internal">SAE NITK</a>
                  </blockquote>
            </div>
          </div>
    )
}
