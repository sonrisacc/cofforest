
export default {
  port: 8080,
  ip: '127.0.0.1',
  get serverUrl() {
    return `http://${this.ip}:${this.port}`;
  }
};


