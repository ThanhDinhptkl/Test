import React, {useState} from 'react';
import { Text, SafeAreaView, StyleSheet,Image, View,TextInput,TouchableOpacity } from 'react-native';
;

export default function App() {

const [animal] =useState([
  {
    key:"1",
    name:"Cat",
    gender:"Female",
    yob:"2 years",
    title:"123 Anywhere St, Any City",
    image: require("./Data/download(7).png"),
  },
    {
    key:"2",
    name:"Pedro",
    gender:"Male",
    yob:"3 years",
    title:"123 Anywhere St, Any City",
    image: require("./Data/download(8).png"),
  },
    {
    key:"3",
    name:"Cat",
    gender:"Female",
    yob:"2 years",
    title:"123 Anywhere St, Any City",
    image: require("./Data/download(7).png"),
  },
    {
    key:"4",
    name:"Pedro",
    gender:"Male",
    yob:"3 years",
    title:"123 Anywhere St, Any City",
    image: require("./Data/download(8).png"),
  },
    {
    key:"5",
    name:"Cat",
    gender:"Female",
    yob:"2 years",
    title:"123 Anywhere St, Any City",
    image: require("./Data/download(7).png"),
  },
    {
    key:"6",
    name:"Pedro",
    gender:"Male",
    yob:"3 years",
    title:"123 Anywhere St, Any City",
    image: require("./Data/download(8).png"),
  },
]);

const [animalType]=useState([
  {
    key:"1",
    animalType:"Cat",
    image: require("./Data/download(7).png"),
  },
  {
    key:"2",
    animalType:"Dog",
    image: require("./Data/download(7).png"),
  },
    {
    key:"3",
    animalType:"Cat",
    image: require("./Data/download(7).png"),
  },
  {
    key:"4",
    animalType:"Dog",
    image: require("./Data/download(7).png"),
  },
    {
    key:"5",
    animalType:"Cat",
   image: require("./Data/download(7).png"),
  },
  {
    key:"6",
    animalType:"Dog",
    image: require("./Data/download(7).png"),
  },
])

const rederItem=({item})=>{
  <View>
  <Text>{item.title}</Text>
  <TouchableOpacity>
  <Image source={item.image}/>
  </TouchableOpacity>
  </View>
};

  return (
   <>
   <View style={styles.container}>
   <View style={styles.header}>
   <Image source={require("./Data/download.png")} style={styles.styleHinhAnh}/>
    <Image source={require("./Data/download(1).png")} style={styles.styleHinhAnh1}/>
    <Text style={styles.inDam}>PET ADOPTION</Text>
    </View>
    <View style={styles.input}> 
    <TextInput
    style={styles.txtField}
    placeholder="Search for pets"
    />
    <Image source={require("./Data/download(2).png")} style={styles.styleHinhAnh2}/>
   </View>
   <View style={styles.bannerTxt}>
   <View>
   <Text style={styles.inDam1}>Pet Adoption</Text>
   <Text style={styles.inDam1}>Made Easy</Text>
   </View>
   <TouchableOpacity style={styles.button1}>
   <Text>Adopt now</Text>
   </TouchableOpacity>
   </View>
   <View style={styles.banner}>
   <Image source={require("./Data/Annotation2024-10-21123429.png")}/>
   </View>
   <View style={styles.cata}>
   <Text>Catagories</Text>
   <Text>Show All</Text>
   </View>
   <View style={styles.hinhAnh}>
   <Image source={require("./Data/download(4).png" )} style={styles.styleHinhAnhp1}/>
   <Image source={require("./Data/download(5).png" )} style={styles.styleHinhAnhp1}/>
   <Image source={require("./Data/download(6).png" )} style={styles.styleHinhAnhp1}/>
   </View>
   <View style={styles.hinhAnh1}>
   <Text>Cat</Text>
   <Text style={styles.left}>Dog</Text>
   <Text style={styles.left}>Rabbit</Text>
    </View>
    <View style={styles.hinhAnh4}>
     <Image source={require("./Data/download(7).png" )} style={styles.styleHinhAnh4}/>
      <Image source={require("./Data/download(8).png" )} style={styles.styleHinhAnh4}/>
    </View>
    <View>
        <Image source={require("./Data/download(9).png" )} style={styles.styleHinhAnh4}/>
      <Image source={require("./Data/download(10).png" )} style={styles.styleHinhAnh4}/>
    </View>
   </View>
   </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header:{
    flexDirection:"row",
  },
  styleHinhAnh:{
    // justifyContent:"center",
    // alignSelf:"center",
    // alignItems:"center",
    // alignContent:"center",
    width:30,
    height:30,
  },
    styleHinhAnh1:{
    left: 40,
    width:30,
    height:30,
  },
    styleHinhAnh2:{
    width:20,
    height:20,
  },
  inDam:{
    left:60,
    fontWeight:"bold",
    fontSize:20,
  },
    inDam1:{
    fontWeight:"bold",
  },
  txtField:{
    color:"gray",
  },
  input:{
    top:20,
    flexDirection:"row",
    borderWidth:0.5,
    borderRadius:5,
    padding:5,
    justifyContent:"space-between"
  },
  banner:{
    top:25,
    alignSelf:"center",
  },
    bannerTxt:{
    flexDirection:"row",
    top:25,
    justifyContent:"space-around",
  },
  button1:{
    backgroundColor:"pink",
    borderRadius:20,
    justifyContent:"center",
    alignSelf:"center",
    alignItems:"center",
    alignContent:"center",
    width:90,
  },
  cata:{
    top:40,
    flexDirection:"row",
    justifyContent:"space-between",
  },
   styleHinhAnhp1:{
    // justifyContent:"center",
    // alignSelf:"center",
    // alignItems:"center",
    // alignContent:"center",
    top:50,
    width:30,
    height:30,
  },
     styleHinhAnhp4:{
    // justifyContent:"center",
    // alignSelf:"center",
    // alignItems:"center",
    // alignContent:"center",
    top:50,
  },
  hinhAnh:{
    flexDirection:"row",
    justifyContent:"space-around",
  },
    hinhAnh4:{
    top: 60,
    flexDirection:"row",
    justifyContent:"space-around",
  },
    hinhAnh1:{
    top:50,
    flexDirection:"row",
    justifyContent:"space-around",
  },
  left:{
    left:5,
  },
});
