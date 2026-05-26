import express from 'express'; 


const router = express.Router(); 


router.get("/perfil", (req, res) => {
    const usuario = {
        nome: "Camile ",
        status: "Sócio Avanti",
        desde: "2025"
    };
    res.render("perfil", { usuario });
});

export default router; 