function generateUUID() {
    var dt = new Date().getTime();
    var uuid = dt.toString(16) + '-'.padStart((Math.random() * 0x10000000).toString(16), 8, '0')
      + '-'.padStart((Math.random() * 0x10000000).toString(16), 8, '0')
      + '-'.padStart((Math.random() * 0x10000000).toString(16), 8, '0')
      + '-'.padStart((Math.random() * 0x10000000).toString(16), 8, '0');
    return uuid;
  }
  