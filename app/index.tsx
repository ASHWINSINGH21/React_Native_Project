import { Image } from 'expo-image';
import {Platform, StyleSheet, View} from 'react-native';
import {Text} from 'react-native';
import { HelloWave } from '@/components/hello-wave';
import ParallaxScrollView from '@/components/parallax-scroll-view';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Link } from 'expo-router';

export default function HomeScreen() {
  // @ts-ignore
  return (
    <View className="flex-1 justify-center items-center" style={{ flex: 1 }}>
    <Text className="text-dark-200">
      this is the text of the page
      <Link href="/onboarding">Onboarding</Link>
    </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
