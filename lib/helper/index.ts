type languageColors = Record<string, string>;
const languageColors: languageColors = {
    javascript: "#f1e05a",
    typescript: "#2b7489",
    java: "#b07219",
    python: "#3572A5",
    php: "#4F5D95",
    ruby: "#701516",
    swift: "#ffac45",
    go: "#00ADD8",
    c: "#555555",
    csharp: "#178600",
    cplusplus: "#f34b7d",
    shell: "#89e051",
    rust: "#dea584",
    kotlin: "#F18E33",
    scala: "#c22d40",
    objectivec: "#438eff",
    powershell: "#012456",
    haskell: "#5e5086",
    lua: "#000080",
    r: "#198CE7",
    typescriptdef: "#2b7489",
    vue: "#2c3e50",
    coffeescript: "#244776",
    apex: "#1797c0",
    elm: "#60B5CC",
    erlang: "#B83998",
    css: "#563d7c",
    html: "#e34c26",
    json: "#0b1d2c",
    dockerfile: "#384d54",
    kotlinscript: "#3a4b45",
    marko: "#42bff2",
    perl: "#0298c3",
    prolog: "#74283c",
    sql: "#e38c00",
    yaml: "#000055",
};

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

export const getLanguageColor = (language: string):string => {
    const defaultColor = "#ffffff"; 
    
    const lowercasedLanguage = language.toLowerCase();

    // Check if the language exists in the languageColors object
    if (languageColors.hasOwnProperty(lowercasedLanguage)) {
        return languageColors[lowercasedLanguage];
    } else {
        return defaultColor;
    }
};