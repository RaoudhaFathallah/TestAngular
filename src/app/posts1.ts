export class Posts1 {
    post_date: string ;
    post_text: string ;
    post_comments: number ;

    constructor (  post_date: string , post_text: string,post_comments: string  ){
        
        this.post_date=post_date;
        this.post_text=post_text;
        this.post_comments=post_comments.length;
    }
  
}
