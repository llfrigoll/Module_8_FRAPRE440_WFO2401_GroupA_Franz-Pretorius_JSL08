//Creates a variable to store the single instance of the class
let bankBranchInstance = null;

//Class definition
class bankBranch {
    //Constructor with branch information
    constructor(branchInfo) {
        //Checks if an instance exists
        if(!bankBranchInstance) {
            //If an instance does not exist it creates a new instance with corresponding information and sets the instance variable to this
            this.branchInfo = branchInfo
            bankBranchInstance = this
        }
        //Returns the bank branch instance
        return bankBranchInstance
    }

    //Returns the information of the branch
    getBranchInfo() {
        return this.branchInfo;
    }
}

//Creates 2 instances of the class, each with own arguments
const branchA = new bankBranch("Cresta Branch")
const branchB = new bankBranch("Fourways Branch")

//Displays both instances
console.log(branchA.branchInfo)
console.log(branchB.branchInfo)//Displays branch A information since there can only be one instance

//Checks wheter the 2 instances are the same
console.log(branchA === branchB)//It returns true since there can only be one instance

