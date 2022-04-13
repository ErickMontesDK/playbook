const TwitterUser={
    user:{
        name:"Eirikr",
        username:"@ErickDKnight",
        bio:"Meh",
        birthday:"4/Septiembre/1995",
        location:"Michoacán,México",
        userCreate:"mayo/2013",
    },
    hashtags:["#MaxKAiserEnSCMx","#LISA","#TeamLlevatelo","MedallaExa","#Patrias"],
    usersFollowed:["@Charlielynnmx", "@incorrectos_mx","@eldollop","@elECpodcast","@TomKingTK","@pasquinmx"],
    trending_topic:["EVERLASTING MEDALIST","Slipknot","Kyrie","Shanks","Informe"],

    get getName(){
        return `Usuario ${this.user.username} con nombre ${this.user.name}`
    },

    get getUserData(){
        return `Cuenta creada el ${this.user.userCreate}, con localización en ${this.user.location}`
    },
    get getTrendings(){
        return `Al usuario ${this.user.username} le aparece los siguientes trendings: "${this.trending_topic}"`
    }
}
console.log(TwitterUser)
console.log(TwitterUser.getName)
console.log(TwitterUser.getTrendings)