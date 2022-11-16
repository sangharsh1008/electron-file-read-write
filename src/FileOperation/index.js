const bfj = require("bfj");
const path = require("path");
const filePath = path.join(__dirname, "FileOperation/config.json");

const config = { ip: "192.0.2.1", port: 3000 };

const writeFile = async () => {
  for (var i = 0; i < 10; i++) {
    const result = (await bfj.read(filePath)) || [];
    const newData = { ip: "192.0.2.1", port: i + 1 };
    await bfj.write(filePath, [...result, newData]);
    console.log(result, i);
  }
};
