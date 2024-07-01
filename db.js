const mongoose=require('mongoose')

const mongoURI="mongodb+srv://rautpratiksha0802:rautpratiksha0802@cluster.eh7gkoq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster"

    const connectToMongo = async () => {
        try {
            mongoose.connect(mongoURI) 
            console.log('Mongo connected')
        }
        catch(error) {
            console.log(error)
            process.exit()
        }
        }
module.exports=connectToMongo
