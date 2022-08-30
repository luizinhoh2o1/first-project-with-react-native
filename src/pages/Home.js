import React, {useState, useEffect} from 'react';

import {
  View,
  Text,
  StyleSheet,
  TextInput,
  FlatList
} from 'react-native';
import { Button } from '../components/Button';
import { SkillCard } from '../components/SkillCard';

export function Home() {

  const [newSkill, setNewSkill] = useState('');
  const [mySkills, setMySkills] = useState([]);

  function handleAddSkill() {
    setMySkills([...mySkills, newSkill]);
  }

  useEffect(() => {
    console.log("useEffect executado!")
  }, [mySkills]);
  
  return(
    <View style={styles.container}>

      <Text style={styles.title}>Welcome, Your Name</Text>

      <TextInput
        style={styles.input}
        placeholder="New Skill"
        placeholderTextColor="#555"
        onChangeText={setNewSkill}
      />

      <Button onPressAddSkill={handleAddSkill}/>

      <Text style={[styles.title, {marginTop: 40}]}>
        My Skills
      </Text>
      <FlatList
        data={mySkills}
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <SkillCard skill={item}/>
        )}
      />

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
  }
});