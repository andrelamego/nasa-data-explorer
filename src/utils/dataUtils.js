export const formatDate = (date) => {
    return date.toISOString().split('T')[0];
}

export const getTodayDate = () => {
    return formatDate(new Date());
}

export const getYesterdayDate = () => {
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    return formatDate(yesterday);
}

export const isValidDate = (dateString) => {
    const date = new Date(dateString);
    const today = new Date();
    const minDate = new Date('1995-06-16');

    return date >= minDate && date <= today;
}