export function colorRandom (opacity) {
    const R = Math.round(Math.random() * 256)
    const G = Math.round(Math.random() * 256)
    const B = Math.round(Math.random() * 256)
    const color = `rgba(${R}, ${G}, ${B}, ${opacity})`

    return color;
}
