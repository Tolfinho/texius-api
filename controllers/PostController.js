// Models
const Post = require("../models/Post")

// CREATE POST
const createPost = async (req, res) => {

    try {

        const newPost = await Post.create(req.body)

        res.status(200).json(newPost)

    } catch (error) {
        console.log(error)
        res.status(400).json({error: "Erro ao criar o post!"})
    }

}

// GET ALL POSTS
const getAllPost = async (req, res) => {

    try {
        
        const allPosts = await Post.find()

        res.status(200).json(allPosts)

    } catch (error) {
        console.log(error)
        res.status(400).json({error: "Erro ao resgatar todos os posts!"})
    }

}

// GET ALL ACTIVE POSTS
const getAllActivePost = async (req, res) => {

    try {
        
        const allActivePosts = await Post.find({active: true})

        res.status(200).json(allActivePosts)

    } catch (error) {
        console.log(error)
        res.status(400).json({error: "Erro ao resgatar todos os posts ativos!"})
    }

}

// GET SINGLE POST
const getSinglePost = async (req, res) => {

    const post_id = req.params.id

    try {
        
        const singlePost = await Post.findOne({_id: post_id})

        res.status(200).json(singlePost)

    } catch (error) {
        console.log(error)
        res.status(400).json({error: "Erro ao resgator post individual!"})
    }

}

// UPDATE POST
const updatePost = async (req, res) => {
    const post_id = req.params.id
    const post = req.body

    try {
        
        const updatedPost = await Post.findByIdAndUpdate(post_id, post, { new: true })

        res.status(200).json(updatedPost)

    } catch (error) {
        console.log(error)
        res.status(400).json({error: "Erro ao atualizar o post!"})
    }

}

// DELETE POST
const deletePost = async (req, res) => {
    const post_id = req.params.id

    try {
        
        const deletedPost = await Post.findByIdAndDelete(post_id)

        res.status(200).json(deletedPost)

    } catch (error) {
        console.log(error)
        res.status(400).json({error: "Erro ao deletar o post!"})
    }

}


module.exports = {
    createPost,
    getAllPost,
    getAllActivePost,
    getSinglePost,
    updatePost,
    deletePost,
}