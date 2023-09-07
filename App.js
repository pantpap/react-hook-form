import { React } from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { useForm, Controller  } from 'react-hook-form';

export default function App() {

  const { control, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = data => console.log(data);

  return (
    <View style={styles.container}>


      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            placeholder="First name"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="fullname"
      />
      {errors.firstName && <Text>This is required.</Text>}

      <Controller
        control={control}
        rules={{
         maxLength: 100,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            placeholder="Last name"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="email"
      />

      <Button title="Submit" onPress={handleSubmit(onSubmit)}/>


















      {/* <Controller
        control={control}
        
        render={({field: {onChange, value}}) => (
          <TextInput
            placeholder="Full name"
            value={value}
            onChange={onChange}
          />
        )}
        name='fullname'
      />

      <Controller
        control={control}
        
        render={({field: {onChange, value}}) => (
          <TextInput
            placeholder="Email"
            value={value}
            onChange={onChange}
          />
        )}
        name="email"
      />

      <Button title='Submit' onPress={handleSubmit(onSubmit1)}/> */}
     

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
