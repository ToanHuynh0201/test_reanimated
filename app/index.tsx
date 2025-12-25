import React from "react";
import { Button, StyleSheet, View } from "react-native";
import Animated, { useSharedValue, withSpring } from "react-native-reanimated";
const index = () => {
	const width = useSharedValue(100);
	const handlePress = () => {
		width.value = withSpring(Math.random() * 100 + 50);
	};
	return (
		<View
			style={{
				flex: 1,
				justifyContent: "center",
				alignItems: "center",
				gap: 50,
			}}>
			<Animated.View
				style={{
					width,
					height: 100,
					borderRadius: 15,
					backgroundColor: "violet",
				}}
			/>

			<Button
				onPress={handlePress}
				title="Press me!"
			/>
		</View>
	);
};

export default index;

const styles = StyleSheet.create({});
