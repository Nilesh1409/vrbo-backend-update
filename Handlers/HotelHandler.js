const Hotels=require("../Database/Hotels");


async function searchHotel(req,res,next)
{
    const {city}=req.params;
    const data=await Hotels.find({city:{$regex:`^${city}`,$options:"$i"}});
    console.log('data',data,city)
    res.status(200).send({data:data});
}
const searchHotelById = async(req, res, next) => {
    const {id} = req.params;
    const data = await Hotels.findOne({id: id});
    res.status(200).send(data);
}

module.exports={
    searchHotel,
    searchHotelById
};