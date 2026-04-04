---
title: Banco de Baterias
---

# Banco de Baterias

O sistema de armazenamento da microrrede da UFTM é composto por módulos de baterias de íons de lítio com tecnologia LiFePO₄, integrados aos inversores híbridos e ao sistema de automação. Sua função principal é armazenar parte da energia gerada pelo sistema fotovoltaico e disponibilizá-la conforme a condição operacional da instalação, ampliando a flexibilidade, a autonomia e a confiabilidade energética do sistema.

Além do papel de suporte operacional, o banco de baterias possui importância acadêmica e experimental, pois permite estudar estratégias de gerenciamento energético, desempenho em regime dinâmico, profundidade de descarga, autonomia e interação entre geração, armazenamento e cargas.

---

## 1. Visão Geral do Sistema

<p align="center">
  <img src="/img/banco-baterias.jpg" width="700" />
</p>

<p align="center"><i>Figura 7 – Banco de baterias Unipower UPLFP48-100Ah.</i></p>
<p align="center"><small>Fonte: elaboração própria, 2025.</small></p>

A Figura 7 apresenta o banco de baterias instalado na microrrede experimental. O conjunto está fisicamente integrado à infraestrutura elétrica do sistema e conectado aos inversores híbridos, permitindo operação coordenada com a geração fotovoltaica e com a rede elétrica.

Do ponto de vista funcional, esse subsistema atua como elemento de suporte energético, permitindo armazenar o excedente de geração e fornecê-lo posteriormente conforme a demanda das cargas e a estratégia de controle adotada.

---

## 2. Caracterização do Sistema

O sistema de armazenamento utiliza módulos de bateria do fabricante **Unipower**, modelo **UPLFP48-100Ah**, baseados em tecnologia **LiFePO₄ (Lítio Ferro Fosfato)**. Essa tecnologia foi selecionada por apresentar elevada segurança operacional, boa estabilidade térmica, alta eficiência energética e desempenho adequado para aplicações estacionárias e sistemas híbridos.

Entre as principais vantagens dessa tecnologia, destacam-se:

- elevada segurança química e térmica;
- boa eficiência de carga e descarga;
- longa vida útil;
- baixa degradação ao longo do tempo;
- integração com sistema de gerenciamento BMS;
- possibilidade de expansão modular em paralelo.

A operação em paralelo permite ampliar a capacidade energética total do banco sem alterar a tensão nominal do sistema, mantendo o barramento em 48 V e aumentando apenas a energia total disponível.

---

## 3. Dados Técnicos da Bateria

<p align="center"><b>Tabela 12 – Dados técnicos do módulo de bateria Unipower UPLFP48-100Ah</b></p>

| Parâmetro | Especificação |
|:----------|:-------------:|
| Fabricante | Unipower |
| Modelo | UPLFP48-100Ah |
| Tecnologia | LiFePO₄ (Lítio Ferro Fosfato) |
| Tensão nominal | 48 V |
| Capacidade nominal | 100 Ah |
| Energia nominal | aproximadamente 5 kWh |
| Faixa de tensão de operação | 42 – 54,6 V |
| Corrente máxima contínua de descarga | 100 A |
| Corrente máxima contínua de carga | 50 A |
| Potência máxima contínua | aproximadamente 4,8 kW |
| Profundidade de descarga recomendada (DoD) | até 80 % |
| Eficiência energética | superior a 95 % |
| Vida útil típica | superior a 2000 ciclos (80 % DoD) |
| Temperatura de operação | −10 °C a +45 °C |
| Sistema de gerenciamento | BMS integrado |
| Comunicação | CAN / RS-485 |
| Tipo de instalação | estacionária |
| Configuração elétrica | paralelável |
| Grau de segurança | alta estabilidade térmica |

<p align="center"><small>Fonte: Manual técnico da Unipower (adaptado), 2025.</small></p>

