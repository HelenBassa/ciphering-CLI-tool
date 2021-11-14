class Error {
  duplicateOption(arg) {
    process.stderr.write(`Option '${arg}' is duplicate`);
    process.exit('1');
  }

  missingConfig() {
    process.stderr.write('Option \'config\' is missing');
    process.exit('1');
  }

  invalidConfig() {
    process.stderr.write('Invalid config');
    process.exit('1');
  }

  noAccessToFile(path) {
    process.stderr.write('File(s) don\'t exist or read-only');
    process.exit('1');
  }
}

export default Error;
