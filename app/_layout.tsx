import { Stack } from "expo-router";

export default function RootLayout() {
	return (
		<Stack>
			<Stack.Screen
				name="index"
				options={{
					presentation: "modal",
					title: "Modal",
					headerShown: false,
				}}
			/>
		</Stack>
	);
}
