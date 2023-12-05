export default class VldtMssg {
    //mssgRet is an array of strings wherein each string is a validation message to return and display in the form
    //mssgNdx is the index of the string in mssgRet to be returned
    constructor(mssgNdx, mssgRet){
        this.mssgNdx = mssgNdx
        this.mssgRet = mssgRet
    }

    //mssgPos is the index of the string in mssgRet that you want to return
    invalidField(mssgPos){
        this.mssgNdx = mssgPos
    }

    validField(){
        this.mssgNdx = -1
    }

    message(){
        return (this.mssgNdx >= 0) ? this.mssgRet[this.mssgNdx] : "Looks good"
    }

    isValid(){
        return (this.mssgNdx < 0) ? true : false
    }

} 