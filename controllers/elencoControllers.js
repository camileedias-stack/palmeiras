import express from 'express'; 


const router = express.Router(); 


router.get("/elenco", (req, res) => {
        const idolos = [
    { 
        nome: "Ademir da Guia", 
        posicao: "Meio-campista", 
        detalhe: "902 jogos (O Divino)",
        foto: "/imgs/ademir.jfif" 
    },
      
        { nome: "Marcos", 
          posicao: "Goleiro", 
          detalhe: "Santo do Palestra", 
          foto: "/imgs/marcos.webp" },


        { nome: "Dudu", 
          posicao: "Volante", 
          detalhe: "Ídolo das décadas 60/70", 
          foto: "/imgs/dudu.jpeg" },

        { nome: "Rivaldo", 
          posicao: "Meia-atacante", 
          detalhe: "Craque da Era Parmalat", 
          foto: "/imgs/rivaldo.jpg" },

        { nome: "Evair", 
          posicao: "Centroavante", 
          detalhe: "O Matador", 
          foto: "/imgs/evair.jpg" }
    ];
    res.render("elenco", { idolos });
});
export default router; 

