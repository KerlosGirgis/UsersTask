import { useEffect, useState } from 'react';
import { View, Text, FlatList, Pressable, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

type User = {
  id: number;
  firstName: string;
  lastName: string;
  image: string;
  email: string;
  phone: string;
  age: number;
  gender: string;
  username: string;
  birthDate: string;
  address: { address: string; city: string };
};

export default function UsersList() {
  const [users, setUsers] = useState<User[]>([]);
  const navigation = useNavigation<any>();
  useEffect(() => {
    fetch('https://dummyjson.com/users')
      .then(res => res.json())
      .then(data => setUsers(data.users));
  }, []);
  return (
    <FlatList
      data={users}
      numColumns={2}
      keyExtractor={item => item.id.toString()}
      renderItem={({ item }) => (
        <Pressable
          className="flex-1 m-2 bg-white rounded-xl items-center p-4 shadow"
          onPress={() => navigation.navigate('UserProfile', { user: item })}
        >
          <Image
            source={{ uri: item.image }}
            className="w-24 h-24 rounded-full mb-2"
            resizeMode="cover"
          />
          <Text className="text-lg font-bold text-center">{item.firstName} {item.lastName}</Text>
        </Pressable>
      )}
      contentContainerStyle={{ padding: 8 }}
    />
  );
}
