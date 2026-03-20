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
            background:
              'linear-gradient(135deg, #0b1220 0%, #0f2d24 45%, #166534 100%)',
            color: 'white',
            padding: '80px 20px 70px 20px',
          }}>
          <div
            style={{
              maxWidth: '1200px',
              margin: '0 auto',
              display: 'grid',
              gridTemplateColumns: '1.25fr 0.95fr',
              gap: '36px',
              alignItems: 'center',
            }}>
            <div>
              <div
                style={{
                  display: 'flex',
                  gap: '14px',
                  alignItems: 'center',
                  marginBottom: '22px',
                  flexWrap: 'wrap',
                }}>
                <div
                  style={{
                    backgroundColor: 'rgba(255,255,255,0.95)',
                    padding: '10px 12px',
                    borderRadius: '14px',
                    boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
                  }}>
                  <img
                    src="/microrrede-uftm/img/logo-nepsel.jpeg"
                    alt="Logo NEPSEL"
                    style={{
                      height: '46px',
                      width: 'auto',
                      objectFit: 'contain',
                      display: 'block',
                    }}
                  />
                </div>

                <div
                  style={{
                    backgroundColor: 'rgba(255,255,255,0.95)',
                    padding: '10px 12px',
                    borderRadius: '14px',
                    boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
                  }}>
                  <img
                    src="/microrrede-uftm/img/logo-icte.jpeg"
                    alt="Logo ICTE"
                    style={{
                      height: '46px',
                      width: 'auto',
                      objectFit: 'contain',
                      display: 'block',
                    }}
                  />
                </div>

                <span
                  style={{
                    fontSize: '0.95rem',
                    fontWeight: 600,
                    color: '#bbf7d0',
                    letterSpacing: '0.04em',
                  }}>
                  PLATAFORMA TÉCNICA • ICTE / NEPSEL / UFTM
                </span>
              </div>

              <h1
                style={{
                  fontSize: '3.6rem',
                  lineHeight: '1.05',
                  marginBottom: '18px',
                  fontWeight: 800,
                }}>
                Microrrede UFTM
              </h1>

              <p
                style={{
                  fontSize: '1.22rem',
                  lineHeight: '1.85',
                  maxWidth: '760px',
                  marginBottom: '30px',
                  color: 'rgba(255,255,255,0.93)',
                }}>
                Plataforma institucional para organização da documentação técnica
                da microrrede experimental do ICTE/UFTM, reunindo arquitetura do
                sistema, subsistemas energéticos, documentação técnica,
                automação, supervisão e análises operacionais.
              </p>

              <div
                style={{
                  display: 'flex',
                  gap: '14px',
                  flexWrap: 'wrap',
                  marginBottom: '28px',
                }}>
                <Link
                  className="button button--lg"
                  style={{
                    backgroundColor: '#22c55e',
                    border: 'none',
                    color: '#052e16',
                    fontWeight: 800,
                    padding: '14px 28px',
                    borderRadius: '12px',
                    boxShadow: '0 10px 22px rgba(34,197,94,0.25)',
                  }}
                  to="/docs/Microrrede/visao-geral">
                  Acessar documentação
                </Link>

                <Link
                  className="button button--lg"
                  style={{
                    backgroundColor: 'rgba(255,255,255,0.96)',
                    color: '#0f172a',
                    fontWeight: 800,
                    padding: '14px 28px',
                    borderRadius: '12px',
                  }}
                  to="/docs/Microrrede/arquitetura">
                  Ver arquitetura
                </Link>
              </div>

              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(3, minmax(120px, 1fr))',
                  gap: '14px',
                  maxWidth: '760px',
                }}>
                <QuickStat title="Estrutura" value="Didática" />
                <QuickStat title="Foco" value="Técnico" />
                <QuickStat title="Aplicação" value="Ensino e pesquisa" />
              </div>
            </div>

            <div
              style={{
                backgroundColor: 'rgba(255,255,255,0.08)',
                border: '1px solid rgba(255,255,255,0.14)',
                borderRadius: '22px',
                padding: '30px',
                backdropFilter: 'blur(8px)',
                boxShadow: '0 16px 40px rgba(0,0,0,0.14)',
              }}>
              <h2
                style={{
                  color: '#dcfce7',
                  marginBottom: '18px',
                  fontSize: '1.8rem',
                  fontWeight: 800,
                }}>
                Objetivos da plataforma
              </h2>

              <ul
                style={{
                  lineHeight: '2',
                  paddingLeft: '22px',
                  margin: 0,
                  fontSize: '1.05rem',
                  color: 'rgba(255,255,255,0.95)',
                }}>
                <li>Centralizar a documentação técnica da microrrede</li>
                <li>Organizar os subsistemas de forma clara e didática</li>
                <li>Apoiar ensino, pesquisa e extensão tecnológica</li>
                <li>Facilitar o acesso a diagramas, análises e referências</li>
              </ul>
            </div>
          </div>
        </section>

        <section
          style={{
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '54px 20px 20px 20px',
          }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1.15fr 0.85fr',
              gap: '26px',
            }}>
            <div
              style={{
                backgroundColor: 'white',
                border: '1px solid #e2e8f0',
                borderRadius: '22px',
                padding: '30px',
                boxShadow: '0 10px 26px rgba(15, 23, 42, 0.05)',
              }}>
              <h2
                style={{
                  fontSize: '2rem',
                  marginBottom: '14px',
                  color: '#0f172a',
                  fontWeight: 800,
                }}>
                Sobre a plataforma
              </h2>

              <p
                style={{
                  fontSize: '1.08rem',
                  color: '#334155',
                  lineHeight: '1.95',
                  margin: 0,
                }}>
                Este ambiente foi desenvolvido para organizar e disponibilizar a
                documentação técnica da microrrede do ICTE/UFTM, reunindo
                conteúdos sobre visão geral do sistema, arquitetura,
                subsistemas energéticos, documentação técnica e resultados de
                análises operacionais.
              </p>
            </div>

            <div
              style={{
                backgroundColor: '#ecfdf5',
                border: '1px solid #bbf7d0',
                borderRadius: '22px',
                padding: '28px',
                boxShadow: '0 10px 26px rgba(22, 101, 52, 0.07)',
              }}>
              <h3
                style={{
                  marginTop: 0,
                  marginBottom: '12px',
                  color: '#166534',
                  fontSize: '1.45rem',
                  fontWeight: 800,
                }}>
                Destaques
              </h3>

              <ul
                style={{
                  margin: 0,
                  paddingLeft: '20px',
                  color: '#14532d',
                  lineHeight: '1.95',
                  fontSize: '1rem',
                }}>
                <li>Documentação centralizada em ambiente web</li>
                <li>Navegação por seções técnicas</li>
                <li>Acesso rápido a diagramas e análises</li>
                <li>Base para evolução do projeto de TCC</li>
              </ul>
            </div>
          </div>
        </section>

        <section
          style={{
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '28px 20px 60px 20px',
          }}>
          <div style={{ marginBottom: '22px' }}>
            <h2
              style={{
                fontSize: '2rem',
                marginBottom: '8px',
                color: '#0f172a',
                fontWeight: 800,
              }}>
              Seções principais
            </h2>
            <p
              style={{
                color: '#475569',
                margin: 0,
                fontSize: '1.02rem',
              }}>
              Clique em uma seção para acessar diretamente o conteúdo técnico.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '22px',
              alignItems: 'stretch',
            }}>
            <CardLink
              badge="01"
              title="Microrrede"
              description="Visão geral, arquitetura do sistema e modos de operação."
              to="/docs/Microrrede/visao-geral"
            />

            <CardLink
              badge="02"
              title="Subsistemas"
              description="Fotovoltaico, baterias, carport, QDG, automação e supervisório."
              to="/docs/Microrrede/Subsistemas/fotovoltaico"
            />

            <CardLink
              badge="03"
              title="Documentação Técnica"
              description="Diagramas, normas, manuais e fichas técnicas dos equipamentos."
              to="/docs/Microrrede/Documentacao-Tecnica/diagramas"
            />

            <CardLink
              badge="04"
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
            padding: '0 20px 85px 20px',
          }}>
          <div
            style={{
              backgroundColor: 'white',
              border: '1px solid #e2e8f0',
              borderRadius: '22px',
              padding: '34px',
              boxShadow: '0 12px 28px rgba(15, 23, 42, 0.05)',
            }}>
            <h2
              style={{
                fontSize: '1.8rem',
                marginBottom: '16px',
                color: '#0f172a',
                fontWeight: 800,
              }}>
                Como navegar
              </h2>

            <ul
              style={{
                lineHeight: '2',
                color: '#334155',
                margin: 0,
                paddingLeft: '20px',
                fontSize: '1.02rem',
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

function QuickStat({title, value}) {
  return (
    <div
      style={{
        backgroundColor: 'rgba(255,255,255,0.10)',
        border: '1px solid rgba(255,255,255,0.14)',
        borderRadius: '16px',
        padding: '16px 18px',
      }}>
      <div
        style={{
          fontSize: '0.88rem',
          color: '#dcfce7',
          marginBottom: '6px',
          fontWeight: 600,
        }}>
        {title}
      </div>
      <div
        style={{
          fontSize: '1.04rem',
          color: 'white',
          fontWeight: 800,
          lineHeight: '1.4',
        }}>
        {value}
      </div>
    </div>
  );
}

function CardLink({badge, title, description, to}) {
  return (
    <Link
      to={to}
      style={{
        textDecoration: 'none',
        color: 'inherit',
        height: '100%',
      }}>
      <div
        style={{
          backgroundColor: 'white',
          border: '1px solid #e2e8f0',
          borderRadius: '20px',
          padding: '26px',
          boxShadow: '0 10px 24px rgba(15, 23, 42, 0.05)',

          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',

          height: '100%',
          minHeight: '260px',

          transition: 'transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease',
          cursor: 'pointer',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'translateY(-5px)';
          e.currentTarget.style.boxShadow = '0 16px 34px rgba(15, 23, 42, 0.10)';
          e.currentTarget.style.borderColor = '#22c55e';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'translateY(0)';
          e.currentTarget.style.boxShadow = '0 10px 24px rgba(15, 23, 42, 0.05)';
          e.currentTarget.style.borderColor = '#e2e8f0';
        }}>
        <div>
          {badge && (
            <div
              style={{
                display: 'inline-block',
                backgroundColor: '#ecfdf5',
                color: '#166534',
                border: '1px solid #bbf7d0',
                borderRadius: '999px',
                padding: '5px 10px',
                fontSize: '0.82rem',
                fontWeight: 800,
                marginBottom: '16px',
              }}>
              {badge}
            </div>
          )}

          <h3
            style={{
              fontSize: '1.8rem',
              marginBottom: '14px',
              color: '#166534',
              lineHeight: '1.15',
              fontWeight: 800,
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
        </div>

        <div style={{ marginTop: 'auto' }}>
          <span
            style={{
              color: '#166534',
              fontWeight: '800',
              fontSize: '0.98rem',
            }}>
            Acessar seção →
          </span>
        </div>
      </div>
    </Link>
  );
}