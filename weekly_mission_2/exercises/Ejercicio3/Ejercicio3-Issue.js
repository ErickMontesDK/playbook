class Issue{
    constructor(title,repositoryNameAssociated,numberOfComments,labels,author,dateCreated){
        this.title=title
        this.repositoryNameAssociated=repositoryNameAssociated
        this.status="On"
        this.numberOfComments=numberOfComments
        this.label=labels
        this.author=author
        this.dateCreated=dateCreated
        this.lastUpdated=Date()
    }

    get getTitleAndAuthor(){
        return `The issue ${this.title} was made by ${this.author}`
    }

    get getGeneralInfo(){
        return `It's associated to the repository ${this.repositoryNameAssociated}, created at ${this.dateCreated}`
    }
}

const ReportIssue=new Issue("Bug in exercise 3","Weekly_mission_2","15","8","ErickMontesDK","11/04/2022")
console.log(ReportIssue)
console.log(ReportIssue.getTitleAndAuthor)
console.log(ReportIssue.getGeneralInfo)