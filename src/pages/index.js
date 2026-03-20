import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

export default function Home() {
  return (
    <Layout
      title="Microrrede UFTM"
      description="Plataforma técnica de documentação da microrrede experimental">
      <main style={{ backgroundColor: '#f8fafc', minHeight: '100vh' }}>
        <section
          style={{
            background: 'linear-gradient(135deg, #0f172a 0%, #166534 100%)',
            color: 'white',
            padding: '70px 20px',
          }}>
          <div
            style={{
              maxWidth: '1200px',
              margin: '0 auto',
              display: 'grid',
              gridTemplateColumns: '1.3fr 1fr',
              gap: '30px',
              alignItems: 'center',
            }}>
            <div>
              <div
                style={{
                  display: 'flex',
                  gap: '18px',
                  alignItems: 'center',
                  marginBottom: '20px',
                  flexWrap: 'wrap',
                }}>
                <img
                  src="/microrrede-uftm/img/logo-nepsel.jpeg"
                  alt="Logo NEPSEL"
                  style={{
                    height: '60px',
                    background: 'white',
                    padding: '8px',
                    borderRadius: '10px',
                    objectFit: 'contain',
                  }}
                />

                <img
                  src="/microrrede-uftm/img/logo-icte.jpeg"
                  alt="Logo ICTE"
                  style={{
                    height: '60px',
                    background: 'white',
                    padding: '8px',
                    borderRadius: '10px',
                    objectFit: 'contain',
                  }}
                />
              </div>

              <h1
                style={{
                  fontSize: '3.3rem',
                  lineHeight: '1.1',
                  marginBottom: '18px',
                }}>
                Microrrede UFTM
              </h1>

              <p
                style={{
                  fontSize: '1.2rem',
                  lineHeight: '1.8',
                  maxWidth: '760px',
                  marginBottom: '28px',
                  opacity: 0.96,
                }}>
                Plataforma técnica de documentação da microrrede experimental do
                ICTE/UFTM, reunindo informações sobre arquitetura do sistema,
                subsistemas energéticos, proteção, automação, supervisão e análises.
              </p>

              <div
                style={{
                  display: 'flex',
                  gap: '15px',
                  flexWrap: 'wrap',
                }}>
                <Link
                  className="button button--lg"
                  style={{
                    backgroundColor: '#22c55e',
                    border: 'none',
                    color: '#052e16',
                    fontWeight: '700',
                    padding: '14px 26px',
                  }}
                  to="/docs/Microrrede/visao-geral">
                  Acessar documentação
                </Link>

                <Link
                  className="button button--lg"
                  style={{
                    backgroundColor: 'white',
                    color: '#0f172a',
                    fontWeight: '700',
                    padding: '14px 26px',
                  }}
                  to="/docs/Microrrede/arquitetura">
                  Ver arquitetura
                </Link>
              </div>
            </div>

            <div
              style={{
                backgroundColor: 'rgba(255,255,255,0.08)',
                border: '1px solid rgba(255,255,255,0.16)',
                borderRadius: '20px',
                padding: '26px',
                backdropFilter: 'blur(8px)',
              }}>
              <h2
                style={{
                  color: '#bbf7d0',
                  marginBottom: '15px',
                  fontSize: '1.6rem',
                }}>
                Objetivo da plataforma
              </h2>

              <ul
                style={{
                  lineHeight: '2',
                  paddingLeft: '20px',
                  margin: 0,
                  fontSize: '1.02rem',
                }}>
                <li>Centralizar a documentação técnica da microrrede</li>
                <li>Organizar os subsistemas de forma didática</li>
                <li>Apoiar ensino, pesquisa e extensão</li>
                <li>Facilitar o acesso a diagramas, análises e referências</li>
              </ul>
            </div>
          </div>
        </section>

        <section
          style={{
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '55px 20px 25px 20px',
          }}>
          <h2
            style={{
              fontSize: '2rem',
              marginBottom: '14px',
              color: '#0f172a',
            }}>
            Sobre a plataforma
          </h2>

          <p
            style={{
              fontSize: '1.08rem',
              color: '#334155',
              maxWidth: '980px',
              lineHeight: '1.9',
            }}>
            Este ambiente foi desenvolvido para organizar e disponibilizar a
            documentação técnica da microrrede do ICTE/UFTM, reunindo conteúdos
            sobre visão geral do sistema, arquitetura, subsistemas energéticos,
            documentação técnica e resultados de análises operacionais.
          </p>
        </section>

        <section
          style={{
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '10px 20px 55px 20px',
          }}>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'end',
              gap: '20px',
              flexWrap: 'wrap',
              marginBottom: '24px',
            }}>
            <div>
              <h2
                style={{
                  fontSize: '2rem',
                  marginBottom: '8px',
                  color: '#0f172a',
                }}>
                Seções principais
              </h2>
              <p
                style={{
                  color: '#475569',
                  margin: 0,
                }}>
                Clique em uma seção para acessar diretamente o conteúdo.
              </p>
            </div>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '22px',
            }}>
            <CardLink
              title="Microrrede"
              description="Visão geral, arquitetura do sistema e modos de operação."
              to="/docs/Microrrede/visao-geral"
            />

            <CardLink
              title="Subsistemas"
              description="Fotovoltaico, baterias, carport, QDG, automação e supervisório."
              to="/docs/Microrrede/Subsistemas/fotovoltaico"
            />

            <CardLink
              title="Documentação Técnica"
              description="Diagramas, normas, manuais e fichas técnicas dos equipamentos."
              to="/docs/Microrrede/Documentacao-Tecnica/diagramas"
            />

            <CardLink
              title="Análises"
              description="Testes, ensaios operacionais e resultados obtidos na microrrede."
              to="/docs/Microrrede/Analises/testes"
            />
          </div>
        </section>

        <section
          style={{
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '0 20px 80px 20px',
          }}>
          <div
            style={{
              backgroundColor: 'white',
              border: '1px solid #e2e8f0',
              borderRadius: '20px',
              padding: '32px',
              boxShadow: '0 8px 24px rgba(15, 23, 42, 0.06)',
            }}>
            <h2
              style={{
                fontSize: '1.8rem',
                marginBottom: '16px',
                color: '#0f172a',
              }}>
              Como navegar
            </h2>

            <ul
              style={{
                lineHeight: '2',
                color: '#334155',
                margin: 0,
                paddingLeft: '20px',
              }}>
              <li>Comece pela seção <strong>Microrrede</strong> para entender a visão geral do sistema.</li>
              <li>Acesse <strong>Subsistemas</strong> para estudar cada elemento da instalação.</li>
              <li>Consulte <strong>Documentação Técnica</strong> para diagramas, normas e manuais.</li>
              <li>Use a área de <strong>Análises</strong> para registrar ensaios e resultados experimentais.</li>
            </ul>
          </div>
        </section>
      </main>
    </Layout>
  );
}