Os dados apresentados são fundamentais para o dimensionamento elétrico, definição dos limites operacionais, integração com os inversores híbridos e avaliação do desempenho do banco de baterias ao longo da operação da microrrede.

---

## 4. Dimensionamento Energético e Autonomia

A energia total armazenada para um conjunto de `n` módulos pode ser estimada por:

**Equação 1 – Energia total armazenada**  
**Etotal = n × 5 kWh**

Essa relação mostra que a expansão modular mantém a tensão nominal do sistema em 48 V e aumenta apenas a capacidade energética total disponível.

A energia útil disponível depende da profundidade de descarga admissível e pode ser estimada por:

**Equação 2 – Energia útil disponível**  
**Eutil = Enominal × DoD**

Considerando um módulo com energia nominal aproximada de 5 kWh e profundidade de descarga de 80 %, obtém-se:

**Eutil = 5 × 0,8 = 4 kWh**

A autonomia aproximada para uma carga média pode ser estimada por:

**Equação 3 – Autonomia do banco de baterias**  
**t = Eutil / Pcarga**

onde:

- `t` = autonomia estimada, em horas;
- `Eutil` = energia útil disponível, em kWh;
- `Pcarga` = potência média da carga, em kW.

Para um único módulo, têm-se os seguintes exemplos de autonomia:

- para carga de 0,5 kW: `t = 4 / 0,5 = 8 h`
- para carga de 1,0 kW: `t = 4 / 1,0 = 4 h`
- para carga de 2,0 kW: `t = 4 / 2,0 = 2 h`

Essas estimativas são importantes para o sistema de controle da microrrede, pois permitem definir estratégias de uso do armazenamento de acordo com o estado de carga e a potência demandada pelas cargas conectadas.

---

## 5. Parâmetros Elétricos de Operação

<p align="center"><b>Tabela 13 – Parâmetros elétricos de operação do módulo de bateria LiFePO₄ Unipower</b></p>

| Parâmetro | Valor |
|:----------|:-----:|
| Tensão nominal | 48 V |
| Faixa de tensão de operação | 42 – 54,6 V |
| Corrente máxima contínua de carga | 50 A |
| Corrente máxima contínua de descarga | 100 A |
| Potência máxima contínua | aproximadamente 4,8 kW |
| DoD recomendado | até 80 % |
| Eficiência energética | superior a 95 % |

<p align="center"><small>Fonte: elaboração própria com base no manual técnico da Unipower, 2025.</small></p>

Esses parâmetros definem os limites seguros de tensão, corrente e potência do sistema de armazenamento, assegurando compatibilidade com os inversores híbridos e preservando a vida útil do banco de baterias.

---

## 6. Comportamento Energético

<p align="center">
  <img src="/img/bateria-dod-energia.jpg" width="600" />
</p>

<p align="center"><i>Figura 8 – Relação entre a profundidade de descarga (DoD) e a energia utilizável do banco de baterias LiFePO₄.</i></p>
<p align="center"><small>Fonte: elaboração própria, 2025.</small></p>

A Figura 8 ilustra a relação entre profundidade de descarga e energia utilizável. À medida que o DoD aumenta, cresce também a parcela da energia nominal efetivamente disponibilizada em cada ciclo de operação.

Esse comportamento favorece maior aproveitamento energético no curto prazo, porém impõe maior solicitação eletroquímica às células. Assim, a definição do limite de DoD deve buscar equilíbrio entre disponibilidade energética imediata e preservação do sistema de armazenamento.

---

## 7. Vida Útil

<p align="center">
  <img src="/img/bateria-dod-vida-util.jpg" width="600" />
</p>

<p align="center"><i>Figura 9 – Efeito da profundidade de descarga (DoD) sobre a vida útil relativa do banco de baterias LiFePO₄.</i></p>
<p align="center"><small>Fonte: elaboração própria, 2025.</small></p>

