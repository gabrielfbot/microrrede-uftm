---
title: Banco de Baterias
---

# Banco de Baterias

O banco de baterias constitui um dos principais subsistemas da microrrede experimental da UFTM, sendo responsável pelo armazenamento de energia elétrica e pelo suporte operacional em diferentes condições de funcionamento do sistema.

Sua presença permite maior flexibilidade energética, pois possibilita armazenar parte da energia gerada pelo sistema fotovoltaico para utilização posterior, contribuindo para estudos de autonomia, continuidade de fornecimento e gerenciamento energético.

---

## 1. Visão Geral do Sistema

<p align="center">
  <img src="/img/Banco de Baterias (1).JPEG" width="700" />
</p>

<p align="center"><i>Figura 1 – Banco de baterias instalado na microrrede.</i></p>
<p align="center"><small>Fonte: elaboração própria, 2025.</small></p>

A Figura 1 apresenta a instalação física do banco de baterias na microrrede experimental. O sistema encontra-se integrado aos inversores híbridos e aos demais elementos da instalação, permitindo operação coordenada com a geração fotovoltaica e com a rede elétrica.

Do ponto de vista funcional, esse subsistema é responsável por armazenar energia em corrente contínua e disponibilizá-la conforme a necessidade operacional da microrrede, ampliando a confiabilidade e a flexibilidade de operação.

---

## 2. Caracterização do Sistema

O sistema de armazenamento adotado utiliza tecnologia de íons de lítio do tipo **LiFePO₄ (Lítio-Ferro-Fosfato)**, selecionada por apresentar elevada estabilidade térmica, boa eficiência de carga e descarga, longa vida útil e maior segurança operacional quando comparada a outras químicas empregadas em aplicações estacionárias.

Entre as principais vantagens dessa tecnologia, destacam-se:

- elevada segurança química e térmica;
- boa eficiência energética;
- maior vida útil em ciclos de carga e descarga;
- baixa taxa de degradação;
- compatibilidade com sistemas inteligentes de gerenciamento.

A integração com os inversores híbridos permite que o banco de baterias opere de forma coordenada com o sistema fotovoltaico, participando do atendimento das cargas e das estratégias de controle energético da microrrede.

---

## 3. Dados Técnicos

<p align="center"><b>Tabela 1 – Dados técnicos do banco de baterias</b></p>

| Parâmetro | Valor |
|:----------|:-----:|
| Tipo de bateria | Íons de lítio (LiFePO₄) |
| Capacidade nominal | 5,12 kWh |
| Tensão nominal | 48 V |
| Profundidade de descarga (DoD) | 80 % |
| Eficiência | Aproximadamente 95 % |
| Vida útil | Superior a 6000 ciclos |
| Comunicação | CAN / RS-485 |

<p align="center"><small>Fonte: elaboração própria, 2025.</small></p>

Os parâmetros apresentados definem as características básicas de operação do sistema e são fundamentais para o dimensionamento energético, a integração com os inversores e a avaliação da autonomia da microrrede.

---

## 4. Dimensionamento Energético

A energia útil disponível no banco de baterias depende da capacidade nominal total e da profundidade de descarga admissível.

A relação pode ser expressa por:

**Energia útil = Capacidade nominal x DoD**

Onde:

- energia útil: energia efetivamente disponível para uso;
- capacidade nominal: energia total armazenada no banco;
- DoD: profundidade de descarga admissível.

Para o sistema analisado, considerando:

- capacidade nominal = 5,12 kWh;
- DoD = 0,80;

obtém-se:

**Energia útil = 5,12 x 0,80 = 4,10 kWh**

Esse resultado representa a quantidade de energia efetivamente disponível para utilização sem ultrapassar o limite operacional recomendado para o banco de baterias.

A autonomia para uma carga média pode ser estimada por:

**Autonomia = Energia útil / Potência da carga**

Essa relação é importante para estudos operacionais, especialmente em avaliações de atendimento de cargas em modo isolado ou em estratégias de suporte energético.

---

## 5. Parâmetros Técnicos Relevantes

Os principais parâmetros que caracterizam o desempenho do banco de baterias incluem:

- capacidade nominal;
- tensão de operação;
- eficiência global;
- profundidade de descarga;
- vida útil em ciclos;
- comportamento térmico;
- integração com os inversores e sistema de supervisão.

