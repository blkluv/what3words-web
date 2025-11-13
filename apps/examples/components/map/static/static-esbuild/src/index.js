function main() {
  what3words.loader.load({
    script: {
      url: "https://what3words-web-javascript.vercel.app/",
      version: process.env.VERSION,
    },
  });
}

main();
