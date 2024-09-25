import { Redirect, Stack } from "expo-router";
import { Provider, useSelector } from "react-redux";
import { store } from "../(redux)/store";

const AuthLayout = () => {
  const {loginDetails} = useSelector((state:any) => state.auth )
  if (loginDetails) return <Redirect href="/(tabs)" />;

  return (
    <Provider store={store}>
      <Stack>
        <Stack.Screen
          name="sign-in"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="sign-up"
          options={{
            headerShown: false,
          }}
        />
      </Stack>

      {/* <Loader isLoading={loading} /> */}
      
    </Provider>
  );
};

export default AuthLayout;
