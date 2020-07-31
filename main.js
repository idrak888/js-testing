const setAttributes = player => {
    Object.keys(player).map(function(key, index) {
        var el = document.querySelector(`.${player.codeName} .${key}`);

        if (el) {
            if (key !== "img" && key !== "codeName") {
                document.querySelector(`.${player.codeName} .${key}`).innerHTML = `${key}: ${player[key]}`;
            } else if (key == "img") {
                document.querySelector(`.${player.codeName} .${key}`).setAttribute("src", player[key]);
            }
        }
    });
}

const runLoop = players => {
    for (let i=0;i<players.length;i++) {
        var player = players[i];
        setAttributes(player);
    }
}

const players = [
    {
        codeName: "profile-magnus",
        //name: "Sven Magnus Øen Carlsen", 
        //jk just uncomment this ^^ ;)
        name: "tui kala xD",
        //and remove this ^^
        img: "https://pbs.twimg.com/profile_images/785748929807781888/NViWqbkH.jpg",
        country: "Norway", 
        born: "30 November 1990", 
        fide_ranking: 2863, 
        ranking: 1
    },
    {   
        codeName: "profile-alexander",
        name: "Alexander Igorevich Grischuk",  
        img: "https://upload.wikimedia.org/wikipedia/commons/e/ed/Alexander_Grischuk_2013.jpg",
        country: "Russia", 
        born: "October 31, 1983 (age 36)", 
        fide_ranking: 2777, 
        ranking: 6
    },
    {
        codeName: "profile-ding",
        name: "Ding Liren",  
        img: "https://images.chesscomfiles.com/uploads/v1/master_player/00ffadde-d6a8-11e8-bdb9-933b839db343.31293b1e.5000x5000o.0d68bb2cfa86.jpeg",
        country: "China", 
        born: "24 October 1992 (age 27)", 
        fide_ranking: 2791, 
        ranking: 3
    },
    {
        codeName: "profile-fabiano",
        name: "Fabiano Luigi Caruana",  
        img: "https://lh3.googleusercontent.com/proxy/2YRngJpo4w6RclCLpFZIUTMhkVVGPtYxkS6cph0wirIp6yDAWQ8AmmBPyeNqSZZBsQ6vX3mfkhVlhbweZp7Kh1GQmuBMIMqs8QhY2lqK6oW0-hY8S_zzHng87qHMhGe4rE3X",
        country: "United States", 
        born: "July 30, 1992 (age 28)", 
        fide_ranking: 2835, 
        ranking: 2
    },
    {
        codeName: "profile-giri",
        name: "Anish Giri",  
        img: "https://lh3.googleusercontent.com/proxy/Ly_AltqAlJKYgDVEcN09LMOqe5gkUYWJbgV6rjx5OoOurxA5d7ac2i4tSDWdF8CVgY98Kkcx7CydehZsFIpqsW12fDCUWA",
        country: "Russia, Netherlands, Nepal, India, Japan (no kidding)", 
        born: "June 28, 1994 (age 26)", 
        fide_ranking: 2764, 
        ranking: 10
    },
    {
        codeName: "profile-ian",
        name: "Ian Nepomniachtchi",  
        img: "https://pbs.twimg.com/media/EAfSkr-WsAE69Jt.jpg",
        country: "Russia", 
        born: "14 July 1990 (age 30)", 
        fide_ranking: 2784, 
        ranking: 4
    },
    {
        codeName: "profile-levon",
        name: "Levon Grigori Aronian", 
        img: "https://armenpress.am/static/news/b/2015/12/829401.jpg", 
        country: "Armenia", 
        born: "6 October 1982 (age 37)", 
        fide_ranking: 2773, 
        ranking: 7
    },
    {
        codeName: "profile-maxime",
        name: "Maxime Vachier-Lagrave",  
        img: "https://upload.wikimedia.org/wikipedia/commons/6/63/Maxime_Vachier-Lagrave%2C_2016-07.jpg",
        country: "France", 
        born: "21 October 1990 (age 29)", 
        fide_ranking: 2778, 
        ranking: 5
    },
    {
        codeName: "profile-teimour",
        name: "Teimour Radjabov",  
        img: "https://lh3.googleusercontent.com/proxy/vW4iUpJ4-nCBcF_E8gmPBRgq_EoCwjbeWPwmR_FPZA-FLop0rBzbr-pimTUgfkPTZ7H4_XurZwRyD6tcp9SHq9LKEgKIK40YtjYWJNaAcgpNDUPcaxFb7yV8gw",
        country: "Azerbaijan", 
        born: "12 March 1987 (age 33)", 
        fide_ranking: 2765, 
        ranking: 9
    }, 
    {
        codeName: "profile-wesley",
        name: "Wesley So",  
        img: "https://contents.spin.ph/image/2017/07/10/wesley-so-ap.jpg",
        country: "Philippines, USA", 
        born: "October 9, 1993 (age 26)", 
        fide_ranking: 2770, 
        ranking: 8
    }
]

runLoop(players);