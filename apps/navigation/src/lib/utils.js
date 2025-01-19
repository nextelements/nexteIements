const incrementDecimal = (current, step = 0.1) => {
  const next = (parseFloat(current) + step).toFixed(1);
  return next;
};

const hasOrderPrefix = (name) => {
  const regex = /^(\d+(\.\d+)?)-?/;
  return regex.test(name)
};

const getOrderPrefix = (name) => {
  // todo erweitere - 6- 5- 4- mit . 6. 5. 4. , ...
  const match = name.match(/^(\d+(\.\d+)?)-?/);
  return match ? parseFloat(match[1]) : null;
};

const isFile = (name) => {
  return name.endsWith('.mdx')
}

const isFloat = (num) => {
  return num % 1 !== 0; // Prüft, ob ein Rest bei der Division durch 1 vorhanden ist
};

const capitalize = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

const removeMDXFromURL = (url) => {
  return url.replace(/\/index\.mdx$/, '/').replace(/\.mdx/g, '');
}

const toProperCase = (text, split = '-') => {
  return text
    .split(split)
    .map(word => 
      word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
    )
    .join(' ');
}

const computedSlug = (slug) => {
  return slug.replace(/\((.*?)\)/, "$1");
}

export { toProperCase, computedSlug, removeMDXFromURL, capitalize, hasOrderPrefix, getOrderPrefix, isFile, isFloat, incrementDecimal }