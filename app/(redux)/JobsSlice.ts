import { PROXY } from "@/constants/Index";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import dayjs from "dayjs";

export const getAllJobs = createAsyncThunk(
  "jobs/getall",
  async ({ page, token }: any, { rejectWithValue, getState }: any) => {
    const user = getState().auth;
    try {
      const response = await axios.get(
        `${PROXY}/jobs/todayroutes/66d62c1a77ebc3d39ce9171b`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const data = response.data;
      if (data.error) {
        return rejectWithValue(data);
      }
      if (data) {
        return { data, token };
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
      } else if (error?.response?.data?.error?.password) {
        return rejectWithValue({
          message: error?.response?.data?.errors?.password,
        });
      }
    }
  }
);
export const jobDetails = createAsyncThunk(
  "jobs/details",
  async (
    { id, token }: { id: string; token: string },
    { rejectWithValue }: any
  ) => {
    try {
      const response = await axios.get(`${PROXY}/jobs/findbyid/${id}`, {
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
      } else if (error?.response?.data?.error?.password) {
        return rejectWithValue({
          message: error?.response?.data?.errors?.password,
        });
      }
    }
  }
);
export const updateJob = createAsyncThunk(
  "jobs/updatejob",
  async ({ id, token, values }: any, { rejectWithValue }: any) => {
    let tag = "Job Scheduled";
    switch (values?.status) {
      case "canceled":
        tag = "Job Canceled";
        break;

      case "completed":
        tag = "Job Completed";
        break;

      case "started":
        tag = "Job Started";
        break;

      default:
        tag = "Job Scheduled";
        break;
    }
    try {
      const response = await axios.patch(
        `${PROXY}/jobs/update/${id}`,
        { ...values , tag },
        {
          headers: {
            "Content-Type": "application/json",
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
      } else if (error?.response?.data?.error?.password) {
        return rejectWithValue({
          message: error?.response?.data?.errors?.password,
        });
      }
    }
  }
);
export const uploadPhoto = createAsyncThunk(
  "jobs/uploadphoto",
  async ({ id, token, values }: any, { rejectWithValue }: any) => {
    try {
      const response = await axios.post(
        `${PROXY}/jobs/uploadphotos/${id}`,
        values,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const data = response?.data;
      if (data?.error) {
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
      } else if (error?.response?.data?.error?.password) {
        return rejectWithValue({
          message: error?.response?.data?.errors?.password,
        });
      }
    }
  }
);

const initialState: {
  loading: boolean;
  allJobs: any;
  error: any;
  jobsCount: number;
  jobData: any;
  token: string;
  ended: boolean;
  firstJobID: string;
  updated: boolean;
  fError: any;
} = {
  loading: false,
  allJobs: [],
  jobData: {},
  jobsCount: 0,
  error: null,
  token: "",
  firstJobID: "",
  updated: false,
  fError: null,
  ended: false,
};
const jobsSlice = createSlice({
  name: "jobs",
  initialState,
  reducers: {
    reset(state) {
      state.loading = false;
      state.error = null;
      state.updated = false;
    },
    changeFirstJobID(state, action) {
      state.firstJobID = action?.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getAllJobs.pending, (state, action) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(getAllJobs.fulfilled, (state, action) => {
      const jobs =
        state?.allJobs[0]?._id === action.payload?.data?.[0].client?.jobs[0]?._id
          ? []
          : action.payload?.data;
      state.loading = false;
      state.allJobs = [...state.allJobs, ...jobs];
      state.jobsCount = action.payload?.data?.count;
      state.token = action?.payload?.token;
      state.error = null;
    });
    builder.addCase(
      getAllJobs.rejected,
      (state, action: { type: string; payload: any }) => {
        state.loading = false;
        state.error = action.payload.message;
      }
    );
    builder.addCase(jobDetails.pending, (state, action) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(jobDetails.fulfilled, (state, action) => {
      state.loading = false;
      state.jobData = action?.payload;
      state.error = null;
    });
    builder.addCase(
      jobDetails.rejected,
      (state, action: { type: string; payload: any }) => {
        state.loading = false;
        state.error = action.payload.message;
      }
    );
    builder.addCase(updateJob.pending, (state, action) => {
      state.loading = true;
      state.fError = null;
    }); 
    builder.addCase(updateJob.fulfilled, (state, action) => {
      let all;
      const jobsArray: any = [];
  
      state.allJobs.forEach((clientInfo: any) => {
        const clientJobs = clientInfo?.client?.jobs || [];
  
        clientJobs.forEach((job: any) => {
          jobsArray.push({
            ...job,
            client: {
              name: clientInfo.client.name,
              address: clientInfo.client.address,
              contacts: clientInfo.client.contacts,
            }
          });
        });
      });
      if (
        action?.payload.status === "scheduled" ||
        action?.payload.status === "canceled" ||
        action?.payload.status === "completed" ||
        action?.payload.status === "started"
      ) {
        all = jobsArray.map((ele: any) =>
          ele?._id === action?.payload?._id ? action?.payload : ele
        );
      } else {
        all = state.allJobs;
      }

      state.loading = false;
      state.updated = true;
      state.allJobs = all;
      state.jobData = action?.payload;
      state.firstJobID =
        action?.payload?.status === "canceled" ? all[0]?._id : state.firstJobID;
      state.fError = null;
    });
    builder.addCase(
      updateJob.rejected,
      (state, action: { type: string; payload: any }) => {
        state.loading = false;
        state.fError = action.payload?.message;
      }
    );
    builder.addCase(uploadPhoto.pending, (state, action) => {
      state.loading = true;
      state.fError = null;
    });
    builder.addCase(uploadPhoto.fulfilled, (state, action) => {
      state.loading = false;
      // state.jobData = action?.payload;
      state.fError = null;
    });
    builder.addCase(
      uploadPhoto.rejected,
      (state, action: { type: string; payload: any }) => {
        state.loading = false;
        state.fError = action.payload?.message;
      }
    );
  },
});

export const { reset, changeFirstJobID } = jobsSlice.actions;
const jobsReducer = jobsSlice.reducer;

export default jobsReducer;
