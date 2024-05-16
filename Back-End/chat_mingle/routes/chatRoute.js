import express from 'express';

const router =  express.Router()

router.post("/", createChat);
router.get('/:userId', userChat);
router.get('/findChat/:firstId/:secondId', findChat)

export default router;