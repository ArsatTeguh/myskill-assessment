import { Getter } from '@/lib/API/portofolio';
import { PortfolioItem, PortoState, initialState } from '@/lib/type';
import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchPortoData = createAsyncThunk(
  'porto/fetchPortoData',
  async () => {
    const data = await Getter();
    if (data) {
      return data[0];
    }
  },
);

const PortoSlice = createSlice({
  name: 'porto',
  initialState,
  reducers: {
    setData: (state, action: PayloadAction<Partial<PortoState>>) => (
      { ...state, ...action.payload }
    ),

    setImage: (
      state,
      action: PayloadAction<{ name: 'banner' | 'avatar'; file: string }>,
    ) => {
      const { name, file } = action.payload;
      state[name] = file;
    },

    addPortfolio: (state, action: PayloadAction<PortfolioItem>) => {
      state.portfolio.push(action.payload);
    },

    removePortofolio: (state, action: PayloadAction<{ id: number }>) => {
      const { id } = action.payload;
      if (state.portfolio.length > 1) {
        state.portfolio = state.portfolio.filter((item) => item.id !== id);
      }
    },

    changePortofolio: (
      state,
      action: PayloadAction<{
        id: number;
        key: keyof PortfolioItem;
        value: string | Date;
      }>,
    ) => {
      const { id, key, value } = action.payload;
      state.portfolio = state.portfolio.map((portfolioItem) => {
        if (portfolioItem.id === id) {
          return {
            ...portfolioItem,
            [key]: value,
          };
        }
        return portfolioItem;
      });
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPortoData.fulfilled, (state, action) => action.payload)
      .addCase(fetchPortoData.rejected, (state, action) => {
        console.error('Error fetching data:', action.error);
      });
  },
});

export const {
  setData,
  addPortfolio,
  setImage,
  changePortofolio,
  removePortofolio,
} = PortoSlice.actions;

export default PortoSlice.reducer;
