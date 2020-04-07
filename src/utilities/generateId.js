const generateId = (prefix = 'uid') => { return `${prefix}-${Math.round(Math.random() * 1000000)}`; };

export default generateId;
