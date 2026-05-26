// Remova as chaves { } dos imports abaixo:
import Personagem from "../models/Personagem.js";
import Habilidade from "../models/Habilidade.js";
import PersonagemHabilidade from "../models/PersonagemHabilidade.js";

// O restante do código de associações continua igual...
Personagem.belongsToMany(Habilidade, { 
    through: PersonagemHabilidade,
    foreignKey: 'personagemId',
    onDelete: 'CASCADE'
});

Habilidade.belongsToMany(Personagem, { 
    through: PersonagemHabilidade,
    foreignKey: 'habilidadeId',
    onDelete: 'CASCADE'
});

export { Personagem, Habilidade, PersonagemHabilidade };