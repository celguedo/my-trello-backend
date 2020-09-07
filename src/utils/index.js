function mapMongoDBStatus(status) {
  switch (status) {
    case 0:
      return "Disconnected";
    case 1:
      return "Connected";
    case 2:
      return "Connecting";
    case 3:
      return "Disconnecting";
    default:
      return "Undefined";
  }
}

module.exports = { mapMongoDBStatus };
