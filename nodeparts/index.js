const fs = require('fs');
const crypto = require('crypto');

const records = 45;

function generateRecord() {
  const states = ['IL', 'AZ', 'FL', 'MN', 'DC', 'TX', 'WA', 'NY', 'CA'];
  const types = ['Prospect', 'Customer', 'Partner', 'Private', 'Public'];

return {
    BillingPostalCode: Math.floor(Math.random() * 100000),
    BillingState: states[Math.floor(Math.random() * states.length)],
    BillingStreet: `${Math.floor(Math.random() * 1000)} ${generateRandomString(2)} St`,
    CreatedDate: new Date(2023, Math.floor(Math.random() * 12), Math.floor(Math.random() * 28) + 1).toISOString().slice(0, 10),
    Id: crypto.randomBytes(6).toString('hex').toUpperCase(),
    IsDeleted: Math.random() < 0.1,
    Name: `Company ${Math.floor(Math.random() * 1000)}`,
    Phone: `(${Math.floor(Math.random() * 999) + 100}-${Math.floor(Math.random() * 10000)}`,
    SystemModstamp: new Date().toISOString(),
    Type: types[Math.floor(Math.random() * types.length)],
    Website: `[https://loremipsum.io/](https://www.company${Math.floor(Math.random() * 1000)}.com)`,
};
}

function generateRandomString(length) {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let result = '';
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}

const csvData = [];
for (let i = 0; i < records; i++) {
  csvData.push(Object.values(generateRecord()).join(','));
}

csvData.unshift('BillingPostalCode,BillingState,BillingStreet,CreatedDate,Id,IsDeleted,Name,Phone,SystemModstamp,Type,Website'); // Add header row

const csvContent = csvData.join('\n');

fs.writeFile('accounts.csv', csvContent, (err) => {
  if (err) {
    console.error(err);
  } else {
    console.log(`Successfully created CSV file with ${records} records.`);
  }
});
