import { config } from "dotenv";

const result = config();

if (!result.error) {
  const parsed = result.parsed;
  if (parsed) {
    Object.keys(parsed).forEach((key) => {
      const value = parsed[key];
      if (value) {
        process.env[key] = value;
        console.log(`${key} = ${value}`);
      }
    });
  }
}
