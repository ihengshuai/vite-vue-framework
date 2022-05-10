import { defineStore } from 'pinia';

interface IState {
  title: string;
}

interface IAction {
  setTitle: (title?: string) => void;
}

export const useCommonStore = defineStore<string, IState, any, IAction>(
  'commonStore',
  {
    state: () => ({
      title: 'vite-vue-framework',
    }),
    actions: {
      setTitle(title) {
        this.title = title ?? this.title;
      },
    },
  },
);
