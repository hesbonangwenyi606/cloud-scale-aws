const { createHandler } = require('../nanolambda');
const AWS = require('aws-sdk');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const ddb = new AWS.DynamoDB.DocumentClient();
const USERS_TABLE = process.env.USERS_TABLE || 'users';
const JWT_SECRET = process.env.JWT_SECRET || 'change-this-secret';

const handler = createHandler(async (event) => {
  const body = JSON.parse(event.body || '{}');
  const { email, password, name, action } = body;

  if (!email || !password) return { statusCode: 400, body: 'email & password required' };

  if (action === 'signup') {
    const existing = await ddb.get({ TableName: USERS_TABLE, Key: { email } }).promise();
    if (existing.Item) return { statusCode: 400, body: 'user exists' };

    const hashed = await bcrypt.hash(password, 10);
    await ddb.put({ TableName: USERS_TABLE, Item: { email, password: hashed, name, createdAt: new Date().toISOString() } }).promise();
    const token = jwt.sign({ email }, JWT_SECRET, { expiresIn: '7d' });
    return { statusCode: 201, body: JSON.stringify({ token }) };
  }

  if (action === 'login') {
    const result = await ddb.get({ TableName: USERS_TABLE, Key: { email } }).promise();
    const user = result.Item;
    if (!user) return { statusCode: 401, body: 'invalid credentials' };

    const valid = await bcrypt.compare(password, user.password);
    if (!valid) return { statusCode: 401, body: 'invalid credentials' };

    const token = jwt.sign({ email }, JWT_SECRET, { expiresIn: '7d' });
    return { statusCode: 200, body: JSON.stringify({ token }) };
  }

  return { statusCode: 400, body: 'unknown action' };
});

module.exports.handler = handler;
