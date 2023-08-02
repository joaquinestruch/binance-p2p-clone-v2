import create from "zustand";
import zukeeper from 'zukeeper';

export const useStore = create(zukeeper ((set) => ({
  crypto: "btc",
  changeCrypto: (newCrypto) => set({ crypto: newCrypto }),

  tradeType: "buy",
  changeTradeType: (newType) => set({tradeType: newType}),

  filterAmount: Infinity,
  changeFilterAmount: (newAmount) => set({filterAmount: newAmount}),

  filterUserType: false,
  changeFilterUserType: (newType) => set({filterUserType: newType}),


  fiat: "ARS",
  changeFiat: (newFiat) => set({fiat: newFiat})

})));