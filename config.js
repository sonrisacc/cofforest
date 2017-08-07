
export default {
  mongodbUri: 'mongodb://localhost:27017/beandb',
  port: 8080,
  ip: '127.0.0.1',
  get serverUrl() {
    return `http://${this.ip}:${this.port}`;
  }
};


