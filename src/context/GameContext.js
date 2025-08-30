import { createContext, useContext, useReducer } from 'react';
import { shuffleCards, getCardsByCategory } from '../data/cardsDatabase.js';

// Estado inicial do jogo
const initialState = {
  // Configuração do jogo
  gameMode: null, // 'individual' | 'dupla'
  gameType: null, // 'rapido' | 'focado'
  selectedCategory: null,
  
  // Jogadores
  players: [],
  currentPlayerIndex: 0,
  
  // Estado das cartas
  cards: [],
  currentCardIndex: 0,
  currentCard: null,
  
  // Estado da carta atual
  currentHintLevel: 1,
  attempts: 0,
  maxAttempts: 3,
  
  // Pontuação e estatísticas
  scores: {},
  correctAnswers: [],
  gameHistory: [],
  
  // Estado da interface
  gameStarted: false,
  gameFinished: false,
  showExplanation: false,
  feedback: null, // { type: 'success' | 'error', message: string }
};

// Ações do reducer
const gameActions = {
  SET_GAME_MODE: 'SET_GAME_MODE',
  SET_GAME_TYPE: 'SET_GAME_TYPE',
  SET_SELECTED_CATEGORY: 'SET_SELECTED_CATEGORY',
  SET_PLAYERS: 'SET_PLAYERS',
  START_GAME: 'START_GAME',
  NEXT_CARD: 'NEXT_CARD',
  REQUEST_HINT: 'REQUEST_HINT',
  SUBMIT_ANSWER: 'SUBMIT_ANSWER',
  SHOW_EXPLANATION: 'SHOW_EXPLANATION',
  NEXT_PLAYER: 'NEXT_PLAYER',
  FINISH_GAME: 'FINISH_GAME',
  RESET_GAME: 'RESET_GAME',
  SET_FEEDBACK: 'SET_FEEDBACK',
  CLEAR_FEEDBACK: 'CLEAR_FEEDBACK',
};

// Reducer do jogo
const gameReducer = (state, action) => {
  switch (action.type) {
    case gameActions.SET_GAME_MODE:
      const initialPlayers = action.payload === 'individual' ? ['Jogador'] : [];
      const initialScores = {};
      initialPlayers.forEach(player => {
        initialScores[player] = 0;
      });
      return {
        ...state,
        gameMode: action.payload,
        players: initialPlayers,
        scores: initialScores, // Initialize scores immediately
      };

    case gameActions.SET_GAME_TYPE:
      return {
        ...state,
        gameType: action.payload,
      };

    case gameActions.SET_SELECTED_CATEGORY:
      return {
        ...state,
        selectedCategory: action.payload,
      };

    case gameActions.SET_PLAYERS:
      const players = action.payload;
      const scores = {};
      players.forEach(player => {
        scores[player] = 0;
      });
      return {
        ...state,
        players,
        scores,
      };

    case gameActions.START_GAME:
      let gameCards = [];

      if (state.gameType === 'rapido') {
        // Duelo rápido: 10 cartas aleatórias
        gameCards = shuffleCards(action.payload.allCards).slice(0, 10);
      } else if (state.gameType === 'focado' && state.selectedCategory) {
        // Prática focada: cartas da categoria selecionada
        const categoryCards = getCardsByCategory(state.selectedCategory);
        gameCards = shuffleCards(categoryCards).slice(0, 15); // Máximo 15 cartas por categoria
      }

      // Ensure scores are properly initialized
      const ensuredScores = { ...state.scores };
      state.players.forEach(player => {
        if (!(player in ensuredScores)) {
          ensuredScores[player] = 0;
        }
      });

      return {
        ...state,
        cards: gameCards,
        currentCard: gameCards[0] || null,
        currentCardIndex: 0,
        currentHintLevel: 1,
        attempts: 0,
        gameStarted: true,
        gameFinished: false,
        correctAnswers: [],
        gameHistory: [],
        scores: ensuredScores, // Ensure scores are properly set
      };

    case gameActions.NEXT_CARD:
      const nextIndex = state.currentCardIndex + 1;
      const isLastCard = nextIndex >= state.cards.length;
      
      return {
        ...state,
        currentCardIndex: nextIndex,
        currentCard: isLastCard ? null : state.cards[nextIndex],
        currentHintLevel: 1,
        attempts: 0,
        showExplanation: false,
        gameFinished: isLastCard,
      };

    case gameActions.REQUEST_HINT:
      if (state.currentHintLevel < 3) {
        return {
          ...state,
          currentHintLevel: state.currentHintLevel + 1,
          attempts: 0, // Reset attempts for new hint
        };
      }
      return state;

    case gameActions.SUBMIT_ANSWER:
      const { answer, isCorrect } = action.payload;
      const currentPlayer = state.players[state.currentPlayerIndex];
      const newAttempts = state.attempts + 1;

      if (isCorrect) {
        // Resposta correta
        const points = state.currentCard.dicas[state.currentHintLevel - 1].pontos;
        const newScores = {
          ...state.scores,
          [currentPlayer]: (state.scores[currentPlayer] || 0) + points,
        };

        const answerRecord = {
          cardId: state.currentCard.id,
          question: state.currentCard.resposta,
          userAnswer: answer,
          isCorrect: true,
          hintsUsed: state.currentHintLevel,
          points: points,
          player: currentPlayer,
        };

        return {
          ...state,
          scores: newScores,
          correctAnswers: [...state.correctAnswers, answerRecord],
          gameHistory: [...state.gameHistory, answerRecord],
          showExplanation: true,
          attempts: 0,
          feedback: { type: 'success', message: `Correto! +${points} pontos` },
        };
      } else {
        // Resposta incorreta
        if (newAttempts >= state.maxAttempts) {
          // Máximo de tentativas atingido, passar para próxima dica ou revelar resposta
          if (state.currentHintLevel < 3) {
            return {
              ...state,
              currentHintLevel: state.currentHintLevel + 1,
              attempts: 0,
              feedback: { type: 'error', message: 'Tentativas esgotadas. Nova dica liberada!' },
            };
          } else {
            // Revelar resposta
            const answerRecord = {
              cardId: state.currentCard.id,
              question: state.currentCard.resposta,
              userAnswer: answer,
              isCorrect: false,
              hintsUsed: 3,
              points: 0,
              player: currentPlayer,
            };

            return {
              ...state,
              gameHistory: [...state.gameHistory, answerRecord],
              showExplanation: true,
              attempts: 0,
              feedback: { type: 'error', message: `Resposta: ${state.currentCard.resposta}` },
            };
          }
        } else {
          // Ainda há tentativas
          return {
            ...state,
            attempts: newAttempts,
            feedback: { type: 'error', message: `Incorreto. ${state.maxAttempts - newAttempts} tentativas restantes.` },
          };
        }
      }

    case gameActions.SHOW_EXPLANATION:
      return {
        ...state,
        showExplanation: true,
      };

    case gameActions.NEXT_PLAYER:
      if (state.gameMode === 'dupla') {
        return {
          ...state,
          currentPlayerIndex: (state.currentPlayerIndex + 1) % state.players.length,
        };
      }
      return state;

    case gameActions.FINISH_GAME:
      return {
        ...state,
        gameFinished: true,
      };

    case gameActions.RESET_GAME:
      return {
        ...initialState,
      };

    case gameActions.SET_FEEDBACK:
      return {
        ...state,
        feedback: action.payload,
      };

    case gameActions.CLEAR_FEEDBACK:
      return {
        ...state,
        feedback: null,
      };

    default:
      return state;
  }
};

