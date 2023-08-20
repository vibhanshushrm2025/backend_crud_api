class errorHandlingClass extends Error{
    constructor(message,statusCode,success){
        super(message);
        this.statusCode=statusCode;
        this.success = success;
    }
}

export const errorHandle=async (err,req,res,next)=>{
    err.message = err.message||"Internal Server error";
    err.statusCode = err.statusCode||500;
    //err.success=err.success||true; // this line will automatically change the err.success to true
    return res.status(err.statusCode).json({
        success:err.success,
        message:err.message
    })
}
export default errorHandlingClass;