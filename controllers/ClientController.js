const {Client} = require('../models')


// Here we handle with our Client Model.
// Remember that our Clienti is a object that has properties function
// 

const createClient = (req,res) => {

    return Client.create(req.body).then((resDB)=>{

        return res.status(200).json({
            message: 'Client Created'

        }).catch((err)=>{

            res.status(400).json({message:err})
        })

    })

}


const deleteOneById = (req,res) => {

    const {idUser } = req.params;

    return Client.deleteOneById(idUser).then(()=>{
        return res.status(204).json().catch((err)=>{

            res.status(500).json({message: 'Server Error' ,err})
        })

    })


}