// ==UserScript==
// @name         better youtube
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://www.youtube.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    console.log("beep");
    fuck();
    // Your code here...



    async function fuck()
    {
        console.log("beep1");
        setTimeout(() =>
            {
            console.log("beep2");
                let fuckyoutube = document.getElementById("columns");
                if (!fuckyoutube) return
                let play = document.getElementById("player-container-outer");
                if (play.offsetWidth / fuckyoutube.offsetWidth < 0.92)
                {
                    console.log('small');
                    play.style.width = '60%';
                }
                fuckyoutube.style.width = '80%';
                let secs2 = document.getElementsByTagName('ytd-watch-next-secondary-results-renderer')[0];
                secs2.style.width = '100%';
                setInterval(() =>
                    {

                        let vid = document.getElementsByClassName('video-stream html5-main-video')[0];
                        if (vid.style.width == '100%' && vid.style.height == 'auto') clearInterval();
                        vid.style.width = '100%';
                        vid.style.height = 'auto';
                    }, 500);
               //let sea = document.getElementById('center')
               //sea.style.position = 'relative';
               //sea.style.left = '-15%';
               setInterval(() =>
                    {

                        let l = document.getElementsByClassName('ytp-chrome-bottom')[0]
                        if (l.style.width == '98%') clearInterval();
                        l.style.width = '98%'
                    }, 500);

            setInterval(() =>
                    {

                        let ll = document.getElementsByClassName('ytp-chapter-hover-container')
                        var tot = document.getElementsByClassName('ytp-chrome-bottom')[0].offsetWidth
                        var oldtot = 0;
                        for (var i = 0; i < ll.length; i++)
                        {

                            let wid = ll[i].style.width;
                            if (!wid.includes('px')) continue;
                            wid = wid.substring(0, wid.length - 2);
                            oldtot = oldtot + Math.floor(wid);


                        }
                        oldtot *= 1.02
                        for (var ii = 0; ii < ll.length; ii++)
                        {

                            let wid = ll[ii].style.width;
                            if (!wid.includes('px')) continue;
                            wid = wid.substring(0, wid.length - 2);

                            
                            ll[ii].style.width = (wid / oldtot) * 100 + "%";
                        }
                    }, 500);



            }, 2000);

    }
})();

