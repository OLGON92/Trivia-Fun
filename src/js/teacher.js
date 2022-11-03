export default class Teach {
    constructor(user, right) { 
        this.user = user;
        this.right = right;
    }
    moment()
    {
        console.log(this.user, this.right)
        let point = false;
        if(this.user === this.right)
        {
            point = true;
        }
    return point;
    }

}