const mongoose = require ('mongoose');

mongoose.connect('mongodb+srv://nodeav1:nodeav1@cluster0-rt7c9.mongodb.net/av1?retryWrites=true&w=majority', { useNewUrlParser: true ,useUnifiedTopology: true,

useCreateIndex: true,

useFindAndModify: false
})
.then(response => console.log('Conected to Database..'))
.catch(error => console.log('error ->', error.message));
mongoose.Promise = global.Promise;

module.exports = mongoose;

