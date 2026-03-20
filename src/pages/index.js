import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

export default function Home() {
  return (
    <Layout
      title="Microrrede UFTM"
      description="Plataforma técnica de documentação da microrrede">
      <main style={{ padding: '40px', maxWidth: '1100px', margin: '0 auto' }}>
        <section style={{ textAlign: 'center', marginBottom: '50px' }}>
          <h1 style={{ fontSize: '3rem', marginBottom: '10px' }}>Microrrede UFTM</h1>
          <p style={{ fontSize: '1.2rem', marginBottom: '25px' }}>
            Plataforma técnica de documentação da microrrede experimental
          </p>

          <div style={{ display: 'flex', gap: '15px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link
              className="button button--primary button--lg"
              to="/docs/Microrrede/visao-geral">
              Acessar documentação
            </Link>

            <Link
              className="button button--secondary button--lg"
              to="/docs/Microrrede/arquitetura">
              Ver arquitetura
            </Link>
          </div>
        </section>

        <section style={{ marginBottom: '40px' }}>
          <h2>Sobre a plataforma</h2>
          <p>
            Este ambiente foi desenvolvido para organizar e disponibilizar a documentação
            técnica da microrrede do ICTE/UFTM, reunindo informações sobre arquitetura do sistema,
            subsistemas energéticos, proteção, automação, supervisão, análises e documentação de apoio.
          </p>
        </section>

        <section style={{ marginBottom: '40px' }}>
          <h2>Seções principais</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px' }}>
            <div style={{ border: '1px solid #ddd', borderRadius: '12px', padding: '20px' }}>
              <h3>Microrrede</h3>
              <p>Visão geral, arquitetura do sistema e modos de operação.</p>
            </div>

            <div style={{ border: '1px solid #ddd', borderRadius: '12px', padding: '20px' }}>
              <h3>Subsistemas</h3>
              <p>Fotovoltaico, baterias, carport, QDG, automação e supervisório.</p>
            </div>

            <div style={{ border: '1px solid #ddd', borderRadius: '12px', padding: '20px' }}>
              <h3>Documentação Técnica</h3>
              <p>Diagramas, normas, manuais e fichas técnicas dos equipamentos.</p>
            </div>

            <div style={{ border: '1px solid #ddd', borderRadius: '12px', padding: '20px' }}>
              <h3>Análises</h3>
              <p>Testes, ensaios operacionais e resultados obtidos na microrrede.</p>
            </div>
          </div>
        </section>

        <section>
          <h2>Como navegar</h2>
          <ul>
            <li>Use o menu lateral para acessar os capítulos da documentação.</li>
            <li>Comece pela seção “Microrrede” para entender a visão geral do sistema.</li>
            <li>Depois avance para “Subsistemas” e “Documentação Técnica”.</li>
          </ul>
        </section>
      </main>
    </Layout>
  );
}