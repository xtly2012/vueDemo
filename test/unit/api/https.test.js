import https from '@/api/https.js'

test('https.post = 404',() => {
  console.log('testststtst')
  expect(https.post('/test',{name: '1234'})).toBe(404)
})