A Figura 9 mostra o efeito do DoD sobre a vida útil relativa do banco de baterias. Em termos práticos, valores menores de profundidade de descarga tendem a aumentar significativamente o número de ciclos suportados pelo sistema.

Desse modo, a operação com limites adequados de descarga constitui uma estratégia importante para aumentar a durabilidade do banco de baterias, especialmente em aplicações acadêmicas e experimentais que demandam repetibilidade operacional e elevada confiabilidade.

---

## 8. Integração do Banco de Baterias com os Inversores Híbridos

O banco de baterias encontra-se integrado aos inversores híbridos da microrrede, que realizam o condicionamento da energia e o gerenciamento do fluxo entre geração fotovoltaica, armazenamento, cargas e rede elétrica.

Essa integração é realizada por meio de protocolos de comunicação como **CAN** e **RS-485**, permitindo troca contínua de informações operacionais. Com isso, os inversores podem monitorar estado de carga, tensão, corrente e temperatura, ajustando automaticamente os limites de carga e descarga conforme as condições reais do sistema.

Do ponto de vista funcional, essa interface torna possível:

- armazenar o excedente de geração fotovoltaica;
- fornecer energia às cargas em períodos de baixa geração;
- participar da operação isolada da microrrede;
- reduzir a dependência da rede elétrica externa;
- melhorar a flexibilidade operacional do sistema.

---

## 9. Proteções Implementadas pelo Sistema de Gerenciamento BMS

<p align="center">
  <img src="/img/bms-logica.png" width="700" />
</p>

<p align="center"><i>Figura 10 – Lógica de operação e proteção do sistema BMS.</i></p>
<p align="center"><small>Fonte: elaboração própria, 2025.</small></p>

O módulo de bateria possui **BMS integrado**, responsável pelo monitoramento contínuo das grandezas elétricas e térmicas, bem como pela execução das funções de proteção e balanceamento das células.

Entre as principais funções do BMS, destacam-se:

- proteção contra sobrecarga;
- proteção contra descarga profunda;
- proteção contra curto-circuito;
- proteção contra sobretemperatura;
- proteção contra desequilíbrio entre células;
- balanceamento das células;
- comunicação com os inversores e com o sistema supervisório.

A atuação do BMS é essencial para garantir segurança operacional, preservar a integridade das células e prolongar a vida útil do conjunto.

---

## 10. Requisitos de Instalação

A instalação do banco de baterias deve atender às recomendações do fabricante e aos requisitos de segurança elétrica aplicáveis a sistemas de armazenamento estacionário.

Entre os principais requisitos, destacam-se:

- instalação em ambiente adequado, com ventilação e proteção contra umidade excessiva;
- respeito à faixa de temperatura de operação;
- conexões elétricas corretamente dimensionadas;
- comunicação adequada com os inversores e sistema de controle;
- organização física que permita inspeção, manutenção e operação segura;
- possibilidade de expansão modular por ligação em paralelo.

A configuração paralelável do sistema é especialmente importante no contexto da microrrede da UFTM, pois viabiliza estudos comparativos de autonomia, estratégias de controle e impacto do aumento da capacidade instalada sem necessidade de alterações estruturais significativas.

---

## 11. Considerações Técnicas

O banco de baterias desempenha papel estratégico na microrrede experimental da UFTM, ampliando a capacidade de gerenciamento energético e fornecendo suporte operacional em diferentes cenários de funcionamento.

Sua integração com os inversores híbridos, a presença de BMS integrado e a possibilidade de expansão modular em paralelo tornam esse subsistema particularmente adequado para aplicações acadêmicas, nas quais são importantes tanto a confiabilidade operacional quanto a flexibilidade para ensaios e pesquisas.

Assim, o sistema de armazenamento não deve ser entendido apenas como elemento complementar, mas como parte central da infraestrutura experimental da microrrede, contribuindo diretamente para estudos em autonomia, qualidade de energia, eficiência, confiabilidade e controle de sistemas elétricos modernos.