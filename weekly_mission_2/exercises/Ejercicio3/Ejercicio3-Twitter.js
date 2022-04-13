class TwitterUser{
    constructor(name,username,bio,birthday,location,userCreate,hashtags,usersFollowed,trending_topic){
        
        this.name=name,
        this.username=username,
        this.bio=bio,
        this.birthday=birthday,
        this.location=location,
        this.userCreate=userCreate,
        
        this.hashtags=hashtags,
        this.usersFollowed=usersFollowed
        this.trending_topic=trending_topic
    }
    
    get getName(){
        return `Usuario ${this.username} con nombre ${this.name}`
    }

    get getUserData(){
        return `Cuenta creada el ${this.userCreate}, con localización en ${this.location}`
    }

    get getTrendings(){
        return `Al usuario ${this.username} le aparece los siguientes trendings: "${this.trending_topic}"`
    }
}

const ReportTwitter= new TwitterUser("Eirikr","@ErickDKnight","meh","4/Septiembre/1995","Michoacán,México","mayo/2013",["#MaxKAiserEnSCMx","#LISA","#TeamLlevatelo","MedallaExa","#Patrias"],["@Charlielynnmx", "@incorrectos_mx","@eldollop","@elECpodcast","@TomKingTK","@pasquinmx"],["EVERLASTING MEDALIST","Slipknot","Kyrie","Shanks","Informe"])
console.log(ReportTwitter)
console.log(ReportTwitter.getName)
console.log(ReportTwitter.getTrendings)