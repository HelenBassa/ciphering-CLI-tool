class Error {
  duplicateOption(arg) {
    process.stderr.write(`Option '${arg}' is duplicate`);
    process.exit('1');
  }

  missingConfig() {
    process.stderr.write('Option \'config\' is missing');
    process.exit('1');
  }

  wrongConfig() {
    process.stderr.write('Wrong config');
    process.exit('1');
  }

  noAccessToFile(path) {
    process.stderr.write(`Can't access to file ${path}`);
    process.exit('1');
  }
}

export default Error;
