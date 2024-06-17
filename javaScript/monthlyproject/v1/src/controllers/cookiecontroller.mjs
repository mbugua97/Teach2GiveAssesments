const UserData=[
    {id:1,username:"mbugua",displayName:"JB"},
    {id:2,username:"mbugua",displayName:"JB"},
    {id:3,username:"mbugua",displayName:"JB"},
    {id:4,username:"mbugua",displayName:"JB"},
    {id:5,username:"mbugua",displayName:"JB"},
    {id:6,username:"mbugua",displayName:"JB"},
]





export const createcookie=(req, res) => {
    const {id}=req.params
   res.cookie("user","value"),{httpOnly:false}
   res.send('d')
}
