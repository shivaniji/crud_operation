const knex = require('../database/db')



const insertdata=async (req,res)=>{
    try{
        const b=await knex('users').insert(req.body)
        console.log(b)
        res.send("fulscesss...")
    }catch(err){
        res.send({err})
        console.log(err)
    }
}



const getall = async (req, res) => {
    try {
        const a = await knex('users').select("*")

        res.send(a)

    } catch (err) {
        res.send({ err })
        console.log(err)
    }
}

const get_user_by_id = async (req, res) => {
    const id = req.params.id

    try {
        const a = await
            knex('users').select('*')
                .where('id', id)
        res.send(a)



    } catch (err) {
        res.send({ err })

    }

}
const update_user_by_id =async(req,res)=>{
    // const id = req.params._id
    const {id} = req.params;
    const changes = req.body;
  
  
    try {
      const count = await knex('users').where({id}).update(changes);
      if (count) {
        
        res.status(200).json({updated: count})
      } else {
        res.status(404).json({message: "Record not found"})
      }
    } catch (err) {
      res.status(500).json({message: "Error updating new post", error: err})
    }
}


// module.exports={insertdata}
// module.exports={getall}
module.exports = {insertdata, getall, get_user_by_id,update_user_by_id}


