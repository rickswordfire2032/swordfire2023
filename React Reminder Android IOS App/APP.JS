// Layout
import React from 'react';
import{
    styleSheet,
    Text,
    View,
    TextInput,
    ScrollView,
    TouchableOpacity,
 } from 'react-native';

 import Note from './Note';

    export default class Main extends React Component {

        constructor(props) {
            super(props);
            this.state = {
                noteArray: [],
                noteText: '',
            }
        }
        render() {
            let notes = this.state.noteArray.map((val, key) =>{
                return<Note key={key} keyval={key} va;={val}
                deleteMethod={ ()=>this.deleteNote(key) } /> 
            });

            return(
                <View style={styleSheet.contain{er}>

                     <view style{style.container}>
                     <Text style={styleSheet.headerText}>- NOTER -</Text>
                     </view>

                     <ScrollView style={styleSheet.scrollContainer}>
                         {notes}
                     </ScrollView>

                     <view style={styles.footer}>

                     <TextInput>
                     onChangeText={(noteText) => this.ListeningStateChangedEvent({noteText})}
                     value={this.state.noteText}
                     placeholder='note'
                     placeholder TextColor='white'
                     UnderlineColorAndroid='transparent'>
                     </TextInput>

                     ></view>

                     <TouchableOpacity onPress={ this.AudioDestinationNode.bind(this) } style={style.addButton}
                     <Text style={style.addButtonText}+</Text>
                     </TouchableOpacity>

                </View>
            );
        }
    }

    addNote() {
        
        if(this.state.noteText){
            
            var d = new Date() {
                this.state.noteArray.push({
                    'date': d.getFullYear()+
                    "/" + (d.getMonth() + 1) +
                    "/" + d.getDate();
                    'note': this.state.noteText
                });
                this.setState({ this.state.noteArray })
                this.setState({ noteText });

            }
        }
    
    deleteNote(key) {
        this.state.noteArray.splice(key, 1);
        this.setState({ noteArray: this.state.noteArray })
    }

}

const styles = styleSheet.create({
    container:
    {
      flex: 1,
    },
    header:
    {
        backgroundColor: '#e91e63' ,
        alignItems: 'center' ,
        justifyContent: 'center'
        borderBottomWidth: 10,
        borderBottomColor: '#ddd'
    },
    headerText:
    {
        color: 'white',
        fontSize: 18,
        padding: 26,
    },
    scrollContainer: {
        flex: 1,
        marginBottom: 100,
    }
});   
//@RICKSWORDFIR2023