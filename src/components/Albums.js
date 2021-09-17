import React, { useLayoutEffect, useRef } from 'react'
import { Pressable, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import theme from './../../assets/themes/index'
import albumPage from './../../assets/data/albumPage'
import Card from './Card'
import Separator from './Separator'
import Feather from '@expo/vector-icons/Feather'
import BottomSheetBehavior from 'reanimated-bottom-sheet'
import BottomSheetContain from './ShareAlbum/BottomSheetContain'

const Albums = ({ navigation, navigation: { setOptions } }) => {
    const sheetRef = useRef()

    useLayoutEffect(() => {
        setOptions({
            headerRight: () => (
                <TouchableOpacity onPress={openBottomSheet}>
                    <View style={styles.openSheetButton}>
                        <Feather name='plus' size={16} color={theme.colors.white}></Feather>
                    </View>
                </TouchableOpacity>
            ),
        })
    })

    const renderBottomSheetContent = () => <BottomSheetContain handleClose={closeBottomSheet} />

    const closeBottomSheet = () => {
        console.log('close bottom Sheet')
        sheetRef.current.snapTo(1)
    }

    const openBottomSheet = () => {
        console.log('open bottom Sheet')
        sheetRef.current.snapTo(0)
    }

    return (
        <>
            <ScrollView>
                <View style={styles.albumContainer}>
                    {albumPage.map((item, index) => (
                        <View key={index}>
                            <Card item={item} navigation={navigation}></Card>
                            {/* separator */}
                            {index === 1 && <Separator />}
                        </View>
                    ))}
                </View>
            </ScrollView>
            <BottomSheetBehavior
                ref={sheetRef}
                snapPoints={[250, 0]}
                initialSnap={1}
                borderRadius={10}
                enabledContentGestureInteraction={false}
                renderContent={renderBottomSheetContent}
            />
        </>
    )
}

const styles = StyleSheet.create({
    albumContainer: {
        marginBottom: theme.spacing.l,
    },
    openSheetButton: {
        width: 32,
        height: 32,
        backgroundColor: theme.colors.primary,
        marginRight: theme.spacing.m,
        borderRadius: 16,
        justifyContent: 'center',
        alignItems: 'center',
    },
})

export default Albums
