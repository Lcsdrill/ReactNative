import react from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Header = () => {
  return (
    <view style={syles.header}>
      <text style={styles.headerText}>Lista de tarefas</text>

    </view>
  );
};

const styles = StyleSheet.create({
  header: {
    flex: 1,
    backgroundColor: 'blue',
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    paddingTop: 20,
    fontSize: 24,
    fontWeight: 'bold',
    color:'white'
  },
});

export default Header;
