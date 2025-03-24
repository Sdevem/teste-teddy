Quanto tempo levaria?
```
A estimativa para a conclusão desta atividade é de uma sprint de 2 semanas, dividida da seguinte forma:

4-5 dias para o Front-End (React + Vite).

5-6 dias para o Back-End (Nest.js, PostgreSQL e Dockerização).

5-6 dias para a Integração com AWS e Dockerização.

3-4 dias para Testes (fase de QA).
```
Quantos desenvolvedores/Qual a senioridade dos desenvolvedores?
```
1 Desenvolvedor Front-End (React + Vite): Nível Pleno-Sênior.

1 Desenvolvedor Back-End (Nest.js, PostgreSQL, Dockerização): Nível Pleno-Sênior.

1 Desenvolvedor Full-Stack (integração com AWS, segurança e escalabilidade): Nível Sênior.

1 Tester (QA): Nível Pleno-Sênior.
```

Justificativa da senioridade
```
O Front-End e o Back-End devem ser Pleno-Sêniores devido à complexidade das tecnologias envolvidas.

O Full-Stack deve ser Sênior para liderar a integração com AWS, além de garantir segurança e escalabilidade.

O Tester deve ter nível Pleno-Sênior para garantir uma fase de QA eficaz e abrangente.

Essas funções e prazos foram definidos com base na complexidade e nas responsabilidades de cada área.
```
Rodar a Aplicação 

- Clone o repositorio
```
https://github.com/Sdevem/teste-teddy.git
cd teste-teddy
```
- caso não tenha instaldo o Docker siga os seguintes passos
- Baixar o docker
```
Baixando o Docker no Windows
Para baixar o Docker no Windows, você deve acessar o site oficial do Docker Hub em https://hub.docker.com/editions/community/docker-ce-desktop-windows/ e clicar no botão “Download Docker Desktop for Windows”. O download iniciará automaticamente.

Depois de baixado, execute o Docker install, que terá o nome “Docker Desktop Installer.exe”. O instalador guiará você pelas próximas etapas para concluir a instalação do Docker em seu sistema.

Baixando o Docker no macOS
Para baixar o Docker no macOS, você deve acessar o site oficial do Docker Hub em https://hub.docker.com/editions/community/docker-ce-desktop-mac/ e clicar no botão “Download Docker Desktop for macOS”. O download iniciará automaticamente.

Depois de baixado, abra o arquivo “.dmg” e arraste o ícone do Docker para a pasta “Applications”. Depois de mover o Docker para a pasta, abra o aplicativo e siga as instruções para completar a instalação.

Baixando o Docker no Linux
Para baixar o Docker no Linux, você deve acessar o site oficial do Docker Hub em https://docs.docker.com/get-docker/ e escolher a versão do Docker que melhor se adequa ao seu sistema. A partir daí, siga as instruções do site para baixar e instalar o Docker em seu sistema.

Concluído o download, você tem o Docker pronto para ser instalado. Próxima etapa: Instalando o Docker.
```
  
- instalar o docker
```
Agora que você já baixou o Docker, vamos seguir para a instalação. Para realizar o processo de instalação, siga o passo a passo abaixo:

Execute o arquivo de instalação que você baixou anteriormente;
Aceite os termos e condições de uso;
Escolha uma pasta de destino para a instalação do Docker;
Selecione os componentes que deseja instalar, como o Docker Engine e o Docker Compose;
Selecione as opções de configuração desejadas, como a criação de atalhos para o Docker;
Clique em “Install” e aguarde o processo de instalação ser concluído.
```

- Instalando dependencias
  ```
  npm install
  ```

 - Configutando banco de dados para o nestjs funcionar
```
- Rode o comando docker compose up --build
- Depois do conteiner subir acesse http://localhost:5050/login?next=/ no seu navegador 
- Utliede de login: admin@teddy.com  senha: pgadminteddy
- Depois de logar clique com o botão direito em servers -> regiter -> server
- Em Geral coloque em name um nome sua escolhar
- Para a aba conection siga as imagem abaixo

![image](https://github.com/user-attachments/assets/b8244ee0-d059-49b1-ad06-e025fb5116e4)

você tem que setar a senha para postgres
```

rodar a api
```
rode novamente o comado docker compose up --build quando o docker para de subir a api estata rodando na porta 3000
```

Documentação com Swagger

```
acesse a documentação pelo seu navegador no seguinte link http://localhost:3000/api#/
```

***Arquitetura do Sistema***

- Front-End (React + Vite):
```
Front-End (React + Vite):

O código será armazenado no GitHub e compilado com Vite.

Após a compilação, será enviado para um bucket S3.

O CloudFront fornecerá cache de conteúdo e distribuição global rápida.
```
- Back-End (Nest.js + PostgreSQL + AWS ECS/EC2):
```
Back-End (Nest.js + PostgreSQL + AWS ECS/EC2):

O back-end será containerizado com Docker e enviado para Amazon ECS para orquestração de containers (ou EC2, se preferir).

O banco de dados será hospedado no Amazon RDS (PostgreSQL) para alta disponibilidade e backups fáceis.
```
- Integração e Deploy (CI/CD):
```
GitHub Actions realizará build e testes.

Após aprovação, o código será integrado ao AWS CodePipeline para deploy automático.
```
- CodePipeline:
```
Baixar o código do GitHub.

Executar testes automatizados.

Build da aplicação e push para ECS ou deploy direto para EC2.

Deploy para AWS.
```

- Monitoramento e Escalabilidade:

```
CloudWatch será usado para monitoramento e logs.

Auto Scaling no ECS ajustará os recursos automaticamente conforme a demanda.

O código será armazenado no GitHub e compilado com Vite.

Após a compilação, será enviado para um bucket S3.

O CloudFront fornecerá cache de conteúdo e distribuição global rápida.
```