function CardLink({title, description, to}) {
  return (
    <Link
      to={to}
      style={{
        textDecoration: 'none',
        color: 'inherit',
      }}>
      <div
        style={{
          backgroundColor: 'white',
          border: '1px solid #e2e8f0',
          borderRadius: '18px',
          padding: '26px',
          boxShadow: '0 8px 22px rgba(15, 23, 42, 0.06)',
          minHeight: '220px',
          transition: 'transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease',
          cursor: 'pointer',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'translateY(-4px)';
          e.currentTarget.style.boxShadow = '0 14px 30px rgba(15, 23, 42, 0.10)';
          e.currentTarget.style.borderColor = '#16a34a';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'translateY(0)';
          e.currentTarget.style.boxShadow = '0 8px 22px rgba(15, 23, 42, 0.06)';
          e.currentTarget.style.borderColor = '#e2e8f0';
        }}>
        <h3
          style={{
            fontSize: '1.8rem',
            marginBottom: '14px',
            color: '#166534',
            lineHeight: '1.2',
          }}>
          {title}
        </h3>

        <p
          style={{
            color: '#334155',
            lineHeight: '1.85',
            marginBottom: '18px',
            fontSize: '1.04rem',
          }}>
          {description}
        </p>

        <span
          style={{
            color: '#166534',
            fontWeight: '700',
            fontSize: '0.98rem',
          }}>
          Acessar seção →
        </span>
      </div>
    </Link>
  );
}