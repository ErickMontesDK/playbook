const Issue={
    title:"Bug in exercise 3",
    repositoryNameAssociated:"Weekly_mission_2",
    status:"On",
    numberOfComments:"15",
    labels:"8",
    author:"ErickMontesDK",
    dateCreated: "11/04/2022",
    lastUpdated:Date(),

    get getTitleAndAuthor(){
        return `The issue ${this.title} was made by ${this.author}`
    },
    get getGeneralInfo(){
        return `It's associated to the repository ${this.repositoryNameAssociated}, created at ${this.dateCreated}`
    }


}
console.log(Issue)
console.log(Issue.getTitleAndAuthor)
console.log(Issue.getGeneralInfo)