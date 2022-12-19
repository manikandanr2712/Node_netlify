

exports.getPosts = (req,res) => {
    res.json({
        posts: [
            {title: '1',name:'Mani'},
            {title: '2',name:'Dines'}
        ]
    })
    }
