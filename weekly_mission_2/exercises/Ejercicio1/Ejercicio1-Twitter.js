const TwitterUser={
    //Perfil del usuario
    user:{
        name:"Eirikr",
        username:"@ErickDKnight",
        bio:"Meh",
        birthday:"4/Septiembre/1995",
        location:"Michoacán,México",
        userCreate:"mayo/2013",
        following:131,
        followers:66,
    },
    tweet:{
        Message:"20 min más tarde y no alcanzaba vacuna",
        url:"https://twitter.com/ErickDKnight/status/1428553742580916224",
        date:"10:05 p. m. · 19 ago. 2021",
        retweets:0,
        comments:0,
        likes:0,
    },

    get getName(){
        return `Usuario ${this.user.username} con nombre ${this.user.name}`
    },
    get tweetData(){
        return `Tweet:"${this.tweet.Message}" con \n ${this.tweet.retweets} retweets, ${this.tweet.comments} comentarios y ${this.tweet.likes} likes`
    },
    get getUserData(){
        return `Cuenta creada el ${this.user.userCreate}, con ${this.user.followers} followers, sigue a ${this.user.following} cuentas`
    },
} 
console.log(TwitterUser.tweetData);
console.log(TwitterUser.getName);
console.log(TwitterUser.getUserData);
