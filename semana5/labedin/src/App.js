import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardPequeno from './components/CardPequeno/CardPequeno';
import CardLinguas from './components/CardLinguas/CardLinguas';
function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlY7DnFveDCC6nnlayvQYotOvM5FViF0DN5w&usqp=CAU" 
          nome="Guilherme Henrique Mota Alfredo" 
          descricao="Olá, eu sou o Guilherme. Tenho 27 anos e sou natural de Belo Horizonte. Sou formado no curso de Direito, mas resolvi dar uma reviravolta em minha vida profissional, mergulhando de cabeça no mercado de tecnologia que vem crescendo a cada dia mais."
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />

        <CardPequeno
          imagem="https://i.pinimg.com/564x/c4/4b/55/c44b558d5072246d510dad9fbb0b2869.jpg"
          nome="Email:"
          descricao="guilhermehmota12@gmail.com"        
        />

        <CardPequeno
          imagem="https://png.pngtree.com/png-vector/20190826/ourlarge/pngtree-house-location-icon-png-image_1701248.jpg"
          nome="Endereço:"
          descricao="Rua Zuzu Angel, 251"        
        />

      </div>

      <div className="page-section-container">
        <h2>Experiências acadêmicas e profissional</h2>

        <CardGrande 
          imagem="data:image/png;base64,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" 
          nome="Fundação Torino" 
          descricao="Concluí o ensino médio na Fundação Torino, uma escola internacional onde tive muito contato com a cultura européia, consegui meu diploma de curso técnico e peguei fluência na língua italiana." 
        />

<CardGrande 
          imagem="https://i.pinimg.com/originals/02/9a/49/029a490fc0db2e3f9bee94254b38188a.png" 
          nome="Fiat Automóveis" 
          descricao="Durante o ensino médio, fiz um estágio voluntário na Fiat Automóveis para conseguir o diploma de curso técnico. Trabalhei no setor de gestão de viagens, onde controlava as despesas dos funcionários quando utilizavam cartão corporativo. Foi minha primeira experiência profissional. " 
        />

        <CardGrande 
          imagem="https://icei.pucminas.br/images/logos/logo_pucminas.png" 
          nome="Direito PUC Minas" 
          descricao="Sou graduado em Direito pela PUC Minas e tive atuações profissionais pelo TJMG (Tribunal de Justiça de Minas Gerais) e também por outros dois escritórios de advocacia de Belo Horizonte. Nas áreas de Direito de Família e Direito Imobiliário." 
        />
        
        <CardGrande 
          imagem="https://uploads-ssl.webflow.com/5e790d30d198385b09366d8f/5eab0f1225c2d474a92656df_fav2_LabeNu_.png" 
          nome="Labenu" 
          descricao="Atualmente sou estudante da Labenu, instituição de ensino que está me proporcionando um enorme aprendizado e ajudando a construir meu futuro profissional como desenvolvedor web." 
        />

        
      </div>

      <div className="page-section-container">
        <h2>Línguas</h2>

        <CardLinguas 
          nome="Ingles:" 
          descricao="Intermediário (boa compreensão e leitura);" 
          nome2="Espanhol:" 
          descricao2="Intermediário (boa compreensão e leitura);"
          nome3="Italiano:" 
          descricao3="Fluente."
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>

      

    </div>
  );
}

export default App;