// Context
const GameContext = createContext();

// Provider
export const GameProvider = ({ children }) => {
  const [state, dispatch] = useReducer(gameReducer, initialState);

  const value = {
    state,
    dispatch,
    actions: gameActions,
  };

  return (
    <GameContext.Provider value={value}>
      {children}
    </GameContext.Provider>
  );
};

// Hook personalizado
export const useGame = () => {
  const context = useContext(GameContext);
  if (!context) {
    throw new Error('useGame deve ser usado dentro de um GameProvider');
  }
  return context;
};

// Seletores úteis
export const gameSelectors = {
  getCurrentPlayer: (state) => {
    if (!state.players || state.players.length === 0) return null;
    return state.players[state.currentPlayerIndex] || null;
  },
  getTotalScore: (state, player) => {
    // Ensure we have a valid player and scores object
    if (!player || !state.scores || typeof state.scores !== 'object') {
      return 0;
    }
    return state.scores[player] || 0;
  },
  getCorrectAnswersCount: (state) => {
    if (!state.correctAnswers || !Array.isArray(state.correctAnswers)) {
      return 0;
    }
    return state.correctAnswers.length;
  },
  getTotalCards: (state) => {
    if (!state.cards || !Array.isArray(state.cards)) {
      return 0;
    }
    return state.cards.length;
  },
  getAccuracyRate: (state) => {
    if (!state.gameHistory || !Array.isArray(state.gameHistory)) {
      return 0;
    }
    const total = state.gameHistory.length;
    const correct = state.correctAnswers ? state.correctAnswers.length : 0;
    return total > 0 ? Math.round((correct / total) * 100) : 0;
  },
  getCurrentHint: (state) => {
    if (!state.currentCard || !state.currentCard.dicas) return null;
    return state.currentCard.dicas[state.currentHintLevel - 1] || null;
  },
  getRemainingAttempts: (state) => {
    const maxAttempts = state.maxAttempts || 3;
    const attempts = state.attempts || 0;
    return Math.max(0, maxAttempts - attempts);
  },
  isGameActive: (state) => state.gameStarted && !state.gameFinished,
};