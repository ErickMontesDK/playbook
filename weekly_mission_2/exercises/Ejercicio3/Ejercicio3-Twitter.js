class TwitterUser{
    constructor(name,username,bio,birthday,location,userCreate,following,followers){
        
        this.name=name,
        this.username=username,
        this.bio=bio,
        this.birthday=birthday,
        this.location=location,
        this.userCreate=userCreate,
        this.following=following,
        this.followers=followers
    }
    
    get getName(){
        return `Usuario ${this.username} con nombre ${this.name}`
    }
    get getUserData(){
        return `Cuenta creada el ${this.userCreate}, con ${this.followers} followers, sigue a ${this.following} cuentas`
    }
}

class TweetData{
    constructor(Message,url,date,retweets,comments,likes){
        this.Message=Message,
        this.url=url,
        this.date=date,
        this.retweets=retweets,
        this.comments=comments,
        this.likes=likes
    }
    get tweetData(){
        return `Tweet:"${this.Message}" con \n ${this.retweets} retweets, ${this.comments} comentarios y ${this.likes} likes`
    }
}



const ReportUser= new TwitterUser("Eirikr","@ErickDKnight","meh","4/Septiembre/1995","Michoacán,México","mayo/2013",131,66);
const ReportTweet=new TweetData("20 min más tarde y no alcanzaba vacuna","https://twitter.com/ErickDKnight/status/1428553742580916224","10:05 p. m. · 19 ago. 2021",0,0,0);

console.log(ReportUser)
console.log(ReportTweet)
console.log(ReportUser.getName)
console.log(ReportTweet.tweetData)
console.log(ReportUser.getUserData)
