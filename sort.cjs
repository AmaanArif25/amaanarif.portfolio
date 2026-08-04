const fs = require('fs');
const path = 'c:/amaan-arif-research-portfolio/src/data.ts';
let code = fs.readFileSync(path, 'utf8');

const startIdx = code.indexOf('export const publications: Publication[] = [');
const endIdx = code.indexOf('];\n\nexport const skills');

if (startIdx === -1 || endIdx === -1) {
  console.log('Could not find publications array');
  process.exit(1);
}

const pubsCode = code.substring(startIdx, endIdx + 2);
const arrayStr = pubsCode.replace('export const publications: Publication[] = ', '');
const pubs = eval(arrayStr);

const parseDate = (d) => {
  if (!d) return 0;
  let s = d.toLowerCase();
  
  let yearMatch = s.match(/\d{4}/);
  let year = yearMatch ? parseInt(yearMatch[0]) : 0;
  
  let month = 0;
  if (s.includes('jan')) month = 0;
  else if (s.includes('feb')) month = 1;
  else if (s.includes('mar')) month = 2;
  else if (s.includes('apr')) month = 3;
  else if (s.includes('may')) month = 4;
  else if (s.includes('jun')) month = 5;
  else if (s.includes('jul')) month = 6;
  else if (s.includes('aug')) month = 7;
  else if (s.includes('sep')) month = 8;
  else if (s.includes('oct')) month = 9;
  else if (s.includes('nov')) month = 10;
  else if (s.includes('dec')) month = 11;

  let sNoYear = s.replace(/\d{4}/g, '');
  let dayMatch = sNoYear.match(/\b\d{1,2}\b/);
  let day = dayMatch ? parseInt(dayMatch[0]) : 1;

  return new Date(year, month, day).getTime();
};

pubs.sort((a, b) => {
  const order = { 'journal': 0, 'conference': 1, 'intellectual_property': 2 };
  if (order[a.type] !== order[b.type]) {
    return order[a.type] - order[b.type];
  }
  return parseDate(b.date) - parseDate(a.date);
});

let newPubsCode = 'export const publications: Publication[] = [\n';
pubs.forEach((p, i) => {
  newPubsCode += '  {\n';
  newPubsCode += `    id: "${p.id}",\n`;
  newPubsCode += `    key: "${p.key}",\n`;
  newPubsCode += `    authors: "${p.authors}",\n`;
  newPubsCode += `    title: "${p.title}",\n`;
  if (p.subtitle) newPubsCode += `    subtitle: "${p.subtitle}",\n`;
  if (p.description) newPubsCode += `    description: "${p.description}",\n`;
  if (p.technology) newPubsCode += `    technology: "${p.technology}",\n`;
  newPubsCode += `    source: "${p.source}",\n`;
  newPubsCode += `    date: "${p.date}",\n`;
  newPubsCode += `    type: "${p.type}",\n`;
  newPubsCode += `    status: "${p.status}"`;
  if (p.doi) newPubsCode += `,\n    doi: "${p.doi}"\n`;
  else newPubsCode += '\n';
  newPubsCode += i === pubs.length - 1 ? '  }\n' : '  },\n';
});
newPubsCode += '];';

code = code.substring(0, startIdx) + newPubsCode + code.substring(endIdx + 2);
fs.writeFileSync(path, code);
console.log('Sorted successfully');
