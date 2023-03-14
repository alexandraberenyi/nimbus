    
weatherWidget();

function weatherWidget(){    
    let zip = new JSZip();
    let zip2 = new JSZip();
    const code = 44505,
        code2 = 44527;

    let url= 'http://terkeptar.elte.hu/~saman/get.php?url=https://odp.met.hu/climate/observations_hungary/10_minutes/now/HABP_10M_'+code+'_now.zip';    
    let url2= 'http://terkeptar.elte.hu/~saman/get.php?url=https://odp.met.hu/climate/observations_hungary/hourly/now/HABP_1H_'+code2+'_now.zip';    

    fetch(url)
    .then(r=>r.arrayBuffer())
        .then(d=>zip.loadAsync(d))
            .then(z=>z.file(/./)[0].async("text"))
                .then(d=>{
                    let sorok=d.split('\n'); 
                
                    let ta = document.getElementById("ta");
                    let tas = document.createTextNode(sorok[sorok.length-2].split(";")[4]+" °C");
                    ta.textContent = '';
                    ta.appendChild(tas);

                    let fs = document.getElementById("fs");
                    let fas = document.createTextNode(sorok[sorok.length-2].split(";")[24]+" m/s");
                    fs.textContent = '';
                    fs.appendChild(fas);

                    let fsd = document.getElementById("fsd");
                    let fsds = document.createTextNode(sorok[sorok.length-2].split(";")[26]+" °");
                    fsd.textContent = '';
                    fsd.appendChild(fsds);

                    let fx = document.getElementById("fx");
                    let fxs = document.createTextNode(sorok[sorok.length-2].split(";")[28]+" m/s");
                    fx.textContent = '';
                    fx.appendChild(fxs);

                    let p = document.getElementById("p");
                    let ps = document.createTextNode(sorok[sorok.length-2].split(";")[14]+" hPa");
                    p.textContent = '';
                    p.appendChild(ps);  

                    //sunset times
                    let sr = document.getElementById("sunrise");
                    let ss = document.getElementById("sunset");
                    // get today's sunlight times for station
                    let times = SunCalc.getTimes(new Date(), 47.4747, 19.0619);
                    // format sunrise time from the Date object
                    let sunriseStr = times.sunrise.getHours() + ':' + times.sunrise.getMinutes();
                    let sunsetStr  = times.sunset.getHours() + ':' + times.sunset.getMinutes();

                    let textrise = document.createTextNode(sunriseStr);
                    let textset = document.createTextNode(sunsetStr);
                    sr.textContent = '';
                    ss.textContent = '';
                    sr.appendChild(textrise);
                    ss.appendChild(textset);

                });

    fetch(url2)
    .then(r=>r.arrayBuffer())
    .then(d=>zip2.loadAsync(d))
    .then(z=>z.file(/./)[0].async("text"))
        .then(d=>{
                let sorok=d.split('\n');
                for (let i=7;i<sorok.length;i++) {
                    let adatok=sorok[i].split(';');
                    for (let j in adatok) {
                        adatok[j]=adatok[j].trim()}
                    if (adatok.length<2) continue; 
                    let a = new Text (adatok[1]);
                    console.log(adatok[1])
                    let ido = a.substringData(0,4)+ ". " + a.substringData(4,2)+ ". " + a.substringData(6,2)+ ". " + a.substringData(8,2)+":"+a.substringData(10,2)+' UTC'; 
                    document.getElementById("dataSource").textContent = "Utolsó mérés időpontja: " + ido
                };
                let jelenido = sorok[sorok.length-2].split(";")[34];
                let jelenimg = document.getElementById("jelenimg"); 
                if (jelenido == 1)  {
                    document.getElementById("jelenido").textContent = " derült";
                    //jelenido.classList.remove("wi-day-sunny");
                    jelenimg.classList.add("wi-day-sunny");
                    document.getElementById("widgetImageId").style.backgroundImage = "url(media/main_jelen/derult.jpeg)"
                    document.getElementById("imageSource").textContent = " Kép forrása: Varga Ákos";
                }else if (jelenido == 2) {
                    document.getElementById("jelenido").textContent = " kissé felhős";
                    jelenimg.classList.remove("wi-day-sunny");
                    jelenimg.classList.add("wi-day-sunny-overcast");
                    document.getElementById("widgetImageId").style.backgroundImage = "url(media/main_jelen/kissefelhos.JPG)"
                    document.getElementById("imageSource").textContent = " Kép forrása: Henzel Dániel";
                }else if (jelenido == 3) {
                    document.getElementById("jelenido").textContent =  " közepesen felhős";
                    jelenimg.classList.remove("wi-day-sunny");
                    jelenimg.classList.add("wi-day-cloudy");
                    document.getElementById("widgetImageId").style.backgroundImage = "url(media/main_jelen/kozepesenfelhos.JPG)"
                    document.getElementById("imageSource").textContent = " Kép forrása: Henzel Dániel";
                }else if (jelenido == 4) {
                    document.getElementById("jelenido").textContent = " erősen felhős";
                    jelenimg.classList.remove("wi-day-sunny");
                    jelenimg.classList.add("wi-cloud");
                    document.getElementById("widgetImageId").style.backgroundImage = "url(media/main_jelen/erosenfelhos.jpg)"
                    document.getElementById("imageSource").textContent = " Kép forrása: Henzel Dániel";
                }else if (jelenido == 5) {
                    document.getElementById("jelenido").textContent = " borult";
                    jelenimg.classList.add("wi-cloudy");
                    document.getElementById("widgetImageId").style.backgroundImage = "url(media/main_jelen/borult.JPG)"
                    document.getElementById("imageSource").textContent = " Kép forrása: Varga Ákos";
                }else if (jelenido == 6) {
                    document.getElementById("jelenido").textContent = " fátyolfelhős";
                    jelenimg.classList.remove("wi-day-sunny");
                    jelenimg.classList.add("wi-day-light-wind");
                    document.getElementById("widgetImageId").style.backgroundImage = "url(media/main_jelen/fatyolfelhos.jpg)"
                    document.getElementById("imageSource").textContent = " Kép forrása: Henzel Dániel";
                }else if (jelenido == 7) {
                    document.getElementById("jelenido").textContent = " ködös";
                    jelenimg.classList.remove("wi-day-sunny");
                    jelenimg.classList.add("wi-fog");
                    document.getElementById("widgetImageId").style.backgroundImage = "url(media/main_jelen/kodos.JPG)"
                    document.getElementById("imageSource").textContent = " Kép forrása: Varga Ákos";
                }else if (jelenido == 9) {
                    document.getElementById("jelenido").textContent = " derült, párás";
                    jelenimg.classList.remove("wi-day-sunny");
                    jelenimg.classList.add("wi-day-haze");
                    document.getElementById("widgetImageId").style.backgroundImage = "url(media/main_jelen/parassag.jpg)"
                    document.getElementById("imageSource").textContent = " Kép forrása: Hérincs Dávid";
                }else if (jelenido == 10) {
                    document.getElementById("jelenido").textContent = " közepesen felhős, párás";
                    jelenimg.classList.remove("wi-day-sunny");
                    jelenimg.classList.add("wi-day-fog");
                    document.getElementById("widgetImageId").style.backgroundImage = "url(media/main_jelen/paras2.JPG)"
                    document.getElementById("imageSource").textContent = " Kép forrása: Henzel Dániel";
                }else if (jelenido == 11) {
                    document.getElementById("jelenido").textContent = " borult, párás";
                    jelenimg.classList.remove("wi-day-sunny");
                    jelenimg.classList.add("wi-cloudy-windy");
                    document.getElementById("widgetImageId").style.backgroundImage = "url(media/main_jelen/paras2.JPG)"
                    document.getElementById("imageSource").textContent = " Kép forrása: Henzel Dániel";
                }else if (jelenido == 12) {
                    document.getElementById("jelenido").textContent = " erősen fátyolfelhős";
                    jelenimg.classList.remove("wi-day-sunny");
                    jelenimg.classList.add("wi-windy");
                    document.getElementById("widgetImageId").style.backgroundImage = "url(media/main_jelen/erosenfatyolfelhos.jpg)"
                    document.getElementById("imageSource").textContent = " Kép forrása: Henzel Dániel";
                }else if (jelenido == 101) {
                    document.getElementById("jelenido").textContent = " szitálás";
                    jelenimg.classList.remove("wi-day-sunny");
                    jelenimg.classList.add("wi-day-sleet");
                    document.getElementById("widgetImageId").style.backgroundImage = "url(media/main_jelen/esos.jpg)"
                    document.getElementById("imageSource").textContent = " Kép forrása: Henzel Dániel";
                }else if (jelenido == 102) {
                    document.getElementById("jelenido").textContent = " eső";
                    jelenimg.classList.remove("wi-day-sunny");
                    jelenimg.classList.add("wi-day-rain");
                    document.getElementById("widgetImageId").style.backgroundImage = "url(media/main_jelen/esos.jpg)"
                    document.getElementById("imageSource").textContent = " Kép forrása: Henzel Dániel";
                }else if (jelenido == 103) {
                    document.getElementById("jelenido").textContent = " zápor",
                    jelenimg.classList.remove("wi-day-sunny");
                    jelenimg.classList.add("wi-day-showers");
                    document.getElementById("widgetImageId").style.backgroundImage = "url(media/main_jelen/zapor.jpg)"
                    document.getElementById("imageSource").textContent = " Kép forrása: Varga Ákos";
                }else if (jelenido == 104) {
                    document.getElementById("jelenido").textContent = " zivatar esővel";
                    jelenimg.classList.remove("wi-day-sunny");
                    jelenimg.classList.add("wi-day-thunderstorm");
                    document.getElementById("widgetImageId").style.backgroundImage = "url(media/main_jelen/zivatar.jpg)"
                    document.getElementById("imageSource").textContent = " Kép forrása: Hérincs Dávid";
                }else if (jelenido == 105) {
                    document.getElementById("jelenido").textContent = " ónos szitálás";
                    jelenimg.classList.remove("wi-day-sunny");
                    jelenimg.classList.add("wi-day-sleet");
                    document.getElementById("widgetImageId").style.backgroundImage = "url(media/main_jelen/esos.jpg)"
                    document.getElementById("imageSource").textContent = " Kép forrása: Henzel Dániel";
                }else if (jelenido == 106) {
                    document.getElementById("jelenido").textContent = " ónos eső";
                    jelenimg.classList.remove("wi-day-sunny");
                    jelenimg.classList.add("wi-day-sprinkle");
                    document.getElementById("widgetImageId").style.backgroundImage = "url(media/main_jelen/esos.jpg)"
                    document.getElementById("imageSource").textContent = " Kép forrása: Henzel Dániel";
                }else if (jelenido == 107) {
                    document.getElementById("jelenido").textContent = " hószállingózás";
                    jelenimg.classList.remove("wi-day-sunny");
                    jelenimg.classList.add("wi-day-snow");
                    document.getElementById("widgetImageId").style.backgroundImage = "url(media/main_jelen/havas.jpg)"
                    document.getElementById("imageSource").textContent = " Kép forrása: Hérincs Dávid";
                }else if (jelenido == 108) {
                    document.getElementById("jelenido").textContent =" havazás";
                    jelenimg.classList.remove("wi-day-sunny");
                    jelenimg.classList.add("wi-snow");
                    document.getElementById("widgetImageId").style.backgroundImage = "url(media/main_jelen/havas.jpg)"
                    document.getElementById("imageSource").textContent = " Kép forrása: Hérincs Dávid";
                }else if (jelenido == 109) {
                    document.getElementById("jelenido").textContent =" hózápor";
                    jelenimg.classList.remove("wi-day-sunny");
                    jelenimg.classList.add("wi-snow-wind");
                    document.getElementById("widgetImageId").style.backgroundImage = "url(media/main_jelen/havas.jpg)"
                    document.getElementById("imageSource").textContent = " Kép forrása: Hérincs Dávid";
                }else if (jelenido == 110) {
                    document.getElementById("jelenido").textContent = " havaseső";
                    jelenimg.classList.remove("wi-day-sunny");
                    jelenimg.classList.add("wi-rain-mix");
                    document.getElementById("widgetImageId").style.backgroundImage = "url(media/main_jelen/havas.jpg)"
                    document.getElementById("imageSource").textContent = " Kép forrása: Hérincs Dávid";
                }else if (jelenido == 112) {
                    document.getElementById("jelenido").textContent =" hózivatar";
                    jelenimg.classList.remove("wi-day-sunny");
                    jelenimg.classList.add("wi-storm-showers");
                    document.getElementById("widgetImageId").style.backgroundImage = "url(media/main_jelen/havas.jpg)"
                    document.getElementById("imageSource").textContent = " Kép forrása: Hérincs Dávid";
                }else if (jelenido == 202) {
                    document.getElementById("jelenido").textContent =" erős eső";
                    jelenimg.classList.remove("wi-day-sunny");
                    jelenimg.classList.add("wi-rain");
                    document.getElementById("widgetImageId").style.backgroundImage = "url(media/main_jelen/eroseso.JPG)"
                    document.getElementById("imageSource").textContent = " Kép forrása: Henzel Dániel";
                }else if (jelenido == 203) {
                    document.getElementById("jelenido").textContent =" erős zápor";
                    jelenimg.classList.remove("wi-day-sunny");
                    jelenimg.classList.add("wi-rain-wind");
                    document.getElementById("widgetImageId").style.backgroundImage = "url(media/main_jelen/eroseso.JPG)"
                    document.getElementById("imageSource").textContent = " Kép forrása: Henzel Dániel";
                }else if (jelenido == 208) {
                    document.getElementById("jelenido").textContent =" erős havazás";
                    jelenimg.classList.remove("wi-day-sunny");
                    jelenimg.classList.add("wi-snow-wind");
                    document.getElementById("widgetImageId").style.backgroundImage = "url(media/main_jelen/havas.jpg)"
                    document.getElementById("imageSource").textContent = " Kép forrása: Hérincs Dávid";
                }else if (jelenido == 209) {
                    document.getElementById("jelenido").textContent = " erős hózápor";
                    jelenimg.classList.remove("wi-day-sunny");
                    jelenimg.classList.add("wi-snow-wind");
                    document.getElementById("widgetImageId").style.backgroundImage = "url(media/main_jelen/havas.jpg)"
                    document.getElementById("imageSource").textContent = " Kép forrása: Hérincs Dávid";
                }else if (jelenido == 304) {
                    document.getElementById("jelenido").textContent =" zivatar záporral";
                    jelenimg.classList.remove("wi-day-sunny");
                    jelenimg.classList.add("wi-storm-showers");
                    document.getElementById("widgetImageId").style.backgroundImage = "url(media/main_jelen/zivatar.jpg)"
                    document.getElementById("imageSource").textContent = " Kép forrása: Hérincs Dávid";
                }else if (jelenido == 310) {
                    document.getElementById("jelenido").textContent =" havaeső zápor";
                    jelenimg.classList.remove("wi-day-sunny");
                    jelenimg.classList.add("wi-rain-mix");
                    document.getElementById("widgetImageId").style.backgroundImage = "url(media/main_jelen/havas.jpg)"
                    document.getElementById("imageSource").textContent = " Kép forrása: Hérincs Dávid";
                }else if (jelenido == 500) {
                    document.getElementById("jelenido").textContent =" hófúvás";
                    jelenimg.classList.remove("wi-day-sunny");
                    jelenimg.classList.add("wi-sandstorm");
                    document.getElementById("widgetImageId").style.backgroundImage = "url(media/main_jelen/havas.jpg)"
                    document.getElementById("imageSource").textContent = " Kép forrása: Hérincs Dávid";
                }else if (jelenido == 600) {
                    document.getElementById("jelenido").textContent =" jégeső";
                    jelenimg.classList.remove("wi-day-sunny");
                    jelenimg.classList.add("wi-hail");
                    document.getElementById("widgetImageId").style.backgroundImage = "url(media/main_jelen/eroseso.JPG)"
                    document.getElementById("imageSource").textContent = " Kép forrása: Henzel Dániel";
                }else if (jelenido == 601) {
                    document.getElementById("jelenido").textContent = " dörgés";
                    jelenimg.classList.remove("wi-day-sunny");
                    jelenimg.classList.add ("wi-lightning");
                    document.getElementById("widgetImageId").style.backgroundImage = "url(media/main_jelen/zivatar.jpg)"
                    document.getElementById("imageSource").textContent = " Kép forrása: Hérincs Dávid";
                }else {
                    document.getElementById("jelenID").style.display = "none";
                    document.getElementById("weatherData").style.marginTop = "20px";
                    //document.getElementById("jelenido").textContent = " NO DATA";
                    jelenimg.classList.remove("wi-day-sunny");
                    jelenimg.classList.add("wi-na");
                }
            });


    // ----------------------------------- Mooon ----------------------------------------------------------------------

    //Moon %
    function moonphase( date ) {
        date.setTime( date.getTime() + date.getTimezoneOffset() * 60000 );
    let  bluemoon = new Date( 96, 1, 3, 16, 15, 0 ),
            lunarperiod = 29 * ( 24 * 3600 * 1000 ) + 12 * ( 3600 * 1000 ) + 44.05 * ( 60 * 1000 ),
            phasetime = ( date.getTime() - bluemoon.getTime() ) % lunarperiod,
            fraction = phasetime / lunarperiod,
            percent = Math.round( 200 * fraction ) % 100;
        return(percent);
        
    };

    //Moon picture
    const getJulianDate = (date = new Date()) => {
        const time = date.getTime();
        const tzoffset = date.getTimezoneOffset()
        return (time / 86400000) - (tzoffset / 1440) + 2440587.5;
    };

    const LUNAR_MONTH = 29.530588853;
    const getLunarAge = (date = new Date()) => {
        const percent = getLunarAgePercent(date);
        const age = percent * LUNAR_MONTH;
        return age;
    };
    const getLunarAgePercent = (date = new Date()) => {
        return normalize((getJulianDate(date) - 2451550.1) / LUNAR_MONTH);
    };
    const normalize = value => {
        value = value - Math.floor(value);
        if (value < 0)
        value = value + 1
        return value;
    } ; 

    let age = getLunarAge(new Date());
    let moon = document.getElementById("moon");
    let calc = document.createTextNode(moonphase(new Date())+"%");
    moon.appendChild(calc);

    let moonimg = document.getElementById("moonimg");
    if (age < 1.84566) {
        //New
        moonimg.classList.remove("wi-day-sunny");
        moonimg.classList.add("wi-moon-new");
    } else if (age <5.53699 ) {
        //Waxing Crescent
        moonimg.classList.remove("wi-day-sunny");
        moonimg.classList.add("wi-moon-waxing-crescent-3"); 
    } else if (age< 9.22831   ) {
        //First Quarter
        moonimg.classList.remove("wi-day-sunny");
        moonimg.classList.add("wi-moon-first-quarter");
    } else if (age < 12.91963  ) {
        //Waxing Gibbous
        moonimg.classList.remove("wi-day-sunny");
        moonimg.classList.add("wi-moon-waxing-gibbous-3");
    } else if (age < 16.61096  ) {
        //Full
        moonimg.classList.remove("wi-day-sunny");
        moonimg.classList.add("wi-moon-full");
    } else if (age < 20.30228  ) {
        //Waning Gibbous
        moonimg.classList.remove("wi-day-sunny");
        moonimg.classList.add("wi-moon-waning-gibbous-3"); 
    } else if (age < 23.99361  ) {
        //Last Quarter
        moonimg.classList.remove("wi-day-sunny");
        moonimg.classList.add("wi-moon-third-quarter"); 
    } else if (age < 27.68493  ) {
        //Waning Crescent
        moonimg.classList.remove("wi-day-sunny");
        moonimg.classList.add("wi-moon-waning-crescent-3");
    } else {
        //New
        moonimg.classList.remove("wi-day-sunny");
        moonimg.classList.add("wi-moon-new");
    };
};
