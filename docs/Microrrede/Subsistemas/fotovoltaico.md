---
title: Sistema Fotovoltaico
---

# Sistema Fotovoltaico

O subsistema fotovoltaico representa a principal fonte de geração distribuída da instalação experimental, sendo responsável pela conversão da radiação solar em energia elétrica em corrente contínua. Sua integração com os inversores híbridos, com o sistema de armazenamento e com a rede elétrica permite analisar diferentes estratégias de operação, fluxo de potência e desempenho energético em condições reais de uso.

Além de contribuir para o suprimento das cargas da instalação, esse subsistema também serve como base para estudos acadêmicos relacionados à geração renovável, eficiência energética, supervisão, qualidade de energia e controle em microrredes.

---

## 1. Localização da Instalação

A unidade de geração encontra-se instalada nas dependências da Universidade Federal do Triângulo Mineiro (UFTM), no campus Univerdecidade, em Uberaba – MG. A escolha da área de implantação considerou a disponibilidade física para montagem da estrutura, a integração com a infraestrutura elétrica existente e a viabilidade para atividades de operação, monitoramento e manutenção.

### 1.1 Dados de Localização

<div style={{ display: 'flex', justifyContent: 'center' }}>
  <div>

<p align="center"><b>Tabela 1 – Localização da instalação da microrrede.</b></p>

| Parâmetro | Informação |
|:---------:|:----------:|
| Coordenadas Geográficas | -19.710906122658464, -47.96185612871777 |
| Endereço | Av. Randolfo Borges Júnior, 1400 – Univerdecidade |
| Município / Estado | Uberaba – MG |
| Situação da Instalação | Sistema já instalado e em operação |

  </div>
</div>

<p align="center"><small>Fonte: elaboração própria, 2025.</small></p>

### 1.2 Localização Geográfica

<p align="center"><i>Figura 1 – Localização do sistema de microgeração no campus Univerdecidade.</i></p>

<p align="center">
  <iframe
    src="https://www.google.com/maps?q=-19.710906122658464,-47.96185612871777&hl=pt-BR&z=17&output=embed"
    width="700"
    height="450"
    style={{ border: 0, borderRadius: '12px' }}
    allowFullScreen=""
    loading="lazy">
  </iframe>
</p>

<p align="center"><small>Fonte: Google Maps, 2025.</small></p>

A área ocupada corresponde ao espaço destinado ao *carport* fotovoltaico, no qual estão instalados os módulos responsáveis pela geração. A posição adotada favorece a organização do arranjo físico, o acesso técnico aos equipamentos e a integração com os demais elementos da instalação experimental.

---

## 2. Descrição Geral

O sistema é composto por módulos fotovoltaicos interligados em arranjos série-paralelo (*strings*), conectados a inversores híbridos trifásicos responsáveis pela conversão da energia gerada em corrente contínua para corrente alternada.

Essa configuração possibilita o fornecimento de energia às cargas, a interação com o banco de baterias e a operação em conjunto com a rede elétrica. Dessa forma, o subsistema não atua apenas como fonte de geração, mas também como elemento central na análise do comportamento energético da instalação.

---

## 3. Composição do Subsistema

A composição do subsistema fotovoltaico inclui:

- **36 módulos OSDA ODA555-36V-MH**, monocristalinos, de **555 Wp** cada;
- potência total instalada de **19,98 kWp**;
- **4 strings** com **9 módulos em série** por string;
- **2 inversores híbridos trifásicos Deye SUN-12K-SG04LP3**, de **12 kW** cada;
- **2 MPPTs por inversor**;
- estrutura metálica tipo **carport**;
- orientação **Norte–Sul** e inclinação aproximada de **15°**;
- conectores **MC4** e cabos resistentes à radiação UV;
- proteção em corrente contínua e alternada;
- integração com **EPC**, banco de baterias e rede elétrica.

Esses componentes formam o núcleo de geração solar da instalação, permitindo conversão eficiente da energia, monitoramento operacional e integração com os demais subsistemas energéticos.

---

## 4. Parâmetros Técnicos dos Módulos

O desempenho dos módulos é caracterizado por parâmetros elétricos fundamentais para o projeto e para a análise operacional do sistema, dentre os quais se destacam:

<p align="center"><b>Tabela X – Dados técnicos do módulo fotovoltaico OSDA ODA555-36V-MH</b></p>

| Parâmetro | Valor |
|:---------:|:-----:|
| Potência Nominal (Pmax) | 555 Wp |
| Tensão de Potência Máxima (Vmp) | 41,48 V |
| Corrente de Potência Máxima (Imp) | 13,38 A |
| Tensão de Circuito Aberto (Voc) | 49,56 V |
| Corrente de Curto-Circuito (Isc) | 14,20 A |
| Eficiência do módulo | 21,28 % |
| Dimensões | 2278 × 1134 × 35 mm |
| Peso | 27,5 kg |
| Tipo da célula | Monocristalina 182 mm (half-cell) |
| Número de células | 144 (6 × 24) |
| Temperatura de operação | −40 °C a +85 °C |
| Coeficiente térmico da potência (Pmax) | −0,35 % / °C |
| Coeficiente térmico da corrente (Isc) | +0,05 % / °C |
| Coeficiente térmico da tensão (Voc) | −0,275 % / °C |