Esses fatores influenciam diretamente a confiabilidade, a autonomia e a durabilidade do sistema de armazenamento.

---

## 6. Comportamento Energético

<p align="center">
  <img src="/img/bateria-dod-energia.jpg" width="600" />
</p>

<p align="center"><i>Figura 2 – Relação entre profundidade de descarga (DoD) e energia disponível.</i></p>
<p align="center"><small>Fonte: elaboração própria, 2025.</small></p>

O comportamento energético do banco de baterias está diretamente associado à profundidade de descarga. À medida que o valor de DoD aumenta, cresce também a energia disponibilizada em cada ciclo de operação.

Isso significa que valores mais elevados de DoD aumentam a fração da capacidade nominal efetivamente utilizada. Entretanto, embora essa condição favoreça maior aproveitamento energético no curto prazo, ela também submete as células a maior solicitação eletroquímica, podendo acelerar o processo de degradação ao longo do tempo.

Assim, a definição do limite de DoD constitui um compromisso entre energia disponível e preservação da vida útil do sistema.

---

## 7. Vida Útil

<p align="center">
  <img src="/img/bateria-dod-vida-util.jpg" width="600" />
</p>

<p align="center"><i>Figura 3 – Relação entre profundidade de descarga (DoD) e vida útil das baterias.</i></p>
<p align="center"><small>Fonte: elaboração própria, 2025.</small></p>

A vida útil do sistema de armazenamento é fortemente influenciada pela profundidade de descarga adotada. De modo geral, quanto maior o DoD utilizado em cada ciclo, menor tende a ser o número total de ciclos suportados pelo banco.

Assim, menores valores de DoD tendem a aumentar significativamente a durabilidade das baterias. Em aplicações reais, a limitação da profundidade de descarga é uma estratégia importante para equilibrar desempenho energético e longevidade do sistema, especialmente em instalações experimentais e de pesquisa que demandam repetibilidade operacional e alta confiabilidade.

---

## 8. Sistema BMS

<p align="center">
  <img src="/img/bms-logica.png" width="700" />
</p>

<p align="center"><i>Figura 4 – Sistema de gerenciamento de baterias (BMS).</i></p>
<p align="center"><small>Fonte: elaboração própria, 2025.</small></p>

O **Battery Management System (BMS)** é responsável por garantir a operação segura e eficiente do banco de baterias, monitorando continuamente as condições elétricas e térmicas do sistema.

Entre suas principais funções, destacam-se:

- proteção contra sobrecarga;
- proteção contra descarga profunda;
- controle térmico;
- balanceamento das células;
- monitoramento de tensão e corrente;
- comunicação com o sistema supervisório e com os inversores.

A atuação do BMS é essencial para a preservação da integridade do banco de baterias, uma vez que evita condições críticas de operação e contribui para o aumento da confiabilidade e da vida útil do sistema.

---

## 9. Integração Operacional

O banco de baterias atua em conjunto com o sistema fotovoltaico e com os inversores híbridos, permitindo diferentes estratégias operacionais dentro da microrrede.

Entre as principais funções operacionais, destacam-se:

- armazenamento do excedente de geração fotovoltaica;
- fornecimento de energia em períodos de baixa geração;
- suporte às cargas em condições específicas de operação;
- auxílio à estabilidade energética do sistema;
- melhoria da qualidade de energia e da continuidade de fornecimento.

Essa integração torna possível avaliar cenários conectados à rede, modos híbridos e operação isolada, ampliando o potencial experimental da instalação.

---

## 10. Considerações Técnicas

O banco de baterias desempenha papel central na microrrede, pois amplia a capacidade de gerenciamento energético e fornece suporte operacional em diferentes cenários de funcionamento.

Sua presença permite investigar estratégias de controle, autonomia, flexibilidade de operação e interação entre geração, armazenamento e consumo. Além disso, a correta especificação dos parâmetros elétricos, energéticos e operacionais é essencial para garantir segurança, desempenho e longevidade do sistema.

Assim, o sistema de armazenamento deve ser entendido como um subsistema fundamental para a proposta experimental da microrrede, contribuindo diretamente para estudos em qualidade de energia, eficiência, confiabilidade e controle de sistemas elétricos modernos.