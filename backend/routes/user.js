import express from 'express';
import UserController from '../controller/user-controller.js';

const router = express.Router();

router.post('/', UserController.login);
// TODO - 먼저, 로그인이 되어있는지에 대한 체크 middleware 필요함
router.put('/', UserController.logout);

export default router;
