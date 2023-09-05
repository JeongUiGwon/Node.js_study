const { MongoClient } = require("mongodb");

// 1. 몽고디비 연결 주소
const uri =
  "mongodb+srv://jek6020:mfhEVSytqGQibYCc@cluster0.rzb87rk.mongodb.net/test?retryWrites=true&w=majority";

// 2. 몽고디비 커넥션 연결 함수 반환
module.exports = function (callback) {
  return MongoClient.connect(uri, callback);
};
