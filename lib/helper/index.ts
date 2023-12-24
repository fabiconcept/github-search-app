export const formatNumber = (num: number): string => {
    if (num >= 1000000) {
        return (num / 1000000).toFixed(1) + 'M';
    } else if (num >= 100000) {
        return (num / 1000).toFixed(0) + 'k';
    } else if (num >= 1000) {
        return (num / 1000).toFixed(1) + 'k';
    } else {
        return num.toString();
    }
};

export const formatLastUpdated = (lastUpdated: string): string => {
    const currentDate = new Date();
    const updatedDate = new Date(lastUpdated);

    const timeDifference = currentDate.getTime() - updatedDate.getTime();
    const secondsDifference = Math.floor(timeDifference / 1000);
    const minutesDifference = Math.floor(secondsDifference / 60);
    const hoursDifference = Math.floor(minutesDifference / 60);
    const daysDifference = Math.floor(hoursDifference / 24);

    if (secondsDifference < 60) {
        return `Updated ${secondsDifference} ${secondsDifference === 1 ? 'second' : 'seconds'} ago`;
    } else if (minutesDifference < 60) {
        return `Updated ${minutesDifference} ${minutesDifference === 1 ? 'minute' : 'minutes'} ago`;
    } else if (daysDifference === 0) {
        return "Updated today";
    } else if (daysDifference === 1) {
        return "Updated yesterday";
    } else {
        return `Updated ${daysDifference} ${daysDifference === 1 ? 'day' : 'days'} ago`;
    }
};