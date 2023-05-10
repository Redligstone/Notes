

const useCreateDate = () => {
    const dateObject = new Date()
    const month = dateObject.getMonth()
    let monthName;

    switch(month) {
        case 0:monthName = 'Янв';
        break
        case 1:monthName = 'Фев';
        break
        case 2:monthName = 'Март';
        break
        case 3:monthName = 'Апр';
        break
        case 4:monthName = 'Май';
        break
        case 5:monthName = 'Июн';
        break
        case 6:monthName = 'Июл';
        break
        case 7:monthName = 'Авг';
        break
        case 8:monthName = 'Сент';
        break
        case 9:monthName = 'Окт';
        break
        case 10:monthName = 'Нояб';
        break
        case 11:monthName = 'Дек';
        break
    }

    const date = `${monthName} ${dateObject.getDate()}, ${dateObject.getFullYear()} 
    (${dateObject.getHours() < 10 ? "0" + dateObject.getHours() : dateObject.getHours()}:${dateObject.getMinutes() < 10 ? "0" + dateObject.getMinutes() : dateObject.getMinutes()})`
    return date
}

export default useCreateDate