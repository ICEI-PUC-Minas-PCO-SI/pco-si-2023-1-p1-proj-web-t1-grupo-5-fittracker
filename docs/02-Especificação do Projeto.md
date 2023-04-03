# Especificações do Projeto

<span style="color:red">Pré-requisitos: <a href="1-Documentação de Contexto.md"> Documentação de Contexto</a></span>

Nesta seção, foram abordados diferentes tópicos, incluindo persona, histórias de usuários, requisitos funcionais e não funcionais, restrições e outras considerações importantes.
As personas são perfis fictícios que representam diferentes tipos de usuários que podem usar o sistema. Essas personas incluem informações como idade, gênero, nível de atividade física, interesses e objetivos de fitness, entre outras informações relevantes. As histórias de usuários ajudam a entender as necessidades e expectativas dos diferentes usuários que utilizarão o sistema. Os requisitos funcionais e não funcionais definem as funcionalidades e recursos que o sistema deve ter. As restrições são fatores limitantes que podem influenciar o escopo e a viabilidade do projeto. Essas restrições precisam ser cuidadosamente avaliadas e gerenciadas para garantir que o projeto possa ser concluído com sucesso e dentro dos parâmetros estabelecidos.
Todos esses tópicos são importantes para garantir que o sistema atenda às necessidades dos usuários, tenha um desempenho satisfatório e seja concluído dentro das condições estabelecidas.

## Personas

A persona criada para este projeto é Ana, uma analista de sistemas de 30 anos que quer perder peso e melhorar sua saúde geral. Ela tem um estilo de vida sedentário e tem dificuldade em encontrar tempo para se exercitar. Ana precisa de um sistema que possa ajudá-la a definir metas realistas e alcançáveis, monitorar sua atividade física e se motivar para manter-se no caminho certo.

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

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade |
|------|-----------------------------------------|----|
|RF-001| Permitir que os usuários se cadastrem e criem um perfil, incluindo informações como nome, idade, peso, altura e objetivos | ALTA | 
|RF-002| Permitir que os treinadores criem planos de treino personalizados para cada usuário, com base em seus objetivos, histórico de exercícios e limitações físicas | ALTA |
|RF-003| Exibir os treinos e exercícios, com informações sobre as técnicas corretas de exercícios, repetições e séries | MÉDIA | 
|RF-004| Permitir que os usuários monitorem seu progresso ao longo do tempo, incluindo estatísticas como tempo gasto em exercícios e peso perdido | MÉDIA | 

### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001|O sistema deve ser fácil de usar e intuitivo, com uma interface amigável que permita aos usuários acessar e interagir com o sistema facilmente | MÉDIA | 
|RNF-002| O sistema deve estar disponível 24 horas por dia, 7 dias por semana, para que os usuários possam acessá-lo a qualquer momento |  MÉDIA |
|RNF-003| O sistema deve ser rápido e responsivo, com tempos de carregamento rápidos e sem atrasos ou falhas durante o uso |  BAIXA | 
|RF-004| Permitir que os usuários monitorem seu progresso ao longo do tempo, incluindo estatísticas como tempo gasto em exercícios e peso perdido | ALTA | 
|RF-005| Permitir a edição de informações do usuário, como peso, dieta| MÉDIA | 
|RF-006| Permitir que treinadores disponibilizem dicas e conteúdos motivacionais aleatórios. | MÉDIA | 

![WhatsApp Image 2023-03-26 at 16 12 10](https://user-images.githubusercontent.com/96788718/228094972-75b4c0dc-adb3-4a2c-94c3-17d7a62b74f6.jpeg)
## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| O projeto deverá ser entregue até o final do semestre |
|02| O sistema deve ser projetado para atender às necessidades de uma ampla variedade de usuários, incluindo aqueles com diferentes níveis de experiência em fitness, idades, gêneros, etnias e capacidades físicas |
|03| O projeto deve ser executado dentro do escopo definido, incluindo as funcionalidades, recursos e requisitos acordados |
