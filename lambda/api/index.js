const { createHandler } = require('../nanolambda');
const AWS = require('aws-sdk');
const jwt = require('jsonwebtoken');

const ddb = new AWS.DynamoDB.DocumentClient();
const DATA_TABLE = process.env.DATA_TABLE || 'data';
const JWT_SECRET = process.env.JWT_SECRET || 'change-this-secret';

const handler = createHandler(async (event) => {
  const token = (event.headers?.Authorization || '').replace(/^Bearer\s+/i, '');
  if (!token) return { statusCode: 401, body: 'unauthorized' };

  let user;
  try { user = jwt.verify(token, JWT_SECRET); } catch { return { statusCode: 401, body: 'unauthorized' }; }

  if (event.httpMethod === 'GET') {
    const items = await ddb.query({
      TableName: DATA_TABLE,
      KeyConditionExpression: 'owner = :o',
      ExpressionAttributeValues: { ':o': user.email }
    }).promise();
    return { statusCode: 200, body: JSON.stringify({ items: items.Items || [] }) };
  }

  if (event.httpMethod === 'POST') {
    const body = JSON.parse(event.body || '{}');
    const id = Date.now().toString();
    await ddb.put({ TableName: DATA_TABLE, Item: { owner: user.email, id, ...body, createdAt: new Date().toISOString() } }).promise();
    return { statusCode: 201, body: JSON.stringify({ id }) };
  }

  return { statusCode: 405, body: 'method not allowed' };
});

module.exports.handler = handler;
