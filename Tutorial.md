Vamos inicializar o git dentro desta pasta:

```sh
$ git init
```

Como esta pasta já existe, não vamos clonar o repositório, mas vamos adicionar o remoto do repositório. Vamos para GitHub...

1. Clique em "+" da barra de navegacao a direita do site de GitHub;
2. Clique em "New Repository"
3. No "Repository Name", escreva o nome do repositorio, por exemplo, `formulario-de-cadastro-pessoal`
4. Na "Description", descreva o projeto;
5. Selecione apenas "README". O ficheiro `.gitignore` deve ser seleciona apenas se for um projeto feito em React ou Vue ou em qualquer linguagem back-end;
6. Clique em "Create Repository"

Agora, como esta pasta ja existe antes do repositorio, vamos executar o comando:

```sh
git remote add origin https://github.com/CaiqueAraujo27/formulario-de-cadastro-pessoal.git
```

Realizamos o `pull` para pegar o `README`:

```sh
git pull origin main
```

Como Git Bash no Windows cria a branch `master` por padrnao, temos de trocar pela branch `main` porque a branch padrao no site de GitHub e `main`. 

```sh
git checkout -b main
```

Vamos adicionar os novos ficheiros:

```sh
git add .
```

O ponto `.` significa adicionar tudo. 

Vamos fazer um commit para descrever as mudancas e concluir a acao:

```sh
git commit -am "A inicializar o commit"
```

Vamos subir para o repositorio. Como e remoto, vamos ter de realizar com o sufixo de `-u origin master`:

