import { LinearGradient } from 'expo-linear-gradient';
import { ReactNode } from "react";
import { StyleSheet, View } from 'react-native';

interface ItemWrapperProps {
  index: number;
  children: ReactNode;
}

export function GradientWrapper({ children, index }: ItemWrapperProps) {
  if (index % 2 === 0) {
    return (
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        colors={['rgba(196, 196, 196, 0.24)', 'rgba(196, 196, 196, 0)']}
        style={styles.container}
      >
        {children}
      </LinearGradient>
    )
  }
  return (
    <View
      style={styles.container}
    >
      {children}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  }
})