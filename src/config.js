class Config {
  constructor() {
    this.baseURL = 'https://app.nodepay.ai';
    this.ipCheckURL = 'https://ipinfo.io/json';
    this.pingURL = 'http://18.142.29.174/api/network/ping';
    this.retryInterval = 300;
    this.sessionURL = 'http://api.nodepay.ai/api/auth/session';
  }
}

module.exports = Config;
