import React from 'react'
import { StyleSheet, View } from 'react-native'
import DatePicker from '@mohamadkh75/react-native-jalali-datepicker';

const JalaliDatePicker = (props) => {
    return (
        <View style={styles.container}>
        <DatePicker
            style={styles.main}
            selected='1400/10/10'
            dateSeparator='/'
            minDate='1400/1/1'
            maxDate='1420/1/1'
            headerContainerStyle={{ height: '15%' }}
            yearMonthBoxStyle={styles.yearMonthBoxStyle}
            yearMonthTextStyle={styles.yearMonthTextStyle}
            iconContainerStyle={styles.yearMonthTextStyle}
            backIconStyle={styles.backIconStyle}
            nextIconStyle={styles.nextIconStyle}
            eachYearStyle={styles.eachYearStyle}
            eachYearTextStyle={styles.eachYearTextStyle}
            eachMonthStyle={styles.eachMonthStyle}
            eachMonthTextStyle={styles.eachMonthTextStyle}
            weekdaysContainerStyle={styles.weekdaysContainerStyle}
            weekdayStyle={styles.weekdayStyle}
            weekdayTextStyle={styles.weekdayTextStyle}
            borderColor='#4bcffa'
            dayStyle={styles.dayStyle}
            dayTextStyle={styles.dayTextStyle}
            selectedDayStyle={styles.selectedDayStyle}
            selectedDayColor='#4bcffa'
            // selectedDayTextColor='white'
            selectedDayTextColor='black'
            dayTextColor='#4bcffa'
            disabledTextColor='#4bcffa66'
            onDateChange={date => props.onDateChange(date)}
        />
        </View>
    );
}
const styles = StyleSheet.create({
    container : {
        width: '95%',
        height: '80%',
        maxWidth : 500,
        maxHeight : 400,
        alignContent : 'center',
        alignSelf : 'center'
    },
    main : {
        flex : 1,
        alignSelf: 'center',
        backgroundColor: '#1e272e',
        borderWidth: 1,
        borderColor: '#4bcffa',
        borderRadius: 10,
        elevation: 4
    },
    yearMonthBoxStyle : {
        width: '30%',
        height: '75%',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderRadius: 10
    },
    yearMonthTextStyle: { fontSize: 20, color: '#4bcffa' },
    iconContainerStyle : { width: `${100 / 7}%` },
    backIconStyle : {
        width: 20,
        height: 20,
        resizeMode: 'center',
        tintColor: '#4bcffa'
    },
    nextIconStyle : {
        width: 20,
        height: 20,
        resizeMode: 'center',
        tintColor: '#4bcffa'
    } ,
    eachYearStyle :{
        width: 110,
        height: 82,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#4bcffa',
        marginTop: '1.5%',
        marginBottom: 5,
        marginHorizontal: '1.5%',
        borderRadius: 10,
        elevattion : 2
    },
    eachYearTextStyle : {
        fontSize: 16,
        color: 'black'
    },
    eachMonthStyle : {
        width: `${80 / 3}%`,
        height: `${80 / 4}%`,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#4bcffa',
        marginBottom: '3%',
        borderRadius: 10,
        elevation: 3
    },
    // eachMonthTextStyle :{ fontSize: 16, color: 'white' },
    eachMonthTextStyle :{ fontSize: 16, color: 'black' },
    weekdaysContainerStyle : { height: '15%' },
    weekdayStyle : {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    weekdayTextStyle : {
        fontSize: 22,
        color: 'white',
        // color: '#808e9b',
        marginBottom: 5,
        fontWeight : 'bold'
    },
    dayStyle : {
        width: `${100 / 7}%`,
        justifyContent: 'center',
        alignItems: 'center',
        aspectRatio: 1 / 1
    },
    selectedDayStyle : {
        width: '70%',
        aspectRatio: 1 / 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 100
    }, 
    dayTextStyle : { fontSize: 25 },
})
export default JalaliDatePicker
