// why aint this shit updating
   async function fuck()
    {
        console.log("beep1");
        setTimeout(() =>
            {
            console.log("beep2");
                let fuckyoutube = document.getElementById("columns");
                if (!fuckyoutube) return

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

                        let ll = document.getElementsByClassName('ytp-chapter-hover-container ytp-exp-chapter-hover-container')
                        var tot = document.getElementsByClassName('ytp-chrome-bottom')[0].offsetWidth


                        for (var ii = 0; ii < ll.length; ii++)
                        {

                            let wid = ll[ii].style.width;
                            if (!wid.includes('px')) continue;
                            wid = wid.substring(0, wid.length - 2);
                            console.log(wid);
                            ll[ii].style.width = (wid / tot) * 100 + "%";
                        }
                    }, 500);



            }, 2000);

    }


