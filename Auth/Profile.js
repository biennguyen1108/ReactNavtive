import React, { useContext } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { AuthenticatedUserContext } from './path/to/your/context';

const Profile = () => {
  const { user } = useContext(AuthenticatedUserContext);

  return (
    <View style={styles.container}>
      <Image source={{ uri: user.photoURL }} style={styles.avatar} />
      <Text style={styles.username}>{user.displayName}</Text>
      {/* Hiển thị các thông tin khác của người dùng */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatar: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
  },
  username: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  // Các kiểu khác nếu cần
});

export default Profile;
