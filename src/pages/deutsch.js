import React, { useState } from 'react';
import Layout from '@theme/Layout';

const tenses = [
  {
    name: 'Präsens',
    active: { structure: 'Sujeito + Verbo + Objeto', example: 'Ich lese den Text.' },
    passive: { structure: 'Sujeito + werden + Objeto + Particípio Passado', example: 'Der Text wird von mir gelesen.' }
  },
  {
    name: 'Perfekt',
    active: { structure: 'Sujeito + haben/sein + Objeto + Particípio Passado', example: 'Ich habe den Text gelesen.' },
    passive: { structure: 'Sujeito + sein + Objeto + Particípio Passado + worden', example: 'Der Text ist von mir gelesen worden.' }
  },
  {
    name: 'Präteritum',
    active: { structure: 'Sujeito + Verbo (pretérito) + Objeto', example: 'Ich las den Text.' },
    passive: { structure: 'Sujeito + wurden + Objeto + Particípio Passado', example: 'Der Text wurde von mir gelesen.' }
  },
  {
    name: 'Plusquamperfekt',
    active: { structure: 'Sujeito + hatten/waren + Objeto + Particípio Passado', example: 'Ich hatte den Text gelesen.' },
    passive: { structure: 'Sujeito + waren + Objeto + Particípio Passado + worden', example: 'Der Text war von mir gelesen worden.' }
  },
  {
    name: 'Futur',
    active: { structure: 'Sujeito + werden + Objeto + Verbo (infinitivo)', example: 'Ich werde den Text lesen.' },
    passive: { structure: 'Sujeito + werden + Objeto + Particípio Passado + werden', example: 'Der Text wird von mir gelesen werden.' }
  }
];

function TenseCard({ tense }) {
  return (
    <div className="card margin-bottom--lg">
      <div className="card__header">
        <h3>{tense.name}</h3>
      </div>
      <div className="card__body">
        <h4>Voz Ativa</h4>
        <p><strong>Estrutura:</strong> {tense.active.structure}</p>
        <p><strong>Exemplo:</strong> {tense.active.example}</p>
        <h4>Voz Passiva</h4>
        <p><strong>Estrutura:</strong> {tense.passive.structure}</p>
        <p><strong>Exemplo:</strong> {tense.passive.example}</p>
      </div>
    </div>
  );
}

function GermanSentenceStructure() {
  const [selectedTense, setSelectedTense] = useState(null);

  return (
    <Layout title="Estrutura de Frases em Alemão" description="Aprenda sobre a estrutura de frases em alemão">
      <div className="container margin-vert--lg">
        <h1>Estrutura de Frases em Alemão</h1>
        <p>Selecione um tempo verbal para ver sua estrutura na voz ativa e passiva:</p>
        <div className="row margin-bottom--lg">
          {tenses.map((tense, index) => (
            <div className="col col--2" key={index}>
              <button
                className={`button button--outline button--primary ${selectedTense === index ? 'button--active' : ''}`}
                onClick={() => setSelectedTense(index)}
              >
                {tense.name}
              </button>
            </div>
          ))}
        </div>
        {selectedTense !== null && <TenseCard tense={tenses[selectedTense]} />}
        <div className="margin-top--xl">
          <h2>Observações Importantes</h2>
          <ul>
            <li>Na voz ativa, o verbo conjugado (ou o auxiliar) geralmente ocupa a segunda posição na frase principal.</li>
            <li>Na voz passiva, o verbo auxiliar "werden" (ou suas formas) sempre ocupa a segunda posição, enquanto o particípio passado do verbo principal vai para o final da frase.</li>
            <li>No Perfekt e Plusquamperfekt da voz passiva, usa-se "sein" como auxiliar e adiciona-se "worden" no final.</li>
            <li>O Präteritum é mais comum em narrativas escritas, enquanto o Perfekt é mais usado na fala cotidiana para ações passadas.</li>
            <li>Note como o sujeito da voz ativa ("Ich") se torna o agente da voz passiva ("von mir").</li>
          </ul>
        </div>
      </div>
    </Layout>
  );
}

export default GermanSentenceStructure;