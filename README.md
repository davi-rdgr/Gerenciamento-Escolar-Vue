# Sistema de Integração Escolar

Aplicação web desenvolvida em Vue 3 para gerenciamento escolar, permitindo o controle de alunos, professores, turmas e notas. O sistema conta com três níveis de acesso — aluno, professor e administrador — cada um com funcionalidades específicas para seu perfil.

## Links

- [Deploy (Vercel)](https://gerenciamento-escolar-vue.vercel.app/)
- [Figma](https://www.figma.com/design/exarXeXItukUdm93RahGRP/Gerenciamento-escolar?node-id=0-1&p=f&t=7AgnD0kcJ5G9YDkg-0)

## Tecnologias

- Vue 3 + Vue Router + Pinia
- Vuetify 4
- Maska (máscaras de input)

## Instalação

```bash
npm install
```

## Iniciar projeto

```bash
npm run serve
```

## Usuários para teste

| Tipo | Login | Senha |
|---|---|---|
| Aluno | aluno | 123456 |
| Professor | professor | 123456 |
| Admin | admin | 123456 |

## Funcionalidades

**Aluno**
- Visualizar suas notas por disciplina

**Professor**
- Visualizar turmas e alunos
- Adicionar e editar notas dos alunos

**Admin**
- Gerenciar alunos, professores e turmas