<p align="center"><small>Fonte: Datasheet OSDA (adaptado), 2025.</small></p>

Esses parâmetros influenciam diretamente o dimensionamento das *strings*, a faixa de operação dos MPPTs e a potência efetivamente disponibilizada ao sistema em diferentes condições de irradiância e temperatura.

---

## 5. Configuração Elétrica

A configuração adotada foi estruturada para permitir adequada distribuição dos módulos entre os inversores e seus respectivos rastreadores de máxima potência. Essa organização contribui para o melhor aproveitamento energético e para a redução de perdas associadas a sombreamento parcial, diferenças de orientação ou variações térmicas entre grupos de módulos.

A divisão em *strings* também favorece a supervisão do desempenho, uma vez que possibilita identificar comportamentos distintos entre arranjos e facilita procedimentos de manutenção corretiva ou preventiva.

---

## 6. Arranjo Físico dos Módulos

A disposição física dos módulos foi desenvolvida sobre estrutura do tipo *carport*, permitindo uma organização coerente com a topologia elétrica do sistema. Essa solução construtiva não apenas atende à necessidade de suporte mecânico, como também reforça o caráter funcional da instalação ao integrar geração de energia e cobertura de área útil.

Os 36 módulos foram distribuídos de modo a formar quatro *strings*, alocadas entre dois inversores híbridos. Cada módulo foi identificado individualmente, o que facilita o rastreamento de falhas, o acompanhamento de desempenho e a associação entre posição física e conexão elétrica.

<p align="center">
  <img src="/microrrede-uftm/img/fotovoltaico-arranjo.png" width="620"/>
</p>

<p align="center"><i>Figura 2 – Diagrama de alocação e arranjo físico dos módulos fotovoltaicos da instalação.</i></p>
<p align="center"><small>Fonte: elaboração própria, 2025.</small></p>

A distribuição ilustrada permite compreender como os módulos foram agrupados em *strings* e como essas saídas foram associadas aos inversores e aos respectivos controladores MPPT. Essa correspondência entre arranjo físico e arquitetura elétrica é importante para interpretação de medições, ensaios e estratégias de operação.

---

## 7. Integração com os Inversores

A energia gerada pelos módulos é encaminhada aos inversores híbridos, responsáveis pela conversão CC/CA, sincronização com a rede, gerenciamento do fluxo de potência e interface com o banco de baterias.

Além da conversão propriamente dita, esses equipamentos executam funções essenciais para a operação do sistema, tais como:

- rastreamento do ponto de máxima potência;
- gerenciamento da energia gerada;
- coordenação com o sistema de armazenamento;
- operação conectada à rede;
- operação em condições isoladas;
- disponibilização de dados ao ambiente supervisório.

Dessa forma, os inversores atuam como elemento de interligação entre geração, armazenamento, cargas e rede elétrica.

---

## 8. Vista Geral da Integração do Subsistema

<p align="center">
  <img src="/microrrede-uftm/img/fotovoltaico-geral.JPEG" width="700"/>
</p>

<p align="center"><i>Figura 3 – Vista geral da integração do sistema fotovoltaico com os demais elementos da instalação.</i></p>
<p align="center"><small>Fonte: elaboração própria, 2025.</small></p>

A representação geral evidencia a interação entre os módulos, os inversores, o banco de baterias, as cargas e a rede elétrica. Essa configuração permite analisar os fluxos de energia em diferentes cenários operacionais, bem como avaliar a resposta do sistema diante de variações de geração e demanda.

---

## 9. Modos de Operação Associados

O subsistema fotovoltaico pode participar de diferentes condições de operação da instalação, em função da disponibilidade de geração, da demanda das cargas e do estado do sistema de armazenamento.

### 9.1 Operação conectada à rede

Nessa condição, a energia gerada pode ser consumida localmente e, quando houver excedente, integrada ao restante da instalação em coordenação com a rede elétrica.

### 9.2 Operação com suporte do armazenamento

Quando associado ao banco de baterias, o subsistema pode contribuir para estratégias de gerenciamento energético, priorizando o atendimento das cargas e o armazenamento da energia excedente.

### 9.3 Operação em modo isolado

Em situações específicas, a geração pode atuar em conjunto com o sistema de armazenamento para suprimento das cargas locais sem dependência direta da rede externa.

---

## 10. Aspectos Técnicos Relevantes

Sob o ponto de vista técnico, destacam-se os seguintes aspectos:

- utilização de geração renovável como base experimental;
- organização modular do arranjo;
- flexibilidade para estudos em diferentes cenários operacionais;
- integração direta com inversores híbridos e banco de baterias;
- possibilidade de monitoramento individualizado de módulos e *strings*;
- adequação para estudos de desempenho, supervisão e qualidade de energia.

Essas características tornam o subsistema particularmente relevante para atividades acadêmicas e para validação de estratégias de operação em microrredes.

---

## 11. Considerações Técnicas

O subsistema fotovoltaico possui papel central na estrutura energética da instalação experimental, servindo como ponto de partida para estudos de geração distribuída, integração entre fontes, eficiência energética e controle operacional.

Sua configuração física e elétrica foi desenvolvida para permitir não apenas a produção de energia, mas também a análise detalhada do comportamento do sistema em situações reais, contribuindo para o desenvolvimento de pesquisas e aplicações voltadas à engenharia elétrica.