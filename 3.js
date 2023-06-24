const array = ['My handles are'];
const instagram = '@samanthaming'
const twitter = '@samanthaming'
const tiktok = '@samanthaming'
const handles = [instagram, twitter, tiktok].join(', '); // @samanthaming, @samantha_ming, @samanthaming

array.push(handles); // ['My handles are', '@samanthaming, @samantha_ming, @samanthaming']

// array.join(' ');

// My handles are @samanthaming, @samantha_ming, @samanthaming
console.log(array)