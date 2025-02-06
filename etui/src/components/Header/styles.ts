import { StyleSheet } from 'react-native';


export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: 50,
    backgroundColor: 'yellow',
  },
  label: {
    textAlign: 'center',
    color: '#000',
    justifyContent: 'center',
    fontFamily: 'Verdana, Geneva, sans-serif',
    fontSize: 16,
    fontWeight: '600',
    letterSpacing: -0.22,
    alignSelf: 'center',
  },
  backButton: {
    position: 'absolute',
    left: 10,
  },
});
