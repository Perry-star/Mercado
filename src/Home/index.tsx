import React from "react";
import { useEffect, useState } from "react";
import { Alert, FlatList, Text, TextInput, TouchableOpacity, View } from "react-native";
import { AddProduct } from "../components/AddProduct";
import { styles } from "./styles";

import firestore from '@react-native-firebase/firestore'



export function Home() {

    const [product, setProduct] = useState<string[]>([]);
    const [productName, setProductName] = useState('');

   async function handleProductAdd(){
        if(product.includes(productName)){
            return Alert.alert('Produto já existe, Você tentou adicionar um produto que já existe na lista')
        }
        firestore()
        .collection('MercDay')
        .add({
            productName,
        })
        .then(() => {
            Alert.alert('Produto adicionado com sucesso');
        })
        .catch((error) => console.error(error))

        setProduct(prevState => [...prevState, productName]);
        setProductName('');
    }


    function handleProductRemove(name:string){
        Alert.alert('Remover', `Você deseja remover o produto ${name}`, [
            {
                text: 'Sim',
                onPress: () => setProduct(prevState => prevState.filter(product => product != name))
            },
            {
                text: 'Não',
                style:'cancel'
            }
        ])
    }



    return(

        <View style={styles.container}>
            <Text style={styles.productName}>
                MercDay
            </Text>
            <View style={styles.form}>
                <TextInput 
                    style={styles.input}
                    placeholder="Selecione o produto"
                    placeholderTextColor={"#6B6B6B"}
                    onChangeText={setProductName}
                    value={productName}
                />

                <TouchableOpacity style={styles.button} onPress={handleProductAdd}>
                    <Text style={styles.buttonText}>
                        +
                    </Text>
                </TouchableOpacity>
            </View>

            {
                <FlatList
                data={product}
                keyExtractor={item => item}
                renderItem={({ item }) => (
                    <AddProduct
                        key={item}
                        name={item}
                        onRemove={() => handleProductRemove(item)}
                    />
                )}

                showsVerticalScrollIndicator={false}
                ListEmptyComponent={() => (
                <Text style={styles.listEmptyText}>
                   Nenhum produto faltando em sua lista de compras;
                </Text>
                )}
                />
            }
        </View>
       
    )
}