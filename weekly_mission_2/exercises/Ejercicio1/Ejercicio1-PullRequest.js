const PullRequest={
    title:"Adding User Data",
    branchName:"UserInfo",
    dateCreated:Date(),
    status:"On",
    repositoryNameAssociated:"my_launchx_blog",
    
    get getStatus(){
        return `The PullRequest status is ${this.status}`
    },
    get getTitleAndAuthor(){
        return `Pull request "${this.title}" created by ErickMontesDK`
    }


}
console.log(PullRequest)
console.log(PullRequest.getStatus)
console.log(PullRequest.getTitleAndAuthor)