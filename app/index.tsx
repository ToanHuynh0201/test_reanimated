import { Button, StyleSheet, View } from "react-native";
import Animated, {
	useAnimatedProps,
	useSharedValue,
	withSpring,
} from "react-native-reanimated";
import Svg, { Circle } from "react-native-svg";
const AnimatedCircle = Animated.createAnimatedComponent(Circle);

const index = () => {
	// const translateX = useSharedValue(0);
	// const handlePress = () => {
	// 	translateX.value += 50;
	// };

	// const animatedStyle = useAnimatedStyle(() => ({
	// 	transform: [{ translateX: withSpring(translateX.value) }],
	// }));

	// return (
	// 	<View style={styles.container}>
	// 		<Animated.View style={[styles.box, animatedStyle]} />
	// 		<Button
	// 			onPress={handlePress}
	// 			title="Click me"
	// 		/>
	// 	</View>
	// );
	const r = useSharedValue(20);

	const handlePress = () => {
		r.value += 10;
	};

	const animatedProps = useAnimatedProps(() => ({
		r: withSpring(r.value),
	}));

	return (
		<View style={styles.container}>
			<Svg style={styles.svg}>
				<AnimatedCircle
					cx="50%"
					cy="50%"
					fill="#b58df1"
					animatedProps={animatedProps}
				/>
			</Svg>
			<Button
				onPress={handlePress}
				title="Click me"
			/>
		</View>
	);
};

export default index;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		gap: 20,
	},
	svg: {
		width: 100,
		height: 100,
		// borderRadius: 15,
		// backgroundColor: "violet",
	},
});
