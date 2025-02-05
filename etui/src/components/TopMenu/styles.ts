import { StyleSheet } from 'react-native';


export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: '100%',
    height: 50,
    borderBottomWidth: 1,
    backgroundColor: '#fff',
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
  item: {
   marginLeft: 10,
  },
  activeItem: {
    color: 'grey',
  },
});
