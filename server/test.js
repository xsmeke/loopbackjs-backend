var models = require('./server.js').models;

models.Profile.findOrCreate({name: 'Nick2'}, (err, profile) => {
    if(err){
        console.log("There was an error", err);
    }else if(profile){
        profile.email = 'nick@nickgermaine2.com';
        profile.save((ue, updated) => {
            console.log("Updated?", updated);
        });
    }
})