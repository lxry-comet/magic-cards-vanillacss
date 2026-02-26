export function getBorderColor(index) {
    const groupIndex = Math.floor(index / 26);
    const cyclePosition = groupIndex % 3;

    if (cyclePosition === 1) {
        return "second"; 
    } else if (cyclePosition === 2) {
        return "third";  
    }
    
    return null; 
}