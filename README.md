# Cardápio — Aplicativo Expo (React Native)

Este repositório contém um aplicativo móvel criado com Expo e React Native, baseado no template "Focus". O objetivo do app é apresentar um Cardápio digital: listagem de itens, categorias, busca e visualização de detalhes.

## Tecnologias

- React Native
- Expo
- Router baseado em arquivos (diretório `app`)
- JavaScript / TypeScript (conforme o projeto)

## Recursos principais

- Listagem de pratos/productos por categoria
- Busca simples por nome
- Tela de detalhes do item com descrição, preço e imagem
- Estrutura pronta para integrar carrinho/pedidos (opcional)

> Observação: adapte as funcionalidades acima conforme o código existente no diretório `app`.

## Estrutura do projeto

- `app/` — telas e rotas do aplicativo (file-based routing do Expo)
- `assets/` — imagens e recursos estáticos
- `package.json` — scripts e dependências
- `app-example/` — código exemplo gerado pelo starter (se presente)

## Instalação

1. Instalar dependências

   ```bash
   npm install
   ```

2. Iniciar o servidor de desenvolvimento do Expo

   ```bash
   npx expo start
   ```

3. Opções de execução

   - Abrir no Expo Go (se compatível)
   - Executar em emulador Android:

   ```bash
   npx expo run:android
   ```

   - Executar em simulador iOS (macOS):

   ```bash
   npx expo run:ios
   ```

## Comandos úteis

- `npm install` — instalar dependências
- `npx expo start` — iniciar Metro / painel do Expo
- `npm run reset-project` — mover o starter para `app-example` e criar uma `app` vazia (presente no template)

## Desenvolvimento do Cardápio

- Arquivos de dados: crie um JSON em `app/data/menu.json` ou integre uma API para gerenciar itens do cardápio.
- Componentes sugeridos:
  - `MenuList` — lista de itens com paginação/scroll
  - `MenuItemCard` — cartão com imagem, nome e preço
  - `ItemDetails` — tela de detalhes
  - `SearchBar` / `CategoryFilter` — filtros e busca

Exemplo simples de estrutura de item (JSON):

```json
{
  "id": "1",
  "title": "Pizza Margherita",
  "category": "Pizzas",
  "price": 29.9,
  "description": "Molho de tomate, mussarela e manjericão",
  "image": "./assets/pizza-margherita.jpg"
}
```

## Boas práticas

- Use `nvm` para gerenciar versões do Node.js ao desenvolver localmente.
- Mantenha imagens otimizadas em `assets/` para reduzir o tamanho do app.
- Separe lógica de UI e estado: hooks/custom hooks para chamadas de API e gerenciamento de carrinho.

## Como contribuir

1. Faça um fork do projeto
2. Crie uma branch com a feature/bugfix
3. Abra um pull request descrevendo as alterações

## Licença

Verifique o arquivo `LICENSE` ou adicione a licença desejada antes de publicar.

---

Se quiser, eu adapto este README com base nas telas/arquivos reais do seu projeto — compartilhe os nomes das principais telas ou um exemplo de `menu.json` e eu atualizo o README automaticamente.
