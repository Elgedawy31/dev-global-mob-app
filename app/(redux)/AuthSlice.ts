import { PROXY } from "@/constants/Index";
import { getItem, setItem } from "@/utils/AsyncStorage";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const loginAction = createAsyncThunk(
  "auth/login",
  async (values: any, { rejectWithValue, getState }: any) => {
    try {
      const response = await axios.post(
        `${PROXY}/users/login`,

        values
      );

      const data = response.data;
      if (data.error) {
        return rejectWithValue(data);
      }
      if (data) {
        await setItem("user", JSON.stringify(data));
        return data;
      }
    } catch (error: any) {
      if (error?.response.data?.error) {
        return rejectWithValue({
          message: error?.response?.data?.error,
        });
      } else if (error?.response?.data?.message) {
        return rejectWithValue({
          message: error?.response?.data?.message,
        });
      } else if (error?.response?.data?.errors?.password) {
        return rejectWithValue({
          message: error?.response?.data?.errors?.password,
        });
      }
    }
  }
);
export const getUserByID = createAsyncThunk(
  "auth/getUser",
  async ({ id, token }: any, { rejectWithValue, getState }: any) => {
    try {
      const response = await axios.get(`${PROXY}/users/findbyid/${id}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      const data = response.data;
      if (data.error) {
        return rejectWithValue(data);
      }
      if (data) {
        return data;
      }
    } catch (error: any) {
      if (error?.response.data?.error) {
        return rejectWithValue({
          message: error?.response?.data?.error,
        });
      } else if (error?.response?.data?.message) {
        return rejectWithValue({
          message: error?.response?.data?.message,
        });
      } else if (error?.response?.data?.errors?.password) {
        return rejectWithValue({
          message: error?.response?.data?.errors?.password,
        });
      }
    }
  }
);
export const updateUser = createAsyncThunk(
  "auth/updateUser",
  async ({ id, token, values }: any, { rejectWithValue, getState }: any) => {
    try {
      const response = await axios.patch(
        `${PROXY}/users/update/${id}`,
        values,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const data = response.data;
      if (data.error) {
        return rejectWithValue(data);
      }
      if (data) {
        return data;
      }
    } catch (error: any) {
      if (error?.response.data?.error) {
        return rejectWithValue({
          message: error?.response?.data?.error,
        });
      } else if (error?.response?.data?.message) {
        return rejectWithValue({
          message: error?.response?.data?.message,
        });
      } else if (error?.response?.data?.errors?.password) {
        return rejectWithValue({
          message: error?.response?.data?.errors?.password,
        });
      }
    }
  }
);
export const changePassword = createAsyncThunk(
  "auth/changepassword",
  async ({ id, token, values }: any, { rejectWithValue, getState }: any) => {
    try {
      const response = await axios.patch(
        `${PROXY}/users/update/${id}`,
        values,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const data = response.data;
      if (data.error) {
        return rejectWithValue(data);
      }
      if (data) {
        return data;
      }
    } catch (error: any) {
      if (error?.response.data?.error) {
        return rejectWithValue({
          message: error?.response?.data?.error,
        });
      } else if (error?.response?.data?.message) {
        return rejectWithValue({
          message: error?.response?.data?.message,
        });
      } else if (error?.response?.data?.errors?.password) {
        return rejectWithValue({
          message: error?.response?.data?.errors?.password,
        });
      }
    }
  }
);
const initialState: {
  loading: boolean;
  loginDetails: any;
  error: any;
  isLogined: boolean;
  user: any;
  updated:boolean
  passwordChanged:boolean
} = {
  loading: false,
  loginDetails: {token:'token' , user:{}},
  error: null,
  isLogined: true,
  user: null,
  updated:false,
  passwordChanged:false
};
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    reset(state) {
      state.loading = false;
      state.error = null;
      state.isLogined = false;
      state.updated = false;
      state.passwordChanged = false;
    },
    logoutReducer(state) {
      state.loginDetails = null;
    },
    logintReducer(state, action: any) {
      state.loginDetails = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loginAction.pending, (state, action) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(loginAction.fulfilled, (state, action) => {
      state.loading = false;
      state.loginDetails = action?.payload;
      state.error = null;
    });
    builder.addCase(
      loginAction.rejected,
      (state, action: { type: string; payload: any }) => {
        state.loading = false;
        state.error = action.payload.message;
      }
    );
    builder.addCase(getUserByID.pending, (state, action) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(getUserByID.fulfilled, (state, action) => {
      state.loading = false;
      state.user = action?.payload;
      state.error = null;
    });
    builder.addCase(
      getUserByID.rejected,
      (state, action: { type: string; payload: any }) => {
        state.loading = false;
        state.error = action.payload.message;
      }
    );
    builder.addCase(updateUser.pending, (state, action) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(updateUser.fulfilled, (state, action) => {
      state.loading = false;
      state.user = action?.payload;
      state.updated = true;
      state.error = null;
    });
    builder.addCase(
      updateUser.rejected,
      (state, action: { type: string; payload: any }) => {
        state.loading = false;
        state.error = action.payload.message;
      }
    );
    builder.addCase(changePassword.pending, (state, action) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(changePassword.fulfilled, (state, action) => {
      state.loading = false;
      state.user = action?.payload;
      state.passwordChanged = true;
      state.error = null;
    });
    builder.addCase(
      changePassword.rejected,
      (state, action: { type: string; payload: any }) => {
        state.loading = false;
        state.error = action.payload.message;
      }
    );
  },
});

export const { reset, logoutReducer, logintReducer } = authSlice.actions;
const authReducer = authSlice.reducer;

export default authReducer;
