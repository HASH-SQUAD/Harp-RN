import React, { useEffect, useRef } from 'react';
import { WebView, WebViewMessageEvent } from 'react-native-webview';
import { StyleSheet, View, StatusBar } from 'react-native';
import Constants from 'expo-constants';

const Auth = (): React.ReactElement => {
	const statusBarHeight: number = Constants.statusBarHeight;
	const webViewRef = useRef<WebView>(null);

	const handleWebViewLoad = () => {
		webViewRef.current?.postMessage(statusBarHeight.toString());
	};

	useEffect(() => {
		if (webViewRef.current) {
			webViewRef.current.postMessage(statusBarHeight.toString());
		}
	}, [statusBarHeight]);

	return (
		<>
			<View style={styles.statusbar}>
				<StatusBar
					backgroundColor='transparent'
					barStyle='dark-content'
					translucent={true}
				/>
			</View>
			<WebView
				style={styles.container}
				source={{ uri: `${process.env.EXPO_PUBLIC_CLIENT_URL}/auth` }}
				ref={webViewRef}
				onLoad={handleWebViewLoad}
			/>
		</>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	statusbar: {
		backgroundColor: 'transparent',
	},
});

export default Auth;

//src/screens/auth/inde.tsx