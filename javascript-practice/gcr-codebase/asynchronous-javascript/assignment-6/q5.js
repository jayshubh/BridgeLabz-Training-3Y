function waitOneSecond() {
  return new Promise((resolve) => setTimeout(resolve, 1000));
}

function runWithCallbacks() {
  console.log("Design");
  setTimeout(() => {
    console.log("Build");
    setTimeout(() => {
      console.log("Test");
      setTimeout(() => {
        console.log("Deploy");
        setTimeout(() => {
          console.log("Celebrate");
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
}

async function runWithAsyncAwait() {
  for (const stage of ["Design", "Build", "Test", "Deploy", "Celebrate"]) {
    console.log(stage);
    await waitOneSecond();
  }
}

// async/await keeps sequential asynchronous steps readable without nested
// callback indentation. Run either demonstration as needed.
runWithCallbacks();
setTimeout(runWithAsyncAwait, 5000);
