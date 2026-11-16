//mini express as a use

import express from 'express'
import postController from '../controllers/postController.js'
const router= express.Router()
router.get('/',postController.getPosts)
router.get('/:id',postController.getPostsById)
router.post('/', postController.createPost)
router.put('/:id',postController.updatePost)
router.delete('/:id',postController.deletePost)

export default router