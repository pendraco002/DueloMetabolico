# Duelo Metabólico 🧬

Um aplicativo educacional gamificado para aprendizado de metabolismo e sistemas biológicos, desenvolvido em React Native + Expo.

## 📋 Sobre o Projeto

O Duelo Metabólico é uma ferramenta de estudo interativa que auxilia estudantes da área de saúde no aprendizado de conceitos de metabolismo através de um sistema de quiz com dicas progressivas.

### 🎯 Características Principais

- **Sistema de Dicas Progressivas**: 3 dicas por carta com pontuação decrescente (15/10/5 pontos)
- **Modos de Jogo**: Individual e Dupla
- **Tipos de Partida**: Duelo Rápido (10 cartas) e Prática Focada (por categoria)
- **Base de Dados**: 50+ cartas educacionais sobre metabolismo
- **Interface Responsiva**: Design adaptado para diferentes tamanhos de tela
- **Feedback Educacional**: Explicações detalhadas para cada resposta

## 🎮 Modos de Jogo

### Modo Individual
- **Duelo Rápido**: 10 cartas aleatórias para partida rápida
- **Prática Focada**: Estudo direcionado por sistema biológico

### Modo Dupla
- Sistema "Passa e Joga" entre dois jogadores
- Placar separado e indicação visual de turno
- Competição pela maior pontuação

## 🏗️ Arquitetura Técnica

### Stack Tecnológico
- **Framework**: React Native + Expo SDK 53
- **Navegação**: React Navigation 6
- **Gerenciamento de Estado**: Context API com useReducer
- **Estilização**: StyleSheet com sistema de design consistente
- **Compatibilidade**: iOS 13+ e Android 8+

### Estrutura do Projeto
```
src/
├── context/          # Gerenciamento de estado global
├── data/            # Base de dados das cartas
├── screens/         # Telas da aplicação
├── styles/          # Sistema de design e temas
└── utils/           # Utilitários (preparado para expansão)
```

## 📱 Telas Implementadas

1. **HomeScreen**: Menu principal com navegação
2. **HowToPlayScreen**: Tutorial completo do jogo
3. **ModeSelectionScreen**: Configuração de modo e tipo de jogo
4. **GameScreen**: Interface principal do jogo
5. **ResultsScreen**: Estatísticas e histórico de respostas
6. **CreditsScreen**: Informações sobre o projeto

## 🎨 Design System

### Paleta de Cores
- **Primária**: #0077B6 (Azul médico)
- **Secundária**: #28A745 (Verde sucesso)
- **Erro**: #DC3545 (Vermelho alerta)
- **Background**: #FFFFFF (Branco)

### Tipografia
- **Títulos**: 24pt, bold
- **Corpo**: 16pt, regular
- **Dicas**: 16pt, medium
- **Botões**: 16pt, semibold

## 🚀 Como Executar

1. **Instalar dependências**:
   ```bash
   npm install
   ```

2. **Iniciar o servidor de desenvolvimento**:
   ```bash
   npm start
   # ou
   npx expo start
   ```

3. **Executar no dispositivo**:
   - Instale o app Expo Go no seu dispositivo
   - Escaneie o QR code exibido no terminal
   - Ou use um emulador iOS/Android

## 📚 Base de Dados Educacional

O aplicativo inclui 50+ cartas sobre temas como:
- Glicólise
- Ciclo de Krebs
- Cadeia Respiratória
- Metabolismo Lipídico
- Metabolismo Proteico
- Gliconeogênese

Cada carta contém:
- 3 dicas progressivas
- Resposta correta
- Explicação educacional detalhada
- Categorização por sistema biológico

## 🎯 Funcionalidades Implementadas

### ✅ Requisitos Funcionais Atendidos
- [x] Menu principal com navegação intuitiva
- [x] Modos Individual e Dupla
- [x] Sistema de dicas progressivas (15/10/5 pontos)
- [x] Base de dados com 50+ cartas
- [x] Validação de respostas (case-insensitive, sem acentos)
- [x] Feedback visual e textual imediato
- [x] Tela de resultados com estatísticas completas
- [x] Sistema de pontuação funcional
- [x] Explicações educacionais

### ✅ Requisitos Não-Funcionais Atendidos
- [x] Interface intuitiva e responsiva
- [x] Compatibilidade iOS/Android
- [x] Fontes legíveis (16pt+)
- [x] Contraste adequado
- [x] Transições suaves
- [x] Arquitetura escalável

## 🔮 Próximas Funcionalidades

- [ ] Sistema de som (feedback sonoro)
- [ ] Modo escuro
- [ ] Persistência de dados local
- [ ] Animações avançadas
- [ ] Sistema de conquistas
- [ ] Estatísticas históricas
- [ ] Mais categorias de cartas

## 👥 Contribuição

Este projeto foi desenvolvido como ferramenta educacional. Contribuições são bem-vindas através de:
- Sugestões de melhorias
- Novas cartas educacionais
- Correções de bugs
- Melhorias de UX/UI

## 📄 Licença

Desenvolvido para fins educacionais. O conteúdo científico foi baseado em literatura acadêmica reconhecida.

---

**Versão**: 1.0.0  
**Desenvolvido com** ❤️ **para a educação em saúde**