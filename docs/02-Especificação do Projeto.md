# Especificações do Projeto

<span style="color:red">Pré-requisitos: <a href="1-Documentação de Contexto.md"> Documentação de Contexto</a></span>

Nesta seção, foram abordados diferentes tópicos, incluindo persona, histórias de usuários, requisitos funcionais e não funcionais, restrições e outras considerações importantes.
As personas são perfis fictícios que representam diferentes tipos de usuários que podem usar o sistema. Essas personas incluem informações como idade, gênero, nível de atividade física, interesses e objetivos de fitness, entre outras informações relevantes. As histórias de usuários ajudam a entender as necessidades e expectativas dos diferentes usuários que utilizarão o sistema. Os requisitos funcionais e não funcionais definem as funcionalidades e recursos que o sistema deve ter. As restrições são fatores limitantes que podem influenciar o escopo e a viabilidade do projeto. Essas restrições precisam ser cuidadosamente avaliadas e gerenciadas para garantir que o projeto possa ser concluído com sucesso e dentro dos parâmetros estabelecidos.
Todos esses tópicos são importantes para garantir que o sistema atenda às necessidades dos usuários, tenha um desempenho satisfatório e seja concluído dentro das condições estabelecidas.

## Personas

A persona criada para este projeto é Ana, uma analista de sistemas de 30 anos que quer perder peso e melhorar sua saúde geral. Ela tem um estilo de vida sedentário e tem dificuldade em encontrar tempo para se exercitar. Ana precisa de um sistema que possa ajudá-la a definir metas realistas e alcançáveis, monitorar sua atividade física e se motivar para manter-se no caminho certo.

Enumere e detalhe as personas da sua solução. Para tanto, baseie-se tanto nos documentos disponibilizados na disciplina e/ou nos seguintes links:

> **Links Úteis**:
> - [Rock Content](https://rockcontent.com/blog/personas/)
> - [Hotmart](https://blog.hotmart.com/pt-br/como-criar-persona-negocio/)
> - [O que é persona?](https://resultadosdigitais.com.br/blog/persona-o-que-e/)
> - [Persona x Público-alvo](https://flammo.com.br/blog/persona-e-publico-alvo-qual-a-diferenca/)
> - [Mapa de Empatia](https://resultadosdigitais.com.br/blog/mapa-da-empatia/)
> - [Mapa de Stalkeholders](https://www.racecomunicacao.com.br/blog/como-fazer-o-mapeamento-de-stakeholders/)
>
Lembre-se que você deve ser enumerar e descrever precisamente e personalizada todos os clientes ideais que sua solução almeja.

## Histórias de Usuários

Com base na análise das personas foram identificadas as seguintes histórias de usuários:

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                 |
|--------------------|------------------------------------|----------------------------------------|
|Usuário do sistema  | Definir objetivos realista de exercicios e acompanhar meu progresso ao longo do tempo | Me manter motivado a alcançar meus objetivos de saúde |
|Usuário do sistema  | Acessar uma ampla variedade de treinos e atividades físicas | Experimentar novas formas de exercitar e evitar a monotonia |
|Usuário do sistema  | Ter acesso a recursos de orientação e instruções sobre como realizar corretamente cada exercicio | Evitar lesões e melhorar a técnica |
|Usuário do sistema  | Registrar minha dieta e ver como ela se relaciona com meu progresso | Ajustar minha alimentação para atingir meus objetivos |
|Treinador           | Criar e personalizar planos de treino para cada usuário | Que possam alcançar os objetivos com segurança e eficiência |
|Treinador           | Monitorar o progresso dos usuários e ajustar seus treinos de acordo com o seu desempenho | Que possam ter acompanhamento adequado e individualizado |
|Treinador           | Oferecer orientação e suporte aos usuários, oferecendo conselhos de nutrição e técnicas | Que possam alcançar os objetivos com sucesso |
|Treinador           | Acompanhar a participação dos usuários nos treinos e identificar aqueles que precisam de mais incentivo | Oferecer ajuda personalizada e mantê-los motivados |
|Treinador           | Atualizar e adicionar novos planos de treinamento e exercícios | Que os usuários tenham uma variedade de opções e escolher treinos que melhor se adaptem às suas necessidades |


## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto.

### Requisitos Funcionais

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto.
Requisitos funcionais:
Registro de usuário: O sistema deve permitir que os usuários se cadastrem e criem um perfil, incluindo informações como nome, idade, peso, altura e objetivos de fitness.
Criação de plano de treino: O sistema deve permitir que os treinadores criem planos de treino personalizados para cada usuário, com base em seus objetivos de fitness, histórico de exercícios e limitações físicas.
Exibição de treinos e exercícios: O sistema deve exibir os treinos e exercícios, com informações sobre as técnicas corretas de exercícios, repetições e séries.
Monitoramento de progresso: O sistema deve permitir que os usuários monitorem seu progresso ao longo do tempo, incluindo estatísticas como tempo gasto em exercícios e peso perdido.


|ID    | Descrição do Requisito  | Prioridade |
|------|-----------------------------------------|----|
|RF-001| Permitir que o usuário cadastre tarefas | ALTA | 
|RF-002| Emitir um relatório de tarefas no mês   | MÉDIA |


### Requisitos não Funcionais

Usabilidade: O sistema deve ser fácil de usar e intuitivo, com uma interface amigável que permita aos usuários acessar e interagir com o sistema facilmente.
Performance: O sistema deve ser rápido e responsivo, com tempos de carregamento rápidos e sem atrasos ou falhas durante o uso.
Disponibilidade: O sistema deve estar disponível 24 horas por dia, 7 dias por semana, para que os usuários possam acessá-lo a qualquer momento.

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| O sistema deve ser responsivo para rodar em um dispositivos móvel | MÉDIA | 
|RNF-002| Deve processar requisições do usuário em no máximo 3s |  BAIXA | 

Com base nas Histórias de Usuário, enumere os requisitos da sua solução. Classifique esses requisitos em dois grupos:

- [Requisitos Funcionais
 (RF)](https://pt.wikipedia.org/wiki/Requisito_funcional):
 correspondem a uma funcionalidade que deve estar presente na
  plataforma (ex: cadastro de usuário).
- [Requisitos Não Funcionais
  (RNF)](https://pt.wikipedia.org/wiki/Requisito_n%C3%A3o_funcional):
  correspondem a uma característica técnica, seja de usabilidade,
  desempenho, confiabilidade, segurança ou outro (ex: suporte a
  dispositivos iOS e Android).
Lembre-se que cada requisito deve corresponder à uma e somente uma
característica alvo da sua solução. Além disso, certifique-se de que
todos os aspectos capturados nas Histórias de Usuário foram cobertos.

## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| O projeto deverá ser entregue até o final do semestre |
|02| Não pode ser desenvolvido um módulo de backend        |


Enumere as restrições à sua solução. Lembre-se de que as restrições geralmente limitam a solução candidata.

> **Links Úteis**:
> - [O que são Requisitos Funcionais e Requisitos Não Funcionais?](https://codificar.com.br/requisitos-funcionais-nao-funcionais/)
> - [O que são requisitos funcionais e requisitos não funcionais?](https://analisederequisitos.com.br/requisitos-funcionais-e-requisitos-nao-funcionais-o-que-sao/)
