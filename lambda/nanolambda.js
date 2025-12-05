module.exports.createHandler = (fn) => async (event, context) => {
  try {
    const response = await fn(event, context);
    return response;
  } catch (err) {
    console.error(err);
    return { statusCode: 500, body: 'Internal Server Error' };
  }
};
