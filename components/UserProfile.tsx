import { View, Text, Image } from 'react-native';
import { useRoute } from '@react-navigation/native';

export default function UserProfile() {
  const route = useRoute();
  // @ts-ignore
  const { user } = route.params;
  return (
    <View className="flex-1 items-center justify-center bg-white p-6">
      <Image source={{ uri: user.image }} className="w-32 h-32 rounded-full mb-4" />
      <Text className="text-2xl font-bold mb-2">{user.firstName} {user.lastName}</Text>
      <Text className="text-base mb-1">Email: {user.email}</Text>
      <Text className="text-base mb-1">Phone: {user.phone}</Text>
      <Text className="text-base mb-1">Age: {user.age}</Text>
      <Text className="text-base mb-1">Gender: {user.gender}</Text>
      <Text className="text-base mb-1">Username: {user.username}</Text>
      <Text className="text-base mb-1">Birth Date: {user.birthDate}</Text>
      <Text className="text-base mb-1">Address: {user.address.address}, {user.address.city}</Text>
    </View>
  );
}
