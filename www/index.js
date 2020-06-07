import init from "./pkg/rust_wasm_ball.js";

const runWasm = async () => {
  const webBall = await init(
    "./pkg/rust_wasm_ball_bg.wasm"
  );
  webBall.start();
};

runWasm();
