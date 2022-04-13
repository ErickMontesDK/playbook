class Request{
    constructor(title,branchName,repositoryNameAssociated){
        this.title=title
        this.branchName=branchName
        this.dateCreated=Date()
        this.status="On"
        this.repositoryNameAssociated=repositoryNameAssociated
    }
    get getStatus(){
        return `The PullRequest status is ${this.status}`
    }
    get getTitleAndAuthor(){
        return `Pull request "${this.title}" created by ErickMontesDK`
    }
}
const RequestReport=new Request ("Adding User Data","UserInfo","my_launchx_blog")
console.log(RequestReport)
console.log(RequestReport.getStatus)
console.log(RequestReport.getTitleAndAuthor)