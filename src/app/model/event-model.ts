export class EventModel{
    constructor(
        public id: number,
        public created: string,  // set by back end
        public userId: number,
        public fileUrl: string,
        public owner: string,
        public des?: string,
        public localImage?: File,


       /* title: String,
        whatToExpect: String,
        category:String,
        images:string=[],
        content: String,
        price:String,
        duration:String,
        noOfSessions:String,
        offer:string,
        termsConditions:String*/


    ) { }

}