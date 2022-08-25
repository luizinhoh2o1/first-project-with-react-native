import React, {useState} from 'react';

import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity
} from 'react-native';

export function Home() {
  const [newSkill, setNewSkill] = useState('');
  const [mySkills, setMySkills] = useState([]);

  function handleAddSkill() {
    setMySkills([...mySkills, newSkill]);
  }
  
  return(
    <View style={styles.container}>

      <Text style={styles.title}>Welcome, Your Name</Text>

      <TextInput
        style={styles.input}
        placeholder="New Skill"
        placeholderTextColor="#555"
        onChangeText={setNewSkill}
      />

      <TouchableOpacity
      style={styles.button}
      activeOpacity={0.7}
      onPress={handleAddSkill}
      >
        <Text styles={styles.buttonText}>Add</Text>
      </TouchableOpacity>

      <Text style={[styles.title, {marginTop: 40}]}>
        My Skills
      </Text>

      {
        mySkills.map(skill => (
        <TouchableOpacity key={skill} style={[styles.buttonSkill, {marginVertical: 10}]}>
          <Text style={styles.textSkill}>
            {skill}
          </Text>
        </TouchableOpacity>
        ))
      }

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121015',
    paddingHorizontal: 20,
    paddingVertical: 20,
    paddingHorizontal: 30
  },
  title: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold'
  },
  input: {
    backgroundColor: '#1f1e25',
    color: '#fff',
    fontSize: 18,
    padding: 15,
    marginTop: 30,
    borderRadius: 7
  },
  button: {
    backgroundColor: '#008B8B',
    fontSize: 18,
    padding: 15,
    marginTop: 15,
    borderRadius: 7,
    alignItems: 'center'
  },
  buttonText: {
    color: '#fff',
    fontSize: 17,
    fontWeight: 'bold'
  },
  buttonSkill: {
    backgroundColor: '#1f1e25',
    padding: 20,
    borderRadius: 20,
    alignItems: 'center'
  },
  textSkill: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold'
  }
});