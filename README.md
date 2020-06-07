# Bouncing Ball Demo in JavaScript Canvas

A wasm-bindgen HTML Canvas demo that bounces a ball in a browser window.

This code is a fork of Bart Massey's pdx-cs-rust/webball demo, retyped by me so I could better understand the various pieces and what was going on. Original repo is here!: https://github.com/pdx-cs-rust/webball

### Build and Run
```
cargo install wasm-pack
wasm-pack build --target web --out-dir www/pkg
cargo install simple-http-server
cd www
simple-http-server --ip 127.0.0.1 -p 10333
```

Open browser to `localhost:10333/index.html` and you're good to go!
