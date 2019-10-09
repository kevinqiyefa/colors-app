import chroma from 'chroma-js';

const colorLevels = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900];

const generatePalette = ({ paletteName, id, emoji, colors }) => {
  let newPalette = {
    paletteName,
    id,
    emoji,
    colors: []
  };

  for (let level of colorLevels) {
    newPalette.colors[level] = [];
  }

  for (let c of colors) {
    let scales = generateScales(c.color, colorLevels.length).reverse();

    for (let i in scales) {
      newPalette.colors[colorLevels[i]].push({
        name: `${c.name} ${colorLevels[i]}`,
        id: c.name.toLowerCase().replace(/ /g, '-'),
        hex: scales[i],
        rgb: chroma(scales[i]).css(),
        rgba: chroma(scales[i])
          .css()
          .replace('rgba', 'rgba')
          .replace(')', ',1.0)')
      });
    }
  }
  return newPalette;
};

//color * 1.4 dark -> color-> white
const getColorRange = hexColor => {
  return [chroma(hexColor).darken(1.4), hexColor, '#fff'];
};

const generateScales = (hexColor, numOfColors) => {
  const colorRange = getColorRange(hexColor);
  return chroma
    .scale(colorRange)
    .mode('lab')
    .colors(numOfColors);
};

export { generatePalette };
