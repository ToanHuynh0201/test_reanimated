import React from "react";
import { Button, Dimensions, StyleSheet, View } from "react-native";
import Animated, { useSharedValue, withSpring } from "react-native-reanimated";
const { width } = Dimensions.get("screen");
const BOX_SIZE = width / 4;
const STEP = 50;
const index = () => {
	const translateX = useSharedValue(-width / 2 + BOX_SIZE / 2);
	const direction = useSharedValue(1); // 1 = sang phải, -1 = sang trái
	const handlePress = () => {
		const nextX = translateX.value + STEP * direction.value;

		const rightLimit = width / 2 - BOX_SIZE / 2;
		const leftLimit = -rightLimit;

		if (nextX > rightLimit || nextX < leftLimit) {
			// Đảo hướng
			direction.value *= -1;
			translateX.value = withSpring(
				translateX.value + STEP * direction.value,
			);
		} else {
			translateX.value = withSpring(nextX);
		}
	};
	return (
		<View style={styles.container}>
			<Animated.View
				style={[
					styles.box,
					{ transform: [{ translateX: translateX }] },
				]}
			/>
			<Button
				onPress={handlePress}
				title="Press me!"
			/>
		</View>
	);
	// const translateX = useSharedValue(0);

	// const handlePress = () => {
	// 	translateX.value = withSpring(translateX.value + 50);
	// };

	// return (
	// 	<View style={styles.container}>
	// 		<Animated.View
	// 			style={[styles.box, { transform: [{ translateX }] }]}
	// 		/>
	// 		<Button
	// 			onPress={handlePress}
	// 			title="Click me"
	// 		/>
	// 	</View>
	// );
};

export default index;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		gap: 20,
	},
	box: {
		width: BOX_SIZE,
		height: 100,
		borderRadius: 15,
		backgroundColor: "violet",
	},
});
