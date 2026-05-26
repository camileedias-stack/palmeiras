
import express from 'express'; 


const router = express.Router(); 


router.get("/titulos", (req, res) => {
    const conquistas = [
        { campeonato: "Libertadores", qtd: 3, destaque: "Tri-campeão" },
        { campeonato: "Brasileirão", qtd: 12, destaque: "Maior do Brasil" },
        { campeonato: "Copa do Brasil", qtd: 4, destaque: "Invicto em 2012" },
        { campeonato: "Paulistão", qtd: 26, destaque: "Atual campeão" },
        { campeonato: "Copa Rio", qtd: 1, destaque: "Primeiro Campeão Mundial" }
    ];
    res.render("titulos", { conquistas });
});
export default router; 