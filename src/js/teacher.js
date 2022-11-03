export default class Teach {
    constructor(user, right) { 
        this.user = user;
        this.right = right;
    }
    moment()
    {
        let point = false;
        let plea = parseInt(this.user.value.charAt(6));
        if(plea === this.right)
        {
            point = true;
        }
    return point;
    }

}