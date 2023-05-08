const { Router } = require("express");
const { check } = require("express-validator");
const { chatbotRes } = require("../controllers/chatbot_ctrl");
const validarCampos = require("../middlewares/validate_req");


const router = Router();

router.post('/',
   /*  [
    check('message', 'debes enviar un mensaje valido').not().isEmpty(),
    validarCampos
    ], */
    chatbotRes);


module.exports = router;