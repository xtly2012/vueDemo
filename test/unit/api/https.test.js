import https from '@/api/https.js'

test('https.post = 404',() => {
  expect(https.get()).toBe(404)